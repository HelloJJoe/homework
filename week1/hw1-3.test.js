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

import {isPrime} from './hw1-3'

describe('測試', () => {
    it('n = 1 不是質數', () =>{
        expect(isPrime(1)).toBe(false)
    })
    it('n = 2 是質數', () =>{
        expect(isPrime(2)).toBe(true)
    })
    it('n = 3 是質數', () =>{
        expect(isPrime(3)).toBe(true)
    })
    it('n = 10 不是質數', () => {
        expect(isPrime(10)).toBe(false)
    })
    it('n = 37 是質數', () => {
        expect(isPrime(37)).toBe(true)
    })
    it('n = 38 不是質數', () => {
        expect(isPrime(38)).toBe(false)
    })
})
