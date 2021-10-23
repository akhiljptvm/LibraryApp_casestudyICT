const express = require("express");
const loginhomeRouter = express.Router();

function router(nav){
     loginhomeRouter.get('/',function(req,res){
        res.render("loginhome",{
             nav,
           title:"Library",
        });
   });
  
  return loginhomeRouter;      
}
module.exports = router;