
const express = require("express");
const adminRouter = express.Router();
const Bookdata = require('../model/bookdata')
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
     adminRouter.get('/',function(req,res){
        res.render("adminlogin",{
             nav,
           title:"Library",

        });
   });
   adminRouter.get('/add', function(req, res)
    {
     Bookdata.find()
     .then(function(books){
        res.render("adminbooks",{
           nav,
         title:"Library",
         books
     })
})

    });

    adminRouter.get('/addBook', function(req,res){
     Bookdata.find()
     .then(function(books){
         res.render("Addbook",
         {
             nav, title: 'Books', books  
         });
     })
     
 }); 
 
 
// Delete Book      

adminRouter.get('/deleteBook/:i',function(req,res){
  
  const id = req.params.i;
  var del = Bookdata.findByIdAndDelete(id);
    
  del.exec(function (err){
    if(err) throw err;
    res.redirect("/adminlogin/add");  
     
  })
});
// Update Book Form
adminRouter.get('/updateBook/:i',function(req,res){

  const id = req.params.i;
  Bookdata.findOne({_id:id})
  .then(function(book){
   res.render('updatebook',{
       nav,
       title: 'Books',
       book
      
   });
  });
});

// Update Book Action
adminRouter.post('/updateB/:i',upload.single("image"),function(req,res){
  console.log('UPDATING',req.body);
  const id = req.params.i;
  var update = Bookdata.findByIdAndUpdate(id,{
       title:req.body.title,
       author: req.body.author,
       genre:req.body.genre,
       image: req.file.filename,
       
  });
  // upload(req, res, function (error) {
  //   if (error) {
  //     console.log(`upload.single error: ${error}`);
  //     return res.sendStatus(500);
  //   }
  //   console.log("success upload");
  // }); 
  update.exec(function (err,data){
    if(err) throw err;
    res.redirect("/adminlogin/add");  
  })
});
 

    //Router to add author
  //   adminRouter.get('/AddAuthor',function(req,res){
  //     res.render("AddAuthor",
  //       {
  //           nav,
  //           title
  //       }   
  //     );
  
  //     adminRouter.post('/addA',upload.single("image"),function(req,res){
  //       var item = {
  //          name: req.body.name,
  //          genre: req.body.genre,
  //          books: req.body.books,
  //          image: req.file.filename
  //         }
  //        upload(req, res, function (error) {
  //         if (error) {
  //           console.log(`upload.single error: ${error}`);
  //           return res.sendStatus(500);
  //         }
  //         console.log("success upload");
  //       }); 
  
  //         console.log('Files Uploaded: ');
  //         var author = Authordata(item);
  //         author.save(); //save to DB
  
          
  //         res.redirect('/adminhome/authors');
  //       });
      
  // });


  adminRouter.get('/addauthor', function(req,res){
    Authordata.find()
       .then(function(authors){
        res.render("adminAuthors",{
           nav,
         title:"Admin Author",
         authors
      });
       })
    
});


  
  adminRouter.get('/updateAuthor/:i',function(req,res){
  
    const id = req.params.i;
    Authordata.findOne({_id:id})
    .then(function(authors){
     res.render('updateauthor',{
         nav,
         title: 'Authors',
         authors,
         admin:true
     });
    });
  });
  
  adminRouter.post('/updateA/:i',upload.single("image"),function(req,res){
    console.log('UPDATING',req.body);
    const id = req.params.i;
    var update = Authordata.findByIdAndUpdate(id,{
         name:req.body.name,
         genre:req.body.genre,
         book: req.body.book,
         image: req.file.filename,

    });
   
    // upload(req, res, function (error) {
    //   if (error) {
    //     console.log(`upload.single error: ${error}`);
    //     return res.sendStatus(500);
    //   }
    //   console.log("success upload");
    // });
  
    update.exec(function (err,data){
      if(err) throw err;
      res.redirect("/adminlogin/addauthor");
 
    })
  });
  
  adminRouter.get('/deleteAuthor/:i',function(req,res){
    
    const id = req.params.i;
    var del = Authordata.findByIdAndDelete(id);
      
    del.exec(function (err){
      if(err) throw err;
      res.redirect("/adminlogin/addauthor");  
       
    })
  });
  

  return adminRouter;      
}
module.exports = router;