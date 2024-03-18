/* dynamically-typed-language */

/* 
    symbol은 ES6에서 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.
    다른 값과 중복되지 않는 유일무이한 값으로 이름 충돌 위험이 없는 객체의
    유일한 프로퍼티 키를 만들기 위해 사용한다.
    symbol 이외의 원시값은 리터럴을 통해 생성하지만 symbol은 Symbol 함수를 통해 호출해서 생성한다.
 */

var test;
console.log(typeof test);   // undefined

test = 1;
console.log(typeof test);   // number

test = 'javaScript';
console.log(typeof test);   // string

test = true;
console.log(typeof test);   // boolean

test = null;
console.log(test);          // null

test = Symbol();
console.log(typeof test);   // symbol

test = {};
console.log(typeof test);   // object

test = [];
console.log(typeof test);   // object

test = function() {};       // function
console.log(typeof test);