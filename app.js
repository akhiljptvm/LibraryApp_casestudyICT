const express = require("express");
const app = new express();
const port = process.env.PORT||2000

const nav=[{
      link:"/books",name:"books"
   },
   {
      link:'/loginhome',name:'Login'
    },
  
    {
      link:'/signup',name:'signup'
    },
 
    {
      link:'/addBook',name:'Add Book'
    },
    {
      link:'/Author',name:'Authors'
    },
    {
      link:'/AddAuthor',name:'Add Author'
    },
    {
      link:'/login',name:'Login'
    },
    {
      link:'/adminlogin',name:'Login'
    },
    {
      link:'/',name:'Sign Out'
    },
    {
      link:'/welcome',name:'Welcome'
    },
    {
      link:'/adminbook',name:'Bookadmin'
    },
],
booksRoutes = require('./src/routes/booksRoutes')(nav)
addbookRouter = require('./src/routes/addbookRouter')(nav)
authorRouter = require('./src/routes/authorRoutes')(nav)
addauthorRoutes = require('./src/routes/addAuthorRoutes')(nav)
loginhomeRouter = require('./src/routes/loginhomeRoutes')(nav)
loginRouter = require('./src/routes/loginRoutes')(nav)
adminRouter = require('./src/routes/adminRoutes')(nav)
signupRouter = require('./src/routes/signupRoutes')(nav)
welcomeRouter = require('./src/routes/welcomeRouter')(nav)
// adminbookRouter = require('./src/routes/adminbookRouter')(nav)
// adminRoutes = require('./src/routes/adminRoutes')(nav)

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static('./public')) // or __dirname +
app.set('views','./src/views') //or __dirname+'./src/views'
app.use('/books',booksRoutes);
app.use('/addBook',addbookRouter);
app.use('/author',authorRouter);
app.use('/addAuthor',addauthorRoutes)
app.use('/loginhome',loginhomeRouter)
app.use('/login',loginRouter)
app.use('/adminlogin',adminRouter)
app.use('/signup',signupRouter)
app.use('/welcome',welcomeRouter)
// app.use('/adminbook',adminbookRouter)
// app.use('/admin',adminRoutes)

app.get('/',function(req,res){
   res.render('index',{
       nav,
        title:"Library"
   });
});

// app.use((req, res, next)=> {
//   res.locals.message = req.session.message;
//   delete req.session.message;
//   next();
// })

app.listen(port,()=>{
  console.log("server ready at:" +port)});