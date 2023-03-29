var muito_abaixo = document.getElementById('tr1')
var abaixo = document.getElementById('tr2')
var normal = document.getElementById('tr3')
var acima = document.getElementById('tr4')
var obesidade1 = document.getElementById('tr5')
var obesidade2 = document.getElementById('tr6')
var obesidade3 = document.getElementById('tr7')
function calcular() {
    muito_abaixo.style.backgroundColor = 'white'
    abaixo.style.backgroundColor = 'white'
    normal.style.backgroundColor = 'white'
    acima.style.backgroundColor = 'white'
    obesidade1.style.backgroundColor = 'white'
    obesidade2.style.backgroundColor = 'white'
    obesidade3.style.backgroundColor = 'white'
    var peso = document.getElementById('txtpeso')
    var altura = document.getElementById('txtaltura')
    var res = document.getElementById('resultado')
    peso = Number(peso.value)
    altura = Number(altura.value)
    imc = peso / (altura / 100 * altura / 100)
    res.innerHTML = `Seu IMC: ${imc.toFixed(2)}`
    
if (imc < 17) {
    muito_abaixo.style.backgroundColor = '#ffa500'
    } else if (imc < 18.49) {
        abaixo.style.backgroundColor = '#ffa500'
    } else if (imc >= 18.5 && imc <= 24.9) {
        normal.style.backgroundColor = '#90ee90'
    } else if (imc >= 25 && imc <= 29.99) {
        acima.style.backgroundColor = '#ffa500'
    } else if (imc >= 30 && imc <= 34.99){
        obesidade1.style.backgroundColor = '#ffa500'
    } else if (imc >= 35 && imc <= 39.99){
        obesidade2.style.backgroundColor = '#ffa500'
    } else if (imc >= 40){
        obesidade3.style.backgroundColor = '#ffa500'
    } else {
        window.alert('[ERRO] Insira novamente!')
    }
} 