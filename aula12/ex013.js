//hora


var agora = new Date()
var hora = agora.getHours()


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





//dia
var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

 
switch(diaSem)
{
    case 0:
        console.log('Domingo')
        break
    case 1:
            console.log('Segunda')
            break
    case 3:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
        default:
        console.log('[ERRO]Dia inválido!')
}