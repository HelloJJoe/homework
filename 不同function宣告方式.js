//第一種
function add(a, b){
    return a+b
}

//第二種
var hello = function(){
    console.log('hello')
}

//第三種
var hello = function(){
    console.log('hello')
}

function execute(fn){
    fn()
}

execute(hello)


//匿名函式
function execute(fn){
    fn()
}

execute(function(){
    console.log('hello')
}
)