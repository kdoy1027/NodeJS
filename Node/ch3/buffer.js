//버퍼 살펴보기 - 이전 데이터와 문자열

const fs = require("fs")

fs.readFile("example.txt", (err,data)=> {
    if(err){
        console.log(err)
    } else {
        console.log(data) // 이전 데이터 표시
        console.log("\n")
        console.log(data.toString()) // 문자 데이터 표시
    }
})