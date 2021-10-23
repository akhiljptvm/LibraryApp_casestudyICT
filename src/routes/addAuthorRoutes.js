const express = require("express");
const addauthorRouter = express.Router();
const Authordata = require('../model/authordata')
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
     addauthorRouter.get('/',function(req,res){
        res.render("AddAuthor",{
             nav,
           title:"Library",
        });
   });


   addauthorRouter.post('/add',upload.single("image"), function(req,res){
     // console.log(req.file)
     var item = {
       name: req.body.name,   //in get method we use query instead of body
       genre: req.body.genre,
       book: req.body.book,
       image: req.file.filename,   
     }
          var author = Authordata(item);  
          author.save(); //save to db
          res.redirect('/adminlogin/addauthor');
   
   });
  return addauthorRouter;      
}
module.exports = router;