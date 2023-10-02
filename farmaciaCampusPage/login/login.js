import { getCookieValue } from "./Configuration/Cookies.js";
import { rolpage } from "./Configuration/Cookies.js";
var nombreCookie = "UserActivo";
var nombreRol = "Rol";
var seccionEmpleado = document.getElementById("agregaEmpleado");
if (getCookieValue(nombreCookie)== "true" && getCookieValue(nombreRol) == "Administrador") {
    seccionEmpleado.style.display = "block";
}
else if (getCookieValue(nombreCookie)== "true" && getCookieValue(nombreRol) == "Empleado") {
    seccionEmpleado.style.display = "none";
}
else{
    console.log("no tiene rol");
}


const login = document.getElementById("form");

login.addEventListener('submit',async (e) => {
    e.preventDefault();

    let data = {
        "Username": document.querySelector('input[name="Username"]').value,
        "Password": document.querySelector('input[name="Password"]').value
    };

    const url = 'http://localhost:5297/api/user/token';

/*     var usuario = {
        "Username": data.Username,
        "Password": data.Password
    };

    var informacion = JSON.stringify(usuario) */

    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

try{
    await fetch(url, opciones)
    .then(response => {
        if (!response.ok) {
            throw new Error(`La solicitud no se cumplio. (${response.status})`);
        }
        return response.json(); 
        })
    .then(result => {
        
        if (result.mesagge === "Usuario Existente"){

            var fechaActual = new Date();
            var fechaFutura = new Date(fechaActual.getTime() + 5 * 60 * 1000);

            document.cookie = `miToken=${result.token}`;
            document.cookie = `miRefreshToken=${result.refreshTokenExpiration}`;
            document.cookie = `UserActivo=${true}`;
            document.cookie = `Username=${result.userName}`;
            document.cookie = `Rol=${result.roles}`;
            document.cookie = `ExpireToken=${fechaFutura}`;
            window.location.replace("../index.html");
            rolpage();
        }
        if (result.mesagge === "Usuario no Existe") {
            alert("El usario no existe");
        }
        if(result.mesagge ==="Credenciales incorrectas para el usuario"){
            console.log("La autenticacion Fallo");
            alert("Credenciales incorrectas o usuario no registrado");
        }
        console.log("Resultado:", result);
    })
}catch(error) {
            console.error("Error:", error);
            alert("Hubo un error al procesar la solicitud. Por favor, verifica la consola para más detalles.");
        };
});