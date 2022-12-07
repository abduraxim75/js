let a = document.getElementById('ar')
let b = document.getElementById('ar1')
let c = document.getElementById('ar2')
let d = document.getElementById('ar3')
let e = document.getElementById('btn')
function armiya() {
    let f = a.value
    let g = b.value
    let h = c.value
    let i = d.value
if(g>=18 && h>=60 && i>=165){
    alert('tabriklaymiz armiyaga qabul qilindingiz')
}
else{
    alert('qaysidur jihatingiz togri kelmadi')
}

}
e.addEventListener("click",()=>{
    armiya()
})
