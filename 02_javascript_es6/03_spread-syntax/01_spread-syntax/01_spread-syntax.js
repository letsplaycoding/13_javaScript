/* 01. spread-syntax(스프레드 문법) */

let arr = [3, 29, 1998];
console.log(...arr);        // 3 29 1998

console.log(`가장 큰 값: ${Math.max(3, 29, 1998)}`);        // 가장 큰 값: 1998
console.log(`가장 큰 값: ${Math.max(...arr)}`);             // 가장 큰 값: 1998

