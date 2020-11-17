const router= require('express').Router()

router.get('/', (req,res)=>{
    res.render('pages/aboutPage.ejs')
})

router.get('/exp', (req,res)=>{
    res.render('pages/experiment.ejs')
} )

module.exports=router