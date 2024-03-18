/* 01_object (객체) */

/* 
    자바스크립트는 객체 기반 프로그래밍 언어로 원시 값을 제외한 나머지 값
    (함수, 배열, 정규 표현식 등)은 객체이다.
 */
var student = {

    /* 키:값  으로 구성된 프로퍼티(속성) */
    name: '신동호',
    age: 20,

    /* 메소드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)(기능) */
    getInfo: function () {      
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};      // 리터럴 객체의 중괄호는 코드 블럭(if나 for문의 중괄호)과는 다르다. (;를 붙인다)

console.log(student.name);
console.log(typeof student);        // object
console.log(student.getInfo);       // [Function: getInfo]
console.log(student.getInfo());     // 신동호(은)는 20세 입니다.

student.name = '쿠로메';
console.log(student.getInfo());     // 쿠로메(은)는 20세 입니다.