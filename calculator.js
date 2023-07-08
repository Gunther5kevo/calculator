
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var result = num1 + num2;

  res.send("The result is:" + result);
});

app.post("/bmicalculator", function(req, res){
var w1 = Number(req.body.w1);
var h1 = Number(req.body.h1);

var answer = w1/ h1

  res.send("Your BMI is:" +answer);
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
