const express=require("express");
const app=express();
const port=process.env.PORT || 7000; // jb hm website host krenge toh port no is treeke se use krenge
const path=require("path")
const hbs=require("hbs");
const exp = require("constants");

const viewsPath=path.join(__dirname,"./templates/views")
const partialPath=path.join(__dirname,"./templates/partial")


app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(viewsPath))


app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404",{
        errorMsg:"oops! page not found"
    })
})
app.listen(port,()=>{
console.log(`http://localhost:${port}`)
});