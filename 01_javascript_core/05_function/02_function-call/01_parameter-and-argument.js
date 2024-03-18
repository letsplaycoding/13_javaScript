/* 01. parameter-and-argument(매개변수와 인수) */

/* 함수 선언문 */
function hello(name) {
    console.log(name);

    /* 모든 인수(전달인자)는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.(일종의 가변인자 개념) */
    console.log('arguments : ', arguments);
    console.log('두 번째 인자: ', arguments['1']);

    return `${name}님 오하요~`;
}

var result = hello('젠이츠');
console.log(result);

result = hello();           // undefined
console.log(result);        // undefined님 오하요~

result = hello('탄지로','네즈코');  // 탄지로, 두 번째 인자: 네즈코
console.log(result);               // 탄지로님 오하요~