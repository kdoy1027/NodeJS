const fs = require("fs")

fs.appendFile("./text-2.txt", "\n\n appending 함수를 통해서 새롭게 추가한 내용입니다.", (err)=>{
    if(err){
        console.log(err)
    } console.log("appending to file")
})