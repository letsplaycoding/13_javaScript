/* 02. differences-from-regular-function (일반 함수와의 차이점들) */

function Student(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
}

/* 
    일반 함수와 생성자 함수의 특별한 형식적 차이는 없다.
    (첫 문자를 대문자로 기술하려 구별하는 노력 정도)
    new 연산자 없이 호출하면 일반 함수로 동작한다.
*/

// const student = Student('웅이', 20);        // new 안붙히면 undefined
// console.log(student);

const student = new Student('웅이', 20);        // new를 붙히면 생성될 객체, 안붙히면 글로벌 변수
console.log(student);

/* new를 붙히지 않아도 객체를 생성하게끔 해주는 builtin 함수 */

/* 
    생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해서 ES6에서는 new.target을 지원한다.
    (new 연산자 없이 호출해도 new를 붙여주게 해서 빌트인 함수로 만들기)
*/

function Dog(name, age) {
    console.log('new.target : ',new.target);        // new 없이 함수 호출 시 true가 되게 하는 구문
    if(!new.target) {                               // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Dog(name, age);
    }

    this.name = name;
    this.age = age;
}

const dog = Dog('시카마루',2);
console.log(dog);

/* 제공되는 빌트인 함수들: Object, String, Number, Boolean, Date, Regex, ... */