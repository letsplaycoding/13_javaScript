/* 02. 문자열 타입 */

var str = '안녕하세요';
console.log(typeof str);

/* 일반 문자열 내에서는 줄바꿈이 허용되지 않는다. */
// var str2 = '안녕하슈
// 반갑습니다.';

/* 백틱을 사용하면 줄바꿈이 허용되고 모든 공백이 있는 그대로 적용된다. */
var str2 = `안녕하슈.
반갑습니당`;
console.log('multiline: ',str2);

/* 문자열 이어붙이기 */
var lastName = 'Shin';
var firstName = 'Dongho';
console.log('My name is ' + lastName + firstName +'데스네');

/* 표현식 삽입(${})과 백틱을 함께 사용하면 문자열 연산보다 가독성도 좋고 간편하게 문자열을 조합할 수 있다. */
console.log(`와타시와 ${lastName}${firstName}${1 + 2}입니다`);