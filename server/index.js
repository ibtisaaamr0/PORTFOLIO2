
// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(express.json());

// const contactMessages = [];

// app.post('/api/contact', (req, res) => {
//   const { name, email, message } = req.body;
//   console.log('Received:', req.body);

//   contactMessages.push({ name, email, message });
//   res.status(200).json({ success: true, message: 'Saved temporarily in memory' });
// });

// app.get('/api/contact', (req, res) => {
//   res.json(contactMessages); 
// });

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });


const express=require("express");
const cors=require("cors")
const db=require("./db")

const app=express();

app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json());

app.post("/api/contact", (req,res)=>{
  const {name, email,message}=req.body;

  const query =`
  INSERT INTO contacts(name , email , message)
  VALUES(? , ?, ?)`
  
  db.run(query, [name,email,message],function(err){
    if(err)
    {
      return res.status(500).json("error")
    }
    else{
      return res.status(200).json({message:"Data stored"})
    }
  })
});


app.listen(5000,()=>{
  console.log("port running on http://localhost:5000")
});