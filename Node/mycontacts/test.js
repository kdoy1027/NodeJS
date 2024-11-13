const http = require("http");

const server = http.createServer((req, res) =>{
    console.log("정말 바뀔까??? 이게 바뀌네 ㄷㄷ");
})

server.listen(3000, ()=>{
    console.log("서버 실행 중")
});