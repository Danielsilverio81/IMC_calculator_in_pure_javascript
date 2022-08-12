const form = document.querySelector("#form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputaltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value.replace(",", "."));
    const altura = Number(inputaltura.value.replace(",", "."));

    if(!peso) {
        setResult('Peso invalido!', false);
        return;
    }
    if (!altura) {
        setResult('Altura invalida!', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const valueIMC =  getValueImc(imc)

    const text = `Seu IMC é ${imc} (${valueIMC}).`;
    setResult(text, true)
});

function getValueImc(imc) {
    const value = ['Magreza grave!', 'Magreza leve!', 'Saudável!', 'Sobrepeso', 
    'Obesidade grau 1!', 'Obesidade grau 2 ! (considerada severa)', 'Obesidade grau 3, Procure um nutricionista e um medico'];

    if(imc > 40) return value[6];
    if(imc > 35 && imc <= 40) return value[5];
    if(imc > 30 && imc <= 35) return value[4];
    if(imc > 25 && imc <= 30) return value[3];
    if(imc > 18.5 && imc <= 25) return value[2];
    if(imc >= 17 && imc <= 18.5) return value[1];
    if(imc < 16)  return value[0];
}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(1);
}

function createMsg() {
  const p = document.createElement('p');
  return p;
}

function setResult(msg, isValid) {
    const result = document.querySelector(".resultado");
    result.innerHTML = '';

    const p = createMsg();

    if(isValid) {
        p.classList.add('paragraphResult');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    result.appendChild(p);
}