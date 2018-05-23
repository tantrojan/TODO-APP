const express = require("express");
const router = express.Router();

var input_list = [];
router.get("/",function(req,res){
	res.render("todo.ejs",
	{	title : ' TODO Application ',
		name : 'Tanmoy ',
		todo_list : input_list
	});

});

router.post("/",function(req,res){
	console.log(req.body);
	input_list.push(req.body.item);
	res.render("todo.ejs",
	{	title : ' TODO Application ',
		name : 'Tanmoy ',
		todo_list : input_list
	});
});


router.delete("/:item",function(req,res){
	console.log("Delete Request Received");
	input_list = input_list.filter(function(todo){
		return todo.replace(/ /g, '-') !== req.params.item;
	});
	console.log(input_list);
	console.log(req.params.item);
	res.json(input_list); // this is received by AJAX

});

module.exports = router ;
