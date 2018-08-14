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


