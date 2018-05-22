const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static('static'));

app.set('view engine','ejs');

app.use("/",require("./routes/list"));

app.listen(3000, function(){
	console.log("Listening to port 3000");
});