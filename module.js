//舊的語法
/*

function add (a, b){
    return a+b;
}

module.exports = add
*/


//舊語法一次export多個程式
function add (a,b){
    return a+b;
}

function log (str){
    console.log(str) 
}

module.exports = {
    "add" : add,
    "log" : log,
}

//