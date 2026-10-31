require('dotenv').config()
const express = require('express');
//or import express from "express"
const app = express();
//app.___ can use anything
const port = 4000;
//where server listens
app.get('/', (req, res) => {
  res.send('Hello World!');
});
//(request,response) is a callback
// /=home route

app.get('/twitter', (req, res)=> {
    res.send('whyhimanshu')
})
app.get('/login', (re, res)=> {
    res.send('<h1> login here </h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
//listen krta hi jaega