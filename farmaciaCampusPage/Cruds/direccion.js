const urlDireccion = "http://localhost:5297/api/Direccion";
let direcciones = [];

window.addEventListener("DOMContentLoaded", () => {
    getMedic();
});

const getDireccion = () =>{
    fetch(urlDireccion)
    .then(respuesta => respuesta.json())
    .then(data => {
        direcciones = data;
        console.log(direcciones);
        mostrarDireccion(direcciones);
    const direccionSelect = document.getElementById("inputCiudad");

    direccionSelect.forEach((select) => {
        select.innerHTML = "";

        datos.forEach((ciudad) => {
            const opcion = document.createElement("option");
            opcion.value = ciudad.Id;
            opcion.value = ciudad.IdCiudadFk;
            select.appendChild(opcion);
        });
    });
    })
    .catch(error => {
        alert("error", "Ha ocurrido un problema");
    });
};

const contenedorDirecciones = document.getElementById("aggDireccBody");

const mostrarDireccion = (direcciones) =>{
    let listar = "";
    direcciones.foreach(direccion =>{
        listar += `
        <tr>
            <th scope="row">${direccion.Id}</th>
            <td>${direccion.TipoViaPrincipal}</td>
            <td>${direccion.NumeroViaPrincipal}</td>
            <td>${direccion.NumeroViaSecundaria}</td>
            <td>${direccion.Barrio}</td>
            <td>${direccion.Complemento}</td>
            <td>${direccion.IdCiudadFk}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarMedicamento(${direccion.Id})>EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarrMedicamento(${direccion.Id})>ELIMINAR</button></td>
        </tr>
        `
    }); 
    contenedorDirecciones.innerHTML = listar;
};

const crearDireccion = () => {
    const formulario = document.getElementById("agregaPaciente");
    if (!formulario.getElementById('inputTipoVia').lenght || formulario.getElementById('inputNumeroVia').lenght || formulario.getElementById('inputNumeroViaSecunda').lenght || formulario.getElementById('inputBarrio').lenght || formulario.getElementById('inputComplemento').lenght || formulario.getElementById('inputCiudad').lenght)
    {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };


const direccion = {
    TipoViaPrincipal: formulario.getElementById("inputTipoVia"),
    NumeroViaPrincipal: formulario.getElementById("inputNumeroVia"),
    NumeroViaSecundaria: formulario.getElementById("inputNumeroViaSecunda"),
    Barrio: formulario.getElementById("inputBarrio"),
    Complemento: formulario.getElementById("inputComplemento"),
    IdCiudadFk: formulario.getElementById("inputCiudad")
    };
console.log(direccion);

    fetch(urlDireccion,{
        method: "POST",
        body: JSON.stringify(direccion),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alert("success", respuestaa,mensaje);
        getDireccion();
    })
    .catch(error =>{
        alert("error", error);
        document.getElementById("contenedor").reset();
    });
};

const editarDireccion= (id) =>{
    let direccion = {};
    direcciones.filter(direction => {
        if(direction.Id == id){
            direccion = direction;
        };
    });

    const direccionSelect = document.getElementById("dieccCiudadEditar");

    direccionSelect.forEach((select) => {
        select.innerHTML = "";

        datos.forEach((ciudad) => {
            const opcion = document.createElement("option");
            opcion.value = ciudad.Id;
            opcion.value = ciudad.IdCiudadFk;
            select.appendChild(opcion);
        });
    });

    document.getElementById("editarVia").value = direccion.TipoViaPrincipal;
    document.getElementById("editarNumeroVia").value = direccion.NumeroViaPrincipal;
    document.getElementById("editarNumeroViaSecundario").value = direccion.NumeroViaSecundaria;
    document.getElementById("editarBarrio").value = direccion.Barrio;
    document.getElementById("editarComplemento").value = direccion.Complemento;
    document.getElementById("dieccCiudadEditar").value = direccion.IdCiudadFk;

    console.log(direccion)
    modalEdit();
};

const subirDireccion = () =>{
    const direccion = {
        Nombre: document.getElementById("nombreMedic").value,
        Precio: document.getElementById("precioMedic").value,
        FechaExpiracion: document.getElementById("fechaExpiMedic").value,
        Stock: document.getElementById("cantidadMedic").value,
        IdProveedorFk: document.getElementById("selectProvee").value,
        IdPresentacionFk: document.getElementById("selectPresentac").value,
        IdMarcaFk: document.getElementById("selectMarca").value
    };

    if (!direccion.TipoViaPrincipal || direccion.NumeroViaPrincipal || direccion.NumeroViaSecundaria || direccion.Barrio || direccion.Complemento || direccion.IdCiudadFk){
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };
    document.getElementById("").innerHTML = "";

    fetch(urlDireccion,{
        method: "PUT",
        body: JSON.stringify(direccion),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alert("success", respuestaa,mensaje);
        getDireccion();
    })
    .catch(error =>{
        alert("error", error);
    });
    document.getElementById("").reset();
};

const eliminarDireccion = (id) =>{
    fetch(`${urlDireccion}/${id}`,{
        method : "DELETE"
    })

    .then(respuesta => respuesta.json())
    .then(respuestaa =>{
        alert("success", respuestaa.mensaje);
        getDireccion();
    })
    .catch(error =>{
        alert("error", error);
    });
};