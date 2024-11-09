const express=require('express')
const mongoose=require('mongoose')

const route=express.Router();


route.get('/home', async (request, response) => {
    return response.render('main')
})


module.exports = route