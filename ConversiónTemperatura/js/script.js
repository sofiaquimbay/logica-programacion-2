const boton = document.querySelector("#empezar");
let conteiner = document.querySelector(".temperaturas");


let celsius;
boton.addEventListener("click", function(){
    celsius = prompt("Ingrese la temperatura en grados Celsius");
    validar(celsius)
})


function validar(entrada){
    let convertido = parseFloat(entrada);
    if(isNaN(convertido)){
        alert("Porfavor ingrese un número")
    }else{
        convertirTemperatura(convertido);
    }
}


function convertirTemperatura(numero){
    let fahrenheit = ((numero* (9/5))+32).toFixed(2)
    let kelvin = (numero + 273.15).toFixed(2)
    conteiner.innerHTML += `<p class="textoC">Temperatura en grados Celsius: ${numero}°C</p>
                        <p class="textoK">Temperatura en grados Kelvin: ${kelvin} K</p>
                        <p class="textoF">Temperatura en grados Fahrenheit: ${fahrenheit}°F</p>`;

}


