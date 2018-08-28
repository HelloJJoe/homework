/*題目：給定一字串，把第一個字轉成大寫之後回傳，若第一個字不是英文字母則忽略。

input: nick
output: Nick

input: Nick
output: Nick

input: ,hello
output: ,hello
*/

import {Capitalize} from './hw1-2'

describe('測試', () => {
    it('it should be "Happy"', () => {
        expect(Capitalize('happy')).toBe('Happy')
    })
    it('it should be "Nic"', () => {
        expect(Capitalize('nic')).toBe('Nic')
    })
    it('it should be ",ello"', () => {
        expect(Capitalize(',ello')).toBe(',ello')
    })
    it('it should be "YA"', () => {
        expect(Capitalize('YA')).toBe('YA')
    })
}) 