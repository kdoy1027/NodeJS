const c = require("ansi-colors"); //패키지 사용 시 ruquire()

function hello(name){
    console.log(c.green(name)+"님, 반갑습니다.!!")
}

hello("집에 가고 싶다....공휴일인데 왜 나오라고 해서 남들 다 쉬는데 우리도 쉬게 해주세요")
