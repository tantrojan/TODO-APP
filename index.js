const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var port = process.env.port || 5000;
//BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

//STATIC
app.use(express.static('static'));

//VIEW ENGINE
app.set('view engine','ejs');

//ROUTES
app.use("/",require("./routes/list"));

app.listen(port, function(){
	console.log(`Listening to port ${port}`);
});
