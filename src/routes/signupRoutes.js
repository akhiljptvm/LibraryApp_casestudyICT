const express = require("express");
const signupRouter = express.Router();
const alert = require("alert");

const Userdata = require('../model/userdata')


function router(nav) {
    signupRouter.get('/', function (req, res) {
        res.render("signup", {
            nav,
            title: "Sign Up",
        });
    });
    // 
    signupRouter.post('/add', function (req, res) {
        var item = {

            email: req.body.email,
            password: req.body.password,
            dob: req.body.dob,
            number: req.body.number,

        }

        Userdata.findOne({ email: item.email }).then(user => {
            if (user) {
                alert("Email already registered!");
                res.redirect('/signup');
            }
            else {
                var newuser = Userdata(item);
                newuser.save();
                alert("Signup successful!");
                res.redirect('/login');
            }
        })

    });

    // 

    return signupRouter;
}
module.exports = router;