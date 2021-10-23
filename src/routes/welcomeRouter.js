
const express = require("express");
const welcomeRouter = express.Router();

function router(nav){
     welcomeRouter.get('/',function(req,res){
        res.render("welcome",{
             nav,
           title:"Welcome",
        });
   });
  return welcomeRouter;      
}
module.exports = router;