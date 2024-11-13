//비동기 처리 - 파일 삭제

const fs = require("fs")

if(!fs.existsSync("./text-2.txt")){
    console.log("file does not exist")
} else {
    fs.unlink(".//text-2.txt", () => {
        console.log("file deleted")
    })
}

//text-1~2 싹 다 사라진 상태 정상임 
