/*
hw5：大數加法
給定兩個長度為 l(1<=l<=1000)的數字（但型態為字串），請回傳兩個數字相加後的結果。
提示：小時候怎麼做直式加法，這一題就怎麼做
"123"+"456" => "579"
"12312383813881381381"+"129018313819319831" => "12441402127700701212"
*/

//1.變數為字串
//2.for迴圈把string的每個index轉成number提出來相加
//3.for迴圈裡if判斷相加是否超過10進位到下一位數，是的話下一輪＋1，原本的數-10，不是的話直接下一輪
//4.怎麼存？？array？string？number？arr.push
//5.array內的值可以改，用array，最後在array.join('')合併成string
//6.不同長度的話，把較短的那個後幾位數補上零和較長的一樣
//7.用之前的程式碼最後一位會被砍掉，要拿出來特別討論，

/*錯的
export const StrAdd = (str1, str2) => {
    var a = parseInt(str1)
    var b = parseInt(str2)
    var result = (a+b) + ''
    return result
*/

export const toAdd = (str1, str2) => {
    var a = str1.split('').reverse()
    var b = str2.split('').reverse()
    var length = Math.max(a.length, b.length)
   
    while ( a.length < length ){
        a.push('0')
    }
    while ( b.length < length ){
        b.push('0')
    }

    var sum =[]
    var toadd = 0
    for ( var i = 0; i<length; i++){
        var total = parseInt(a[i], 10) + parseInt(b[i], 10) + toadd
        if ( total >= 10){
            if ( i == length-1){
            sum[i] = total.toString()
            }
            else{
            toadd = 1
            total -= 10
            sum[i] = total.toString()
            }

        }
        else{
            toadd = 0
            sum[i] = total.toString()
        }
    }
    sum = sum.reverse().join('')
    return sum
}

