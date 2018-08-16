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

import {Reverse} from './hw1-4'

describe('測試', () => {
    it('it should be true', () => {
        expect(Reverse('abcba')).toBe(true)
    })
    it('it should be false', () => {
        expect(Reverse('apple')).toBe(false)
    })
    it('it should be true', () => {
        expect(Reverse('aaaaa')).toBe(true)
    })
    it('it should be true', () => {
        expect(Reverse('applppa')).toBe(true)
    })
})

