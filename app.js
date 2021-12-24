const express=require("express");
const app=express();
const mongoose=require('mongoose');
const dbURI='mongodb+srv://codeUser:ltU4j2KhSciBC8sz@cluster0.6xvtr.mongodb.net/MemiTable?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result)=>console.log("DB is connected"))
    .catch((err)=>console.log(err));
//const bodyParser = require('body-parser');
//app.use(express.static(__dirname));
/*
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let universitiesArr=require("./universities.json");

for(let i=0; i<universitiesArr.length; i++){
    universitiesArr[i]["counter"]=0;
}


app.get("/finalProj/info",(req,res)=>{
    res.status(200);
    res.send(universitiesArr);
})

app.put("/finalProj/edit/:name",(req,res)=>{
    let university=universitiesArr.find(e=>e.name==req.params.name);

    if(university){
        university.counter+=1;
        res.status(200);
        res.send({"message":"Success!"});
    }
    else{
        res.status(400);
        res.send({"message":"Failed!"}); 
    }

})
app.delete("/finalProj/delete/:name",
    (request, response) => {
        universitiesArr = universitiesArr.filter(e => e.name != request.params.name);
        response.status(204); 
        response.send();
    }
);
app.post("/finalProj/add",
    (request, response) => {
        console.log("Passed:",request.body );
        universitiesArr.push(request.body);
        response.status(201);
        response.send({ "message": "University added successfully to the table" });
    }
);
*/

app.listen(4500, ()=>{console.log("Success")});
