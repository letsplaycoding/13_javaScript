/*01_object-distructuring-assignment-basic-syntax(객체 구조분해 할당 기본 문법) */

let pants = {
    productName: '워싱진',
    color: '블루',
    price: 77000,
    getInfo() {
        console.log(this.productName, '스키~');
    }
};

// let productName = pants.productName;
// let color = pants.color;
// let price = pants.price;

// let {productName, color, price} = pants;      // 배열의 일치하는 변수명으로 뽑아야한다.
let {color, productName, price, getInfo} = pants;

console.log(productName, color, price);          // 워싱진 블루 77000

console.log(getInfo);                            // getInfo() { [native code] }
getInfo();                                       // undefined 스키~

/* 객체 구조분해 할당으로 꺼낸 변수 대신 다른 걸 쓰고 싶다면.. */
let {color: co, price: pr, productName: pn} = pants;
console.log(co, pr, pn);