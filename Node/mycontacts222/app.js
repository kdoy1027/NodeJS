const express = require("express")
const app = express()






//연락처 가져오는 기능
app.get("/", (req, res)=>{
    res.send("hello Node!")
})


//연락처 저장하는 기능
app.post("/new", (req,res)=>{
    res.send("Create New Mamagement!")
})


//특정 조건을 붙여 선택하고 싶은 것만 빼옴  //  [/:id]
app.get("/contacts/:id", (req, res) =>{
    res.send(`View contact ID : ${req.params.id}`)
})



app.listen(3000,()=>{
    console.log("서버 실행 중!!")
})

