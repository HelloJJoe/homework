/*
hw3：判斷質數
給定一個數字 n（1<=n<=100000），請回傳 n 是否為質數（質數的定義：除了 1 以外，所有小於他的數都無法整除）
n = 2 => true
n = 3 => true
n = 10 => false
n = 37 => true
n = 38 => false
*/
//1.用for迴圈，用小於n的數去對n取餘數
//if判斷式，取餘數的結果非零，則為false

export const isPrime = (n) => {
    var i = 2
    if ( n == 1 ){
        return false
    }
    while ( n%i !== 0 ){
        i++
    }
    if ( i == n ) {
        return true
    }else{
        return false
    }
}

/*第二種解法

export const isPrime = (n) => {
    if ( n == 1 )
        return false
    if ( n == 2)
        return true
    for ( var i = 2; i<=n-1; i++){
        if ( n%i == 0){
            return false
        }
    }
    return true
}
