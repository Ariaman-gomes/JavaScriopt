let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (num && isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ''; // Limpa os resultados anteriores
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = ''; // Limpa o campo de entrada
    num.focus(); // Coloca o foco de volta no campo de entrada
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;

        for (let pos in valores) {
            if (valores[pos] > maior) maior = valores[pos];
            if (valores[pos] < menor) menor = valores[pos];
            soma += valores[pos]; // Soma os valores
        }
        media = soma / tot
        res.innerHTML = ''; // Limpa os resultados anteriores
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`;
        res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`;
        res.innerHTML += `<p>A soma de todos os números é: ${soma}</p>`;
        res.innerHTML += `<p> Média dos valores é: ${media}</p>`
    }
}
