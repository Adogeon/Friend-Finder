var express = require("express");
var router = express.Router();

router.get("/",function(req,res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
})

router.get("/survey",function(req,res) {
    res.sendFile(path.join(__dirname + '/public/friends.html'));
})

module.exports=router;