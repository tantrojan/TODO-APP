const express = require("express");
const router = express.Router();
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var input_list = [];
var name = '';

router.get("/",function(req,res){
	if(name === '')
	{
		res.render('namereq.ejs');
	}
	else
	{
		res.render("todo.ejs",
		{	name : name,
			todo_list : input_list
		});
	}

});

router.post("/",function(req,res){
	if(name==='')
	{
		name = req.body.name;
		res.render("todo.ejs",
		{	name : name,
			todo_list : input_list
		});
	}
	else{
		input_list.push(req.body.item);
		res.render("todo.ejs",
		{	name : name,
			todo_list : input_list
		});
	}
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
