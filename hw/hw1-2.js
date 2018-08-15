/*題目：給定一字串，把第一個字轉成大寫之後回傳，若第一個字不是英文字母則忽略。

input: nick
output: Nick

input: Nick
output: Nick

input: ,hello
output: ,hello
*/

/*想法
1.給一個function，變數 str
2.用if判斷第一個字是否為字母
3.case1 是字母，設 var first_letter = str[0].toUpperCase()
4.再把剩下的接回去，var result = `${first_letter}str.slice(1, str.length)
5.return回結果
6.case2 非字母，直接return str
*/

/*
function capitalize(str){
    if (.isletter){
    }
    return true

}

capitalize('happy')
*/

//可以不用寫if判斷第一個字是否為字母，因為.toUpperCase對非字母元素沒有作用！
export const capitalize = (str) => {
    var first_letter = str[0].toUpperCase()
    var result = first_letter + str.slice(1, str.length)
    return result
}

