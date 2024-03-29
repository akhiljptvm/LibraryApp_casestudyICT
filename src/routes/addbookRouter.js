const express = require("express");
const addbookRouter = express.Router();
const Bookdata = require('../model/bookdata')
var multer = require('multer')


//image upload
const storage = multer.diskStorage({
    destination: function(request, file, callback){
        callback(null, './public/images');
    },
    filename: function(request, file, callback){
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
});

function router(nav){
     addbookRouter.get('/',function(req,res){
        res.render("AddBook",{
             nav,
           title:"Library",
        });
   });
  addbookRouter.post('/add',upload.single("image"), function(req,res){
    // console.log(req.file)
    var item = {
      title: req.body.title,   //in get method we use query instead of body
      author: req.body.author,
      genre: req.body.genre,
      image: req.file.filename,   
    }
         var book = Bookdata(item);  
         book.save(); //save to db
         res.redirect('/adminlogin/add');
  
  });


  //  addbookRouter.post('/add',function(req,res){  //if use multer add ,,upload.single('image')
  //   //  res.send("Data is added..thank you!")
  //   var item = {
  //     title: req.body.title,   //in get method we use query instead of body
  //     author: req.body.author,
  //     genre: req.body.genre,
  //     image: req.body.image
  //   }
  //    var book = Bookdata(item);  
  //    book.save(); //save to db
  //    res.redirect('/books');
  
  //  });



  return addbookRouter;      
}
module.exports = router;