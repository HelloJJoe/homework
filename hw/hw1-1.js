/*hw1：好多星星
給定 n（1<=n<=30），依照規律回傳正確圖形（每一行是一個陣列的元素）
*/

//第一種解法
/* 舊語法
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
  return arr
}
*/

/*新語法
export const stars = (n) => {
  var arr = []
  for (var i = 1; i<=n ; i++){
    arr[i-1] = getStars(i)
  }
  return arr;
}

export const getStars = (n) => {
  var str = ""
  for (var i = 1; i<=n; i++){
    str += '*'
  }
  return str
}
*/

//第二種解法
//1.用Array(n)產生一個長度為n，但是是空的陣列
//2.用fill()把陣列每個位置填滿()內的東西
//3.所以現在每個陣列元素是undefined
//4.因為現在要第一個元素一個星星，第二個元素兩個星星，照這個規律，而且現在陣列的元素是undefined，所以用index來操作會比較好（用元素值也可以，另一個方法）
//5. result = Array(n).fill().map( (i, n) => ('*'.repeat(n+1))

const toStars = (n) =>{
  var a = Array(n).fill()
  var b = a.map((i, n) =>'*'.repeat(n+1))
  return b
  
}

//第三種解法
/*
const toStars = (n) => {
  var arr = []
  for ( var i = 0; i<=n; i++){
    arr[i] = 1 + i
  }
  var result = arr.map( n => '*'.repeat(n) )
  return result
}
*/



