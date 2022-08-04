const express=require("express");
const app=express();


let items=[];
let workItems=[];

const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

 app.use(bodyParser.urlencoded({encoded: true}));
 app.use(express.static("public"));
 
 app.set('view engine', 'ejs');
 

 app.get("/",function(req,res){
 	res.render("list",{listTitle : date(), newListItems: items});
 });

 app.post("/",function(req, res){
 
 	let item=req.body.newItem;
 	if(req.body.list === "Work"){
 		workItems.push(item);
 		res.redirect("/work");
 	}
 	else{
 	items.push(item);
	res.redirect("/");
  }

 });

 app.get("/work", function(req,res){
 	res.render("list", {listTitle: "Work List", newListItems: workItems});
 });

 app.post("/work", function(req, res){
 	let item = req.body.list;
 	// workItems.push(item);
 	res.redirect("/");

 });

 app.get("/about", function(req, res){
 	res.render("about");
 });

 app.listen(3000, function(){
 	console.log("Started on 3000");
 });