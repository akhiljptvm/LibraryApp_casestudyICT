
const express = require("express");
const loginRouter = express.Router();
const alert = require("alert");
const Userdata = require('../model/userdata');

function router(nav) {
    loginRouter.get('/', function (req, res) {
        res.render("login", {
            nav,
            title: "User Login",
        });
    });

    loginRouter.post('/check', function (req, res) {
        var items = {
            email: req.body.email,
            password: req.body.password
        }

        Userdata.findOne({
            email: req.body.email,
            password: req.body.password
        })
            .then(user => {
                if (user) {
                    alert("Login successful!");
                    res.redirect('/welcome');
                }
                else {
                    alert("Email and Password donot match.");
                    res.redirect('/login')
                }
            })
    });

    return loginRouter;
}
module.exports = router;



