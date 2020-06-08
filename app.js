const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname + "/date.js");
const app = express();
//you can see that when they talk about arrays ex: const arr=[];
//when we create a constant which is an array, it's actually possible to push new items into the array. ex: arr.push('A')       -->['A']
//But it's not possible to simply assign it to a brand new array. ex: arr=['B']           ---->wrong
//This is one of the things that doesn't really stay constant.
//here we are pushing new items so we can use const instead of let or var
const items=["Buy Food","Cook Food","Eat Food"];
const workItems=[];
app.set('view engine', 'ejs'); //always put it below app=express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res) {
  const day= date.getDate();//activate getDate() function here
  //let day= date.getDay();
  res.render("list",{ListTitle: day, newListItems: items});
});

app.post("/",function(req,res){

  const item = req.body.newItem;
  if(req.body.list === "work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }

});
app.get("/work", function(req,res){
  res.render("list", {ListTitle:"work List",newListItems: workItems});
});
app.post("/work",function(req,res){
  const item=req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});
app.get("/about", function(req,res){
  res.render("about");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
