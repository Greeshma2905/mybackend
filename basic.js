import express from 'express';

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello this is from backend");
})

app.get('/get-users',(req,res)=>{
    res.send("hello this is from frontend");
})

app.listen(7005, ()=>{
    console.log("server running at port 7005")
});