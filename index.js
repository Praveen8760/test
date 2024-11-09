
const express=require('express')
const mongoose=require('mongoose')

const Main_route=require('./routes/main_route');

const app=express();
const PORT=process.env.PORT || 3000;


app.set('view engine','ejs');

// static file
app.use(express.static('src'))
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));

app.use('/', Main_route);


app.get('/',(require,response)=>{
    return response.redirect('/home')
})

app.listen(PORT,(err)=>{
    if(err){
        console.log("server Error");
    }
    else{
        console.log(`Server running in PORT: ${PORT}`);
       
    }
})