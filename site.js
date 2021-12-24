async function getAll(){
    let body=await (await(fetch("/finalProj/info"))).json();
    let strOption=``;
    let strTable=`
    <tr>
        <th>domain</th>
        <th>webpage</th>
        <th>name</th>
        <th>counter</th>
        <th>add student</th>
    </tr>
    `;

    for(let university of body){
        strOption+=`<option>${university.name}</option>`;
        strTable+=`
        <tr>
            <td>${university.domain}</td>
            <td>${university.web_page}</td>
            <td>${university.name}</td>
            <td>${university.counter}</td>
            <td><button onclick="addStudent('${university.name}')"> Add Student </button></td>
        </tr>
        `;
    }
    document.getElementById("info").innerHTML=strTable;  
    document.getElementById("universities").innerHTML=strOption; 
    document.getElementById("delete").innerHTML="delete university from list"; 
    document.getElementById("add").innerHTML="add university to the list"; 
    
}
async function addUniversity(){
    let name=document.getElementById("name").value;
    let domain=document.getElementById("domain").value;
    let webPage=document.getElementById("web_page").value;
    let initParam= { 
        "method":"POST",
         headers: {"Content-Type": "application/json"},
         body:`{"domain":"${domain}", "web_page":"${webPage}" , "name":"${name}","counter":0}`
        };
    let res=await (await (fetch(`/finalProj/add`,initParam))).json();
    console.log(res);
    getAll();
}

async function addStudent(name){

    let universityName=name;
    

    let initParam= { 
        "method":"PUT",
         headers: {"Content-Type": "application/json"},
         body:`{"counter": ${0}}`
    };

    let res=await (await (fetch(`/finalProj/edit/${universityName}`,initParam))).json();
    alert(res.message);
    getAll();

}
async function deleteUniversity(){
    let select=document.getElementById("universities");
    var opt = select.options[select.selectedIndex];
    let res=await (fetch(`/finalProj/delete/${opt.text}`,{"method":"DELETE"}));
    console.log(res.status);
    getAll();
}

onload=()=>{
    getAll();
}