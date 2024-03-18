/* 02.convert-to-number(숫자 타입으로 변환) */

console.log('===== 숫자 타입으로 변환 =====');

/* 더하기를 제외한 산술 연산자는 피연산자들이 숫자여야 성립하므로 피연산자들을 숫자 타입으로
    암묵적으로 변환한다.
 */
console.log(10 - '5');        // 5
console.log(10 * '5');        // 50
console.log(10 / '5');        // 2
console.log(10 % 'javaScript'); // NaN
console.log(10 > '5');        // true

console.log(+'');             // 0
console.log(+'1');            // 1
console.log(+'javaScript');   // NaN
console.log(+true);           // 1
console.log(+false);          // 0
console.log(+null);           // 0
console.log(+undefined);      // NaN
// console.log(+Symbol());       // TypeError: Cannot convert a Symbol value to a number
console.log(+{});             // NaN
console.log(+[]);             // 0
console.log(+function(){});   // NaN

/* 빈 문자열, 빈 배열, null, false는 0으로 true는 1로 반환 */