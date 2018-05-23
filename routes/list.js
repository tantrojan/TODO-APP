const express = require("express");
const router = express.Router();


router.get("/",function(req,res){
	res.render("todo.ejs",
	{	title : ' TODO Application ',
		name : 'Tanmoy ',
		todo_list : ['Learning node.js', 'Doing User Authentication', 'Building full BLog Application'],
	});
	
});

// router.post("/",function(req,res){

// });

// router.put("/",function(req,res){

// });

// router.delete("/",function(req,res){

// });

module.exports = router ;
