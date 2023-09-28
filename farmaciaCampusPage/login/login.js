const login = document.getElementById("form");

login.addEventListener('submit',async (e) => {
    e.preventDefault();

let data = Object.fromEntries(new FormData(e.target));

const url = 'http://localhost:5297/api/Empleado/token';

var empleado = {
    "Username": data.Username,
    "Password": data.Password
};

var informacion = JSON.stringify(empleado)

const post = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: informacion
    };


    fetch(url, post)
    .then(response => {
        if (!response.ok) {
            throw new Error(`La solicitud no se cumplio. (${response.status})`);
        }
        return response.json(); 
        })
        .then(result => {
        
        if (result.Message === "Empleado existente"){

            window.location.replace("../index.html");
        }    

        if (result.Message === "Empleado No Existe"){
            alert("Empleado no existente")
        }

        if(result.Message === `Credenciales incorrectas para el empleado ${result.Nombre}`){
            alert("La clave es Incorrecta")
        }
        console.log("Resultado:", result);
        })
        .catch(error => {
        console.error("Error:", error);
        });
});