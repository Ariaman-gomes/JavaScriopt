let amigo ={nome:'josé',
    sexo: 'M',
    peso:80,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}

    amigo.engordar(35)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
