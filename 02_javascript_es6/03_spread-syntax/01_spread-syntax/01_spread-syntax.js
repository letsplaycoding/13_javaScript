/* 01. spread-syntax(스프레드 문법) */

let arr = [3, 29, 1998];
console.log(...arr);        // 3 29 1998

console.log(`가장 큰 값: ${Math.max(3, 29, 1998)}`);        // 가장 큰 값: 1998
console.log(`가장 큰 값: ${Math.max(...arr)}`);             // 가장 큰 값: 1998

let arr1 = [10,30,20];
let arr2 = [100,300,200];

/* 배열을 결합(concat)해서 하나의 배열로 만들었음 */
console.log([...arr1, ...arr2]);    // [ 10, 30, 20, 100, 300, 200 ]
console.log([10,...arr1,-1, ...arr2,2]);    /*[
                                                10,  10,  30,  20,
                                                -1, 100, 300, 200,
                                                2
                                            ]*/

console.log(...arr1, ...arr2);      // 10 30 20 100 300 200
console.log(`가장 큰 값: ${Math.max(...arr1, ...arr2)}`);   // 가장 큰 값: 300

/* 문자열일 때 */
let str = "사네미";
console.log(...str);                    // 사 네 미
console.log([...str]);                  // [ '사', '네', '미' ]  , 스프레드 연산자로 문자 하나씩 들어간 배열을 쉽게 만들 수 있다.
console.log(Array.from(str));           // [ '사', '네', '미' ]  , 무언가를 배열로 바꿀 때 보편적으로 사용하는 배열의 from 메소드