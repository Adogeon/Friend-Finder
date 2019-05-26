var express = require("express");
var router = express.Router();
var Friend = require("../data/friends")

var friendArray = Friend.frdArr;

router.post("/freonds",function(req,res) {
    var newFriend = req.body;
    var match = Friend.findBestMatch(newFriend,friendArray);
    friendArray.push(newFriend);
    return res.json(match);
})

router.get("/freinds",function(req,res) {
    return res.json(friendArray);
})

module.exports=router;