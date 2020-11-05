const router=require("express").Router()

router.get("/",  (req,res)=>{
    // res.send("Hello Jason")
    res.render('pages/homePage')
})

// code used for front end to scroll

module.exports=router