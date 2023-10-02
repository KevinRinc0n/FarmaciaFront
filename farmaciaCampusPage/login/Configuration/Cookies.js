export function getCookieValue(cookiename){
    var cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        if (cookie.indexOf(cookiename + '=') === 0) {
            
            return cookie.substring(cookiename.length + 1, cookie.length);
        }
    }
    return null;
}

export function rolpage() {
    var seccionEmpleado = document.getElementById("agregaEmpleado");
    var nombreRol = "Rol";
    if (getCookieValue(nombreRol)== "Administrador") {
        window.location.replace("../index.html");
        seccionEmpleado.style.display = "block";
    }
    if (getCookieValue(nombreRol)=="Empleado") {
        window.location.replace("../index.html");
        seccionEmpleado.style.display = "none";
    }
}

export async function RefreshToken(){
    const nombre = "ExpireToken";

    if (Date()>= getCookieValue(nombre)) {
        var seguir = window.confirm("Tu sesion ha caducado. ¿Deseas permanecer en e sitio?");

        if (seguir) {
            const url = 'http://localhost:5297/User/refresh-token';

            var refreshToken = getCookieValue("miRefreshToken");

            var user ={
                "refreshToken" : refreshToken
            };

            var Datos = JSON.stringify(user);

            const options = {
                method :'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body : Datos
            };

            await fetch(url, options)
                .then(response =>{
                    if (!response.ok) {
                        throw new Error(`La solicitud no fue exitosa. Codigo de estado: ${response.status}`);
                    }
                    return response.json();
                })
                .then(result =>{
                        console.log("Result:",result);
                        var fechaActual = new Date();
                        var fechaFutura = new Date(fechaActual.getTime() + 5 * 60 * 1000);

                        document.cookie = `miToken=${result.token}`;
                        document.cookie = `miRefreshToken=${result.refreshTokenExpiration}`;
                        document.cookie = `UserActivo=${true}`;
                        document.cookie = `userName=${result.userName}`;
                        document.cookie = `Rol=${result.roles}`;
                        document.cookie = `ExpireToken=${fechaFutura}`;
                })
                .catch(error =>{
                    console.error("Error:",error);
                });
        }
        else{
            cookie()
            window.location.replace("../login.html")
        }
    }
}
export function cookie(){
    document.cookie = `miToken=""`;
    document.cookie = `miRefreshToken=""`;
    document.cookie = `UserActivo=""`;
    document.cookie = `userName=""`;
    document.cookie = `Rol=""`;
    document.cookie = `ExpireToken=""`;
}