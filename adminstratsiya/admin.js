function admin() {
    let a = prompt('log in kiriting')
    if(a == 'admin'){
        let b = prompt('parolni kiriting') 
        alert(b)
    }
    if (a == 'professional dasturchi') {
        alert('xush kelibsiz')
    }
    if(a !=a   ){
        alert('notogri malumot')
    }
    else{
        alert('bekor qilindi')
    }
}
admin()