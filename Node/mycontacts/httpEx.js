const http = require("http");

const server = http.createServer((req,res)=>{
    const{method, url} =req;
    res.setHeader("content-type", "text/plain; charset=utf-8")


    if(method ==="GET" && url ==="/home"){
        res.statusCode = 200;
        res.end("HOME")

    }else if(method ==="GET" && url === "/about") {
        res.statusCode = 200;
        res.end("ABOUT")

    // }else if(method ==="GET" && url === "/nodeclass") {
    //     res.statusCode = 200;
    //     res.end("FUNNY NODE CLASS \n 오늘 유난히 너무 졸려서 정신을 못차리겠어요.\n 아침에 나올 때 커피라도 사올 걸 그랬네. 샷 추가해서 마시면 좋을텐데 너무 아쉽다. \n 오늘만 지나면 주말이라 너무 좋다. a/s맡긴 컴퓨터는 도대체 언제 올까 \n 화요일에 보냈는데 왜 다음 주 수요일에 되어서야 온다고 하는 건지 도무지 이해할 수가 없다.")

    }else {
        res.statusCode = 404;
        res.end("Not Found")
    }

});

server.listen(3000,()=>{
    console.log("3000번 포트에서 서버 실행 중")
})