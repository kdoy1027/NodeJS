
//fs 모듈 writeFile 함수의 flag 옵션 

const fs = require("fs")
let content = `
<flag 값>
"a" : 내용을 추가하기 위해 파일을 열며, 만약에 파일이 없다면 파일을 생성합니다.
"ax" : 내용을 추가하기 위해 파일을 열며 만약에 파일이 없다면 파일을 생성하지만, 파일이 없다면 실패
"a+" : 파일을 읽고 추가하기 위해 파일을 열며, 만약에 파일이 없다면 파일을 생성합니다.

`               // ``(벡틱 기호 안에 추가하고 싶은 내용을 적기)

fs.writeFileSync("text-1.txt", content, {flag : "a"})