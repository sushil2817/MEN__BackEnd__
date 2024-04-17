// const express = require('express')
import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });

// get a list of five jokes

app.get('/api/jokes',(req,res)=>{
        const jokes = [
            {
                id: 1,
                title:'A joke',
                content: "I love my dog"
            },
            {
                id: 2,
                title:'Another joke',
                content: "I love my cat"
            },
            {
                id: 3,
                title:'Another joke',
                content: "I love my dog"
            },
            {
                id: 4,
                title:'Another joke',
                content: "I love my cat"
            },
            {
                id: 5,
                title:'Another joke',
                content: "I love my dog"
            }
        ];
        res.send(jokes);

})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})