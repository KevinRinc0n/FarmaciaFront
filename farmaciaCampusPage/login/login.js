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


    await fetch(url, opciones)
    .then(response => {
        if (!response.ok) {
            throw new Error(`La solicitud no se cumplio. (${response.status})`);
        }
        return response.json(); 
        })
    .then(result => {
        
        if (result.isAuthenticated === true){

            document.cookie = `miToken=${result.UserToken}`;
            document.cookie = `miRefreshToken=${result.refreshToken}`;
            document.cookie = `UserActve=${true}`;
            document.cookie = `Username=${result.Username}`;
            document.cookie = `Rol=${result.userRoles}`;
            window.location.replace("../index.html");
        } else{
            console.log("La autenticacion Fallo");
            alert("Credenciales incorrectas o usuario no registrado");
        }
        console.log("Resultado:", result);
    })
    .catch(error => {
            console.error("Error:", error);
            alert("Hubo un error al procesar la solicitud. Por favor, verifica la consola para más detalles.");
        });
});