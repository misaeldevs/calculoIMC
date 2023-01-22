// Capturar evento de SUBMIT do formulário
const form = document.querySelector("#formulario")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector("#peso")
    const inputAltura = e.target.querySelector("#altura")

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado("Peso inválido!", false)
        return
    }

    if (!altura) {
        setResultado("Altura inválida!", false)
        return
    }
    const imc = getImc(peso, altura)
    const verificaImc = getVerificaImc(imc)

    const msg = `Seu IMC é ${imc} (${verificaImc}).`
    setResultado(msg, true)
})

function getVerificaImc(imc) {
    if (imc >= 39.9) return "Obesidade grau 3."
    if (imc >= 34.9) return "Obesidade grau 2."
    if (imc >= 29.9) return "Obesidade grau 1."
    if (imc >= 24.9) return "Sobrepeso."
    if (imc >= 18.5) return "Peso normal."
    if (imc < 18.5) return "Abaixo do peso."
}
function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}


function criaParagrafo() {
    const p = document.createElement("p")
    p.classList.add("paragrafo-resultado")
    return p
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = ""

    const p = criaParagrafo()

    if (isValid) {
        p.classList.add("paragrafo-resultado")
    } else {
        p.classList.add("bad")
    }
    p.innerHTML = msg
    resultado.appendChild(p)
}