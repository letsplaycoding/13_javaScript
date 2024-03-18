/* 01. define-function */
/* function-definition (함수 선언문) */
function hello(name) {
    return `${name}님 안녕하세요!`;
}

console.log(hello('이노스케'));

/* function-expression(함수 표현식) */

/* 
    자바스크립트의 함수는 객체 타입의 값으로값의 설정을 갖는 객체를 일급 객체라고 한다.
    함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
 */

var hello2 = function(name) {
    return `${name}님 잠깨세요!! 쿠소야로 코노야로!`;
}

console.log(hello2('코쿠시보'));