const express = require("express")
const app = express()

app.set('view engine','ejs')

app.get("/contact",(req,res)=>{
    // console.log(req)
    // res.send("<h1>This is about page.</h1>")
    // res.render("about.ejs",{name : name})

    const Heading = "Aces Workshop"
    res.render("about.ejs",{Heading})
})

app.listen(3000,()=>{
    
    console.log("Nodejs project has started at port "+3000 )
})