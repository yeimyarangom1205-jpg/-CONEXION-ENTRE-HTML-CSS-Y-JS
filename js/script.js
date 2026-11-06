
function saludar() {

    let nombre = document.getElementById("nombre").value;

    alert(`Hola ${nombre}`);

    document.getElementById("resultado").value =
        `Hola, ${nombre}`;
}


function registrar() {

    let nombre = document.getElementById("nombre2").value;
    let programa = document.getElementById("programa2").value;

    if (nombre.trim() === "" || programa.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    alert(`Aprendiz: ${nombre}\nPrograma: ${programa}`);

    document.getElementById("resultado11").value =
        `${nombre} - ${programa}`;

    document.getElementById("resultado22").innerText =
        `Nombre: ${nombre} | Programa: ${programa}`;

    document.getElementById("resultado33").innerHTML =
        `<strong>Aprendiz:</strong> ${nombre}<br>
         <strong>Programa:</strong> ${programa}`;

    document.getElementById("resultado44").textContent =
        `El aprendiz ${nombre} está inscrito en ${programa}.`;
}


function calcularOperaciones() {

    let valor1 = document.getElementById("valorUno").value;
    let valor2 = document.getElementById("valorDos").value;

    if (valor1.trim() === "" || valor2.trim() === "") {
        alert("Por favor, ingrese los dos valores.");
        return;
    }

    let entero1 = parseInt(valor1);
    let entero2 = parseInt(valor2);

    document.getElementById("resParseInt").textContent =
        `parseInt("${valor1}") = ${entero1} | parseInt("${valor2}") = ${entero2}`;

    let decimal1 = parseFloat(valor1);
    let decimal2 = parseFloat(valor2);

    document.getElementById("resParseFloat").textContent =
        `parseFloat("${valor1}") = ${decimal1} | parseFloat("${valor2}") = ${decimal2}`;

    let numero1 = Number(valor1);
    let numero2 = Number(valor2);

    document.getElementById("resNumber").textContent =
        `Number("${valor1}") = ${numero1} | Number("${valor2}") = ${numero2}`;

    let suma = decimal1 + decimal2;

    document.getElementById("resSuma").textContent =
        `${decimal1} + ${decimal2} = ${suma}`;
}
