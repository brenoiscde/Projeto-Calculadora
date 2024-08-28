const limpar = document.getElementById('limpar');
const maisOuMenos = document.getElementById('maisOuMenos');
const porcentagem = document.getElementById('porcentagem');
const divisao = document.getElementById('divisao');
const sete = document.getElementById('sete');
const oito = document.getElementById('oito');
const nove = document.getElementById('nove');
const multiplicacao = document.getElementById('multiplicacao');
const quatro = document.getElementById('quatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const subtracao = document.getElementById('subtracao');
const um = document.getElementById('um');
const dois = document.getElementById('dois');
const tres = document.getElementById('tres');
const adicao = document.getElementById('adicao');
const ponto = document.getElementById('ponto');
const zero = document.getElementById('zero');
const deletar = document.getElementById('deletar');
const calcular = document.getElementById('calcular');

const listaDeNumeros = []
limpar.addEventListener('click', () => {
    listaDeNumeros.splice(0, listaDeNumeros.length);
    
})
const listaDeCalculo = document.getElementById('listaDeCalculo')
maisOuMenos.addEventListener('click', () => {
    encontroOSinal: for (let i = listaDeNumeros.length; i > 0; i--) {
        if (
            listaDeNumeros[i] == "+" ||
            listaDeNumeros[i] == "-" ||
            listaDeNumeros[i] == "*" ||
            listaDeNumeros[i] == "/"
        ) {
            listaDeNumeros.splice(i + 1, 0, "-");
            break encontroOSinal;
        } else {
            listaDeNumeros.unshift('-');
        }
    }
});
porcentagem.addEventListener('click', () => {
    listaDeNumeros.push('/', '100')
})
divisao.addEventListener('click', () => {
    listaDeNumeros.push('/')
    listaDeCalculo.innerHTML = formataLista()
})

sete.addEventListener('click', () => {
    listaDeNumeros.push('7')
    listaDeCalculo.innerHTML = formataLista()
})
oito.addEventListener('click', () => {
    listaDeNumeros.push('8')
    listaDeCalculo.innerHTML = formataLista()
})
nove.addEventListener('click', () => {
    listaDeNumeros.push('9')
    listaDeCalculo.innerHTML = formataLista()
})
multiplicacao.addEventListener('click', () => {
    listaDeNumeros.push('*')
    listaDeCalculo.innerHTML = formataLista()
})
quatro.addEventListener('click', () => {
    listaDeNumeros.push('4')
    listaDeCalculo.innerHTML = formataLista()
})
cinco.addEventListener('click', () => {
    listaDeNumeros.push('5')
    listaDeCalculo.innerHTML = formataLista()
})
seis.addEventListener('click', () => {
    listaDeNumeros.push('/')
    listaDeCalculo.innerHTML = formataLista()
})
subtracao.addEventListener('click', () => {
    listaDeNumeros.push('-')
    listaDeCalculo.innerHTML = formataLista()
})
um.addEventListener('click', () => {
    listaDeNumeros.push('1')
    listaDeCalculo.innerHTML = formataLista()
})
dois.addEventListener('click', () => {
    listaDeNumeros.push('2')
    listaDeCalculo.innerHTML = formataLista()
})
tres.addEventListener('click', () => {
    listaDeNumeros.push('3')
    listaDeCalculo.innerHTML = formataLista()
})
adicao.addEventListener('click', () => {
    listaDeNumeros.push('+')
    listaDeCalculo.innerHTML = formataLista()
})
ponto.addEventListener('click', () => {
    listaDeNumeros.push('.')
    listaDeCalculo.innerHTML = formataLista()
})
zero.addEventListener('click', () => {
    listaDeNumeros.push('0')
    listaDeCalculo.innerHTML = formataLista()
})
deletar.addEventListener('click', () => {
    listaDeNumeros.pop()
    formataLista()
})
function formataLista() {
    return listaDeNumeros.join("");
}
calcular.addEventListener("click", () => {
    const numeroString = formataLista();
    const resultado = eval(numeroString)
    document.getElementById("resultado").innerHTML = resultado;
})
