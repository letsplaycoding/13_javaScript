/* 기본적인 연산자는 java와 다르지 않다.(추가적이거나 다른 부분만 다룰 예정) */

/* 01. comparison-operator */

/* 동등/동일(일치) 비교 연산자 */

/* 1. 숫자 1, 문자 '1', true 비교*/
console.log(`1 == 1: ${1 == 1}`);               // 1 == 1: true
console.log(`1 == true: ${1 == true}`);         // 1 == true: true
console.log(`1 == '1': ${1 == '1'}`);           // 1 == '1': true
console.log(`1 === '1': ${1 === '1'}`);         // 1 === '1': false // 자료형까지 일치(동일)한지는 '==='으로 비교한다.

console.log(`0 == false: ${0 == false}`);       // 0 == false: true
console.log(`0 === false: ${0 === false}`);     // 0 === false: false

/* 2. NaN은 자신과 일치하지 않는 유일한 값이다. */
console.log(`NaN == NaN: ${NaN == NaN}`);       // NaN == NaN: false
console.log(`NaN === NaN: ${NaN === NaN}`);     // NaN === NaN: true

/* NaN인지 판별하기 위해서는 Number에서 제공하는 inNaN함수를 활용해야 한다. */
console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`); // Number.isNaN(NaN): true

/* 3. 일치하지 않는 값 비교 */
console.log(`1 != '1': ${1 != '1'}`);           // 1!= '1': false
console.log(`1 !== '1': ${1 !== '1'}`);         // 1!= '1': true