let a = document.getElementById('alp')
let b = document.getElementById('alp1')
let d = document.getElementById('alp2')
let e = document.getElementById('btn')
function alpha () {
    let va =a.value 
    let s =b.value
    let y =d.value
    console.log(va,s,y)
}
e.addEventListener("click",() => {
    alpha()
})



