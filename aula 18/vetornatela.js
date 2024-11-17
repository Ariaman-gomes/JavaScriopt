let valores = [6,5,8,7,5,1]
valores.sort()

//console.log(valores[0])
/*for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}