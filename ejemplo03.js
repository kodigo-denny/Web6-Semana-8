function selecciono(){
    console.log("Se selecciono")
}

function cambioTamaño(){
    console.log("La pagina cambio de tamaño")
}

function mouseSale(){
    console.log("El mouse salio del area del input")
    document.querySelector("#txt5").style.backgroundColor = "white"
}

function mouseEntro(){
    console.log("El mouse ha ingresado al area del input")
    document.querySelector("#txt5").style.backgroundColor = "yellow"
}

function mouseDown(){
    console.log("Mouse down")
}

function mouseUp(){
    console.log("Mouse up")
}

function termino(){
    console.log("Termino de cargarse el sitio web")
}

function keypress(){
    console.log("Key Press")
}

function keydown(){
    console.log("Key down")
}

function keyup(){
    console.log("Key Up")
    let titulo = document.querySelector('#titulo')
    let txt3 = document.querySelector("#txt3")
    
    console.log(txt3.value)
    titulo.innerHTML = "<i>"+txt3.value+"</i>"
}

function MensajeError(){
    //alert("Mensaje de error")
}

function dobleClick(){
    console.log("Doble click")
}

function presionoClick(){
    console.log("Click")

}

function cambio(){
    console.log("la caja de texto a cambiado")
}


function foco(){
    console.log("El elemento a obtenido el foco")
    let txt1 = document.querySelector("#txt1")
    txt1.style.backgroundColor = "yellow"
}

function noFoco(){
    console.log("El elemnto perdio el foco")
    let txt1 = document.querySelector("#txt1")
    txt1.style.backgroundColor = "white"
}