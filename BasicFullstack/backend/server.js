import express from 'express';

const app = express()


app.use(express.static('dist'))

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// })

// get a list of 5 jokes
const jokes = [
    {id:1,title:'A joke 1',content:'This is a joke1'},
    {id:2,title:'A joke 2',content:'This is a joke 2'},
    {id:3,title:'A joke 3',content:'This is a joke 3'},
    {id:4,title:'A joke 4',content:'This is a joke 4'},
    {id:5,title:'A joke 5',content:'This is a joke 5'},
    {id:6,title:'A joke 6',content:'This is a joke 6'},
    {id:7,title:'A joke 7',content:'This is a joke 7'}
  ] 

// for industries standard
app.get('/api/jokes',(req,res)=>{
      
      res.send(jokes)
})

const port = process.env.PORT || 5300


app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})