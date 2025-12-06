import express from 'express';

const app = express();

app.use(express.json());

app.get('/get-user', (req,res) => {
    res.send("api success");
})

app.put('/edit-user',(req,res)=>{
    let mydata = req.body;
    console.log(mydata);
    res.end("data edited");
})

app.post('/add-user',(req,res) => {
    let data = req.body;
    console.log(data); // undefined
    res.send("data added");
});

app.delete('/delete-user',(req,res)=>{
    res.send("user deleted");
})

app.listen(5000, () => {
    console.log("server running at 5000");
});