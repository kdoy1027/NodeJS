const fs = require("fs")

//동기식 (sync)
// let files = fs.readdirSync("./") //현재 위치의 디렉토리를 모두 보여줌.
// console.log(files)


//비동기식
fs.readdir("./", (err, files) => {
    if(err) {
        console.log(err);
    } console.log(files);
});

