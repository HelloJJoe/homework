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
    return arr
  }
}

it("should return correct answer when n = 1", function(){
  expect(stars(1)).toBe(['*'])
}) 