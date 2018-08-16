/*
hw1-2
題目：給定一字串，把第一個字轉成大寫之後回傳，若第一個字不是英文字母則忽略。

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

//解法一
/*
//可以不用寫if判斷第一個字是否為字母，因為.toUpperCase對非字母元素沒有作用！
export const Capitalize = (str) => {
    var first_letter = str[0].toUpperCase()
    var result = first_letter + str.slice(1, str.length)
    return result
}
*/

//解法二
/*
export const ChangetoArray = (str) => {
    var arr = []
    for ( var i = 0; i<str.length; i++){
        arr[i] = str[i];
    }
    return arr;

}

export const Capitalize = (str) => {
    var strToarray = ChangetoArray(str)
    strToarray[0]= strToarray[0].toUpperCase()
    var result = strToarray.join('');
    return result;
}
*/
/*
//解法三
const toCapitalize = (str) => {
    var create_array = str.split('');
    create_array[0] = create_array[0].toUpperCase()
    return create_array.join('')
}

console.log(toCapitalize("happy"))

*/
//解法四
const toCapitalize = (str) => {
    var new_str = str.replace(str[0],str[0].toUpperCase())
    return new_str
}

console.log(toCapitalize('happy'))