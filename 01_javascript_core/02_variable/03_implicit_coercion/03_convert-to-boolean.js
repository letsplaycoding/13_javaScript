/* 03. convert-to-boolean */

console.log('===== 논리 타입으로 변환 =====');

/* 
    JavaScript 엔진은 boolean 타입이 아닌 값을 Truethy 값(참으로 평가되는 값)
    또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
    Truthy -> true, Falsy -> false 암묵적 타입 변환을 한다.
 */

if(true) console.log('if(true)');                   // if(true) -> Truthy
if(false) console.log('if(false)');                 // Falsy
if(undefined) console.log('if(undefined)');         // Falsy
if(null) console.log('if(null)');                   // Falsy
if(0) console.log('if(0)');                         // Falsy
if(NaN) console.log('NaN');                         // Falsy
if('') console.log("if('')");                       // Falsy
if('javaScript') console.log("if('javaScript')");   // if('javaScript') -> Truthy