/* 02. let */

/* 1. 변수 중복 선언 금지 */
let msg = '여어-!';

// let msg = '바이바이';
console.log(msg);

/* 2. 함수 레벨 스코프 -> 블럭 레벨 스코프 */
let i =0;
for(let i = 0; i < 10; i++) {

}

console.log(i);      // 10

/* 3. 변수 호이스팅을 방지하는 효과 */
// console.log(x);   // x 변수를 초기화하기 전에 호출을 할 수 없다는 에러 발생, ReferenceError: Cannot access 'x' before initialization
// let x;

