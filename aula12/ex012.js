var agora = new Date()
var hora = agora.getHours()
//var agora = new Date()
//var data = agora.getDay()
//var hora = 20
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom Dia!')
}
else if (hora <= 18) {
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite!')
}