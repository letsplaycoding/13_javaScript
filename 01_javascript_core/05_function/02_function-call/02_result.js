/* 02.result(반환문) */

function hello(name) {
    return `${name}님 곰방와,,`;
    console.log(name);          // 반환문 이후의 코드는 실행되지 않고 무시된다.
}

console.log(hello('마인'));

function func() {
    console.log('함수가 호출되었시타');

    /* 반환값을 명시적으로 지정하지 않거나 생략하면 undefined가 반환된다. */
    // return
}

console.log(func());        // undefined