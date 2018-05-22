const express = require("express");
const router = express.Router();


router.get("/",function(req,res){
	res.render("todo",{title : ' TODO Application '});
});

router.post("/",function(req,res){

});

router.put("/",function(req,res){

});

router.delete("/",function(req,res){

});

module.exports = router ;
