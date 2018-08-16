/*舊語法
function getStars(n){
  var str = ''
  for (var i = 1; i<=n ; i++){
    str = str + '*'  
  }
  return str;
}

function stars(n){
  var arr = []
  for (var i = 1; i<=n; i++){
    arr[i-1] = getStars(i)
  }
  return arr;
}



describe('測試', function(){
  it("應該要是['*']", function(){
    expect(stars(1)).toEqual(['*'])
  })

  it("應該要是['*','**']", function(){
    expect(stars(2)).toEqual(['*', '**'])
  })

}) 
*/

//新語法
import {stars, getStars} from './hw1-1'

describe("hw1", () => {
  it("應該要是['*']", () => {
    expect(stars(1)).toEqual(['*'])
  })
})
 
