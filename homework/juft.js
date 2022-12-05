let a = document.getElementById('avp')
let b = document.getElementById('btn')
function sta() {
    let c = a.value  
    if (c%2==0) {
        console.log('juft')
    }
    else{
        console.log('toq son')
    }
    console.log(c)
}
b.addEventListener("click",()=>{
    sta()
})
v

