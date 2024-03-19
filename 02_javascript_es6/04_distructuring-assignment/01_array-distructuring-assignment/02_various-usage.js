/* 02. various-usage(다양한 사용법) */

/* 객체의 프로퍼티에도 한번에 구조 분해 할당 후 추가할 수 있다. */
let user = {};
[user.firstName, user.lastName] = "렌고쿠 쿄쥬로".split(" ");

console.log(user);          // { firstName: '렌고쿠', lastName: '쿄쥬로' }

/* 일치하지 않는 나머지(rest) 요소를 한번에 가져오기 */
let [sign1, sign2, ...rest] = ['양자리','황소자리','쌍둥이자리','게자리','사자자리'];

console.log(sign1);         // 양자리
console.log(sign2);         // 황소자리
console.log(rest);          // [ '쌍둥이자리', '게자리', '사자자리' ]

/* 변수 교환 용도로도 사용할 수 있다. */
let teacher = '카카시 센세';
let student = '로크리';

[student, teacher] = [teacher, student];

console.log(`학생: ${student}, 선생: ${teacher}`);      // 학생: 카카시 센세, 선생: 로크리

/* 기본 값을 설정하고 사용할 수도 있다. */
let [firstName4 = "마이트", lastName4 = "가이"] = ["로크리"];

console.log(firstName4);        // 로크리
console.log(lastName4);         // 가이
