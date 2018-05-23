const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

//STATIC
app.use(express.static('static'));

//VIEW ENGINE
app.set('view engine','ejs');

//ROUTES
app.use("/",require("./routes/list"));

app.listen(8080, function(){
	console.log("Listening to port 8080");
});