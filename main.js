const txtop1 = document.getElementById("operador1")
const txtop = document.getElementById("operador")
const txtop2 = document.getElementById("operador2")
const botonDeCalcular = document.getElementById("calcular")
const presultado = document.getElementById("resultado")


function calcular() {
    const operadorx = txtop.value
    const operador1 = parseFloat(txtop1.value)
    const operador2 = parseFloat(txtop2.value)

    if ((operadorx == "+" || operadorx == "-" || 
    operadorx == "*" || operadorx == "/" ) && !isNaN(operador1) && !isNaN(operador2)){
        let resultado;
        switch(operadorx){
            case "+":
                resultado = operador1 + operador2
                break;
            
            case "-":
                resultado = operador1 - operador2
                break;

            case "*":
                resultado = operador1 * operador2
                break;
            
            case "/":
                resultado = operador1 / operador2
                break;
        }
        presultado.innerText= "TU RESULTADO ES = " + resultado
        presultado.style = "color:blue-violet"
    }else{
        presultado.style = "color:red"
        presultado.innerText="No se puede realizar este calculo (INGRESE VALORES VALIDOS)"
    }
}