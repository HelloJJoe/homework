/*
hw4：判斷迴文
給定一個長度小於 100 的字串 s，請回傳 s 是否為迴文（迴文的定義：正著唸倒著念都一樣）
abcba => true
apple => false
aaaaa => true
applppa => true
*/

//1.用for迴圈加if判斷
//2.str[i] = str[str.length-1-i]

//解法一
/*
export const Reverse = (str) => {
    for (var i = 0; i<=str.length; i++){
        if (str[i] == str[str.length-1-i]){
            return true
        }else{
            return false
        }
}}
*/
//解法二
/*const toReverse = (str) => {
    var reverse = ''
    for ( var i = 1; i<=str.length; i++){
        reverse = reverse + str[str.length-i]
    }
    if ( str === reverse){
        return true
    }
    return false
}

*/

//解法三
const to_reverse = (str) => {
    return str === str.split('').reverse().join('')
}

