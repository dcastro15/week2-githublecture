//
var add = (a,b) {

    return a+b
}
function arithmatic(fn, a, b){
    return fn(a,b)

}

var r = arithmatic(add, 10, 20)
console.log(r)