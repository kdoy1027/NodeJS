//빈 디렉터리 삭제하기 rmdir

const fs = require("fs")

if(fs.existsSync("./test")) {
    fs.rmdir("./test", (err) =>{
        if(err) {
            console.log(err)
        } else {
            console.log("folder deleted")
        }
    });
} else {
    console.log("folder does not exist")
}