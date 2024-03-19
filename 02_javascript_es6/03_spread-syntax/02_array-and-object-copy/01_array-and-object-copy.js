/* 01. array-and-object-copy(스프레드 문법을 이용한 배열 및 객체 복사) */

/* 1. 배열 복사 */
let arr = [10,30,20];
// let arrCopy = arr;               // 복사는 되지만 객체의 주소값정도만을 복사하는 얕은 복사이다.
let arrCopy = [...arr];             // 깊은 복사

console.log(arr);                   // [ 10, 30, 20 ]
console.log(arrCopy);               // [ 10, 30, 20 ]
console.log(arr === arrCopy);       // false

/* 2. 객체 복사 */
let obj = {name: '시부야', age: 2000};
let objCopy = {...obj};

console.log(obj);                   // { name: '시부야', age: 2000 }    
console.log(objCopy);               // { name: '시부야', age: 2000 }
console.log(obj === objCopy);       // false