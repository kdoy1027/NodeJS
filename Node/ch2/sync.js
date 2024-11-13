// function displayA(){
//     console.log("A");
// }

// function displayB(callback){
//     setTimeout(()=>{
//         console.log("B");
//         callback()
//     },3000)
// }

// function displayC(){
//     console.log("C");
// }


// displayA(); 
// displayB(displayC);


// // 결과값 ==>  ACB 순서 (B는 setTimeou설정해서 시간이 오래 걸리기 때문에 
// //            다른 함수들을 먼저 처리 후 실행)

// // 결과값 ==>  ABC 순서 (B에서 콜백함수로 C를 부르고 그 과정을 3초 후에 설정
//                 //ABC순서로 진행)

//==========================================================
let likePizza = true;

const pizza = new Promise((resolve, reject)=> {
    if(likePizza)
        resolve('피자주문합니다');
    else
        reject('피자를 주문하지 않습니다');
})


pizza.then(result = console.log(result)).catch(err=>console.log(err))

// .then (result => console.log(result))
// .catch(err => console.log(err))









