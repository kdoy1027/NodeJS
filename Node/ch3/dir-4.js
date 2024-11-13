// 내용이 있는 디렉토리 삭제하기 - rm

const fs = require("fs")

fs.rm("./test2", {recursive : true},(err) =>{
    if(err) {
        console.log(err)
    } else {console.log("folder deleted")
        
    }
})