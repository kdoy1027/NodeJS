// var msg1 = new Object();

// msg = {
//     name : '불꽃남자',
//     comment : '포기를 모르는 남자',
//     age : 19

// };

// let array = new Array()
// array.push(msg)

// console.log(array)

//=------------------------------------------

// const readline = require('readline');
// const r1 = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });




// let dan = 2;
// while(dan<10) {
//     let num =1;
//     while(num <10) {
//         console.log(dan +"*" + num +"="+dan*num)
//         num++
//     }
//     dan++
// }


//=============구구단 성공!!!!!!!!!!!!+========================
// for(i=2;i<10;i++) {
//     for(k=1;k<10;k++){
//         console.log(i+'*'+k +"="+(i * k),)
//     }
//     console.log('\n')
// }

//=============================================================
// function naver()
// {
//     console.log('naver 함수 진입');
//     let saveUser = '이귀엽';
//     google()
//     console.log('naver 함수 탈출')
// }

// function google(){
//     console.log('google 함수 진입')
//     let saveUser = '이예쁜'
//     console.log(saveUser)
//     console.log('google 함수 탈출')
// }

// naver()

//===============================================================
// function checkAge(age) {
//     if(age > 19) {
//         return true;
//     } else {
//         return false;
//     }
// }
// r1.question("나이를 입력하세요.:", function(age){
//     if(checkAge(age)){
//         console.log("입장가능합니다.")
//     } else {
//         console.log("입장 불가합니다.")
//     }
//     r1.close()
// })


//=============================225p==================================
    // const unit = {
    //     attack : function(weapon){
    //         return `${weapon}으로 공격한다.`
    //     }
    // }

    // console.log(unit.attack('주먹'))
    // console.log(unit.attack('총'))

//=================================================================
    // let dic = {
    //     boy : '소년',
    //     girl : '소녀',
    //     friend : '친구'
    // }

    // r1.question('찾을 단어를 입력하세요:' , function(key){
    //     let word = key
    //     if(word =='boy' || word =='girl'|| word =='friend' ){
    //         console.log(dic[word])
    //     } else {console.log('해당 단어를 찾을 수 없습니다.')}
        

    //     r1.close()
    // })

    //===========================258p================================
    // r1.question("다이소! 무조건 천원! - 상품입력 : " ,function(key){
    //     let 객체바구니 = {
    //         [key] :'1000원',
    //     }
    //     console.log(객체바구니[key])
    //     r1.close();
    // })

    //=====================259p========================================

    const readline = require('readline');
    const r1 = readline.createInterface({
        input : process.stdin,
        output : process.stdout,
    });
    
    let user = {
        id : 'jamsuham',
        pw : '1234',
        name : '잠수함',
        age : 30,
    }

    let {id,...rest} = user;

    console.log(id)
    console.log(rest.pw)
    console.log(rest.name)
    console.log(rest.age)





    
   








    
    
