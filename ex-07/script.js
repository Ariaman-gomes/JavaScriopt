let num = document.querySelector('imput#fnum')
let lista=document.querySelector('select#flist')
let res = document.querySelector('div#res')
let valorer= []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n,l ){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)) {
        window.alert('Tudo ok')
        
        }else {
        window.alert('Valor inválido ou já encontrado.')
    }
}