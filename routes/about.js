const router= require('express').Router()

router.get('/', (req,res)=>{
    res.render('pages/aboutPage.ejs')
})

module.exports=router