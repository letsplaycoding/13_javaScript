/* 02.method */
/* 자바 스크립트의 함수는 객체이다. 함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수도 있다. */

var name = '달마시안';

var dog = {
    name: '뽀삐',
    eat : function (food) {
        // console.log(`${name}(은)는 ${food}를 맛있게 먹어요.`);       // 실행은 되지만 에러(ReferenceError: name is not defined)가 뜬다.
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);     // 메소드에서의 'this'는 메소드를 호출한 객체
        console.log(`${name}(은)는 ${food}를 맛있게 먹어요.`);          // name 객체를 만들어주면 this.이 없어도 달마시안이 호출됨
                                                                      // this.이 없으면 전역변수를 뜻한다.
        return '잘 먹었네';
    }
};

console.log(dog.eat());     // name 에 this.를 더해주면 에러가 안뜸

console.log(dog.eat('타마고','카츠동'));        // 매개변수값인 카츠동은 상관없이 오류도 안뜬채 타마고만 함께 출력된다.