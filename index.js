
const express=require('express')
const app=express()
const bodyParser = require('body-parser')
const router=express.Router()
const PORT= process.env.PORT || 5000
const path =require('path')
// create application/json parser
var jsonParser = bodyParser.json()

app.get('/normal',(req,res)=>{
  console.log("coll");
  const mes="heee"
  data={
    mes
  }
  res.send(data)
})
app.post('/hello',jsonParser,(req,res)=>{
  
  const spawn =require("child_process").spawn;
  const value=['./hello.py'];
  const value1=Object.values(req.body);
  const value2=value.concat(value1);
 
  var process=spawn('python',value2);
  process.stdout.on('data',function(data){
    
      res.send(data.toString());
     
  })  
});

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT,()=>{
    console.log("sever is running on port "+PORT)
  })
  