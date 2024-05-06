// const express = require('express')
import express from 'express'

const app = express();

app.use(express.static('dist'));

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:1,
            title:'A joke',
            content:'This is a second joke'
        },
        {
            id:1,
            title:'A joke',
            content:'This is a third joke'
        },
        {
            id:1,
            title:'A joke',
            content:'This is a fourth joke'
        },
        {
            id:1,
            title:'A joke',
            content:'This is a fifth joke'
        },
    ];

    res.send(jokes);
})


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})