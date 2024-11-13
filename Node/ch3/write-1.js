//파일 복사

const fs = require("fs")

const data = fs.readFileSync("example.txt", "utf8")
fs.writeFileSync("text-1.txt",data)

//example.txt 을  text-1.txt 의 새 파일로 1개 만듦.
// 만일 새로 만드는 파일의 이름과 겹치는 파일이 있을 경우 새로 만드는 내용을 덮어씀.
// 주의!!!!