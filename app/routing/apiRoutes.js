var express = require("express");
var router = express.Router();
var Friend = require("../data/friends.js")

var friendArray = Friend.frdArr;

router.post("/friends",function(req,res) {
    var newFriend = req.body;
    var match = Friend.findBestMatch(newFriend,friendArray);
    friendArray.push(newFriend);
    return res.json(match);
})

router.get("/friends",function(req,res) {
    return res.json(friendArray);
})

module.exports=router;