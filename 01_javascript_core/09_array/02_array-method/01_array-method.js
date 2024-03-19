/* 01. array-method(배열 메소드) */

const foodList = ['물회','삼계탕','냉면','수박','물회'];

/* indexOf */
console.log(`foodList.indexOf('물회'): ${foodList.indexOf('물회')}`);           // 0
console.log(`foodList.indexOf('삼겹살'): ${foodList.indexOf('삼겹살')}`);       // -1(배열안에 값이 없으면 음수)

/* includes */
console.log(`foodList.includes('물회'): ${foodList.includes('물회')}`);         // true
console.log(`foodList.includes('삼겹살'): ${foodList.includes('삼겹살')}`);     // false

const chineseFodd = ['짜장면','짬뽕','탕수육'];

/* push */  // 추가
chineseFodd.push('팔보채');
chineseFodd.push('양장피');

console.log(`push 후: ${chineseFodd}`);

/* pop */  // 삭제
chineseFodd.pop(); 

console.log(`chineseFood.pop(): ${chineseFodd.pop}`);
console.log(`chineseFood.pop(): ${chineseFodd.pop}`);
console.log(`pop 후: ${chineseFodd}`);

const chickenList = ['양치','후라이드','파닭'];

/* unshift */       // 합치기
console.log(`chickenList.unshift(): ${chickenList.unshift('간장치킨')}`);
console.log(`chickenList.unshift(): ${chickenList.unshift('마늘 치킨')}`);

console.log(`unshift 후 : ${chickenList}`);

/* shift */         // 빼기(앞에서부터)
console.log(`chickenList.shift(): ${chickenList.shift()}`);

console.log(`shift 후: ${chickenList}`);

/* concat */        // 배열끼리 병합
const idol1 = ['오마이걸','뉴진스'];
const idol2 = ['동방신기','빅뱅'];
const idol3 = ['잇지','에스파'];

console.log(`idol1 기준으로 idol2 배열을 concat: ${idol1.concat(idol2)}`);
console.log(`idol1 기준으로 idol2 배열을 concat: ${[...idol1, ...idol2]}`);     // ES6할 때 스프레드 연산자 배울 때 다시 설명
console.log(`idol3 기준으로 idol1, idol2 배열을 concat: ${idol3.concat(idol1, idol2)}`)

/* slice: 배열의 요소 선택 잘라내기 , slice(index값1, index값2) 여기서ㅏ index2값은 실제 배열의 인덱스값에 -1이다. */
/* slice는 실제 원본에는 영향을 주지 않음 */

/* splice: 배열의 index 위치의 요소 제거 및 추가*/
const front = ['HTML', 'CSS', 'JavaScript', 'Vue'];

console.log(`front.slice(): ${front.slice(1, 3)}`);     // front.slice(): CSS,JavaScript
console.log(`front: ${front}`);                         // 원본에는 영향가지 않음

/* splice(인덱스, 제거할 길이, 추가할 값1, 추가할 값2, ...) , splice는 원본에 영향이 간다. */
console.log(`front.splice(3, 1, "JDBC"): ${front.splice(3, 1, "JDBC")}`);   // front.splice(3, 1, "JDBC"): Vue
console.log(`front: ${front}`);     // front: HTML,CSS,JavaScript,JDBC                     

/* join: 배열을 우리가 원하는 구분자와 함께 결합하여 문자열로 반환 */
const snackList = ['사탕', '초콜렛', '껌', '마이쮸'];
console.log(`snackList.join(): ${snackList.join()}`);           // snackList.join(): 사탕,초콜렛,껌,마이쮸
console.log(`snackList.join('/'): ${snackList.join('/')}`);     // snackList.join('/'): 사탕/초콜렛/껌/마이쮸
