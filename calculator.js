function UserClickButton(n) {
    result.value+=n
}
function ClearData() {
    result.value=""
    
}
function evalExprsn() {
    
//     n=result.value
//    out=eval(n)
//    result.value=out
   result.value=eval(result.value)
}
function Clear() {
    s=result.value
    result.value=s.slice(0,-1)
}