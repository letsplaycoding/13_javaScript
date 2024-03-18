/* 01. [[Prototype]](프로토 타입 객체) */
/* 모든 객체는 프로토타입 객체에 접근할 수 있다.(모든 객체는 프로토타입을 갖고 있다) */

const user = {
    activate: true,
    login: function () {
        console.log('링크 스타또!!');
    }
};

console.log(user.__proto__.constructor === Object);     // true
console.log(user.__proto__ === Object.prototype);       // true

const user2 = {
    activate: false,
    login: function () {
        console.log('링크 아웃또!!');
    }
};

console.log(user2.__proto__);     // [Object: null prototype] {}

const student = {
    passion: true
};
console.log(student.__proto__);   // [Object: null prototype] {}

student.__proto__ = user2;        // 상속받음, 부모 객체를 자신의 [[Prototype]]에 담으면 상속의 개념이 된다.

student.login();                  // 링크 아웃또!!

/* 프로토타입 체인 */
const greedyStudent = {
    class: 1502,
    __proto__: student      // user2를 상속받은 student를 상속받은 greedyStudent 
}

console.log(greedyStudent.activate);        // false, user2에서 상속
console.log(greedyStudent.passion);         // true, student에서 상속

