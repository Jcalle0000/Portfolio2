const express = require('express')
const app=express()
const router=express.Router()
// const port=3636

const mainPageRouter= require("./routes/portfolio")
const aboutRouter= require("./routes/about")
app.use("/about", aboutRouter)
app.use("/MainPage", mainPageRouter)

// app.get('/', (req,res)=>{

//     res.render('pages/homePage')
// })

app.use('/', mainPageRouter)

// for our html(EJS) - needed for multiple pages
app.set('view engine', 'ejs')
app.use('/assets', express.static('assets')) // css goes here
app.use( express.static("public") ) // pictures go 


// app.listen(port, ()=>{
//     console.log(`app listening at http://localhost:${port}`)
// })

app.listen(process.env.PORT || 3636)
console.log("localhost:3636")

