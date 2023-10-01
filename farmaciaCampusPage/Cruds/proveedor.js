const url = "http://localhost:5297/api/Proveedor";
let proveedores = [];

window.addEventListener("DOMContentLoaded", () => {
    getProveedores();
});

const getProveedores = () =>{
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        proveedores = data;
        console.log(proveedores);
        mostrarProveedores(proveedores);
    })
    .catch(error => {
        alert("error", "Ha ocurrido un problema");
    });
};

const contenedorProveedores = document.getElementById("");

const mostrarProveedores = (proveedores) =>{
    let listar = "";
    proveedores.foreach(proveedor =>{
        listar += `
        <tr>
            <th scope="row">${proveedor.Id}</th>
            <td>${proveedor.Nombre}</td>
            <td>${proveedor.Contacto}</td>
            <td>${proveedor.IdDireccionFk}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarMedicamento(${proveedor.Id})>EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarrMedicamento(${proveedor.Id})>ELIMINAR</button></td>
        </tr>
        `
    }); 
    contenedorProveedores.innerHTML = listar;
};

const crearProveedor = () => {
    const formulario = document.getElementById("agregaProvee");
    if (!formulario.getElementById('inputName').lenght || formulario.getElementById('inputContact').lenght || formulario.getElementById('inputDirec').lenght)
    {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };


const empleado = {
    Nombre: formulario.getElementById("inputName"),
    Contacto: formulario.getElementById("inputContact"),
    IdDireccionFk: formulario.getElementById("inputDirec")
};
console.log(empleado);

    fetch(url,{
        method: "POST",
        body: JSON.stringify(empleado),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alert("success", respuestaa,mensaje);
        getProvee();
    })
    .catch(error =>{
        alert("error", error);
        document.getElementById("contenedor").reset();
    });
};

const editarProvee = (id) =>{
    let prov = {};
    proveedores.filter(provv => {
        if(provv.Id == id){
            prov = provv;
        };
    });

    document.getElementById("editaName").value = prov.Nombre;
    document.getElementById("editaContacto").value = prov.Contacto;
    document.getElementById("editaDireccion").value = prov.IdDireccionFk;

    console.log(prov)
    modalEdit();
};

const subirProveedor = () =>{
    const empleado = {
        Nombre: document.getElementById("inputName").value,
        Contacto: document.getElementById("inputContact").value,
        IdDireccionFk: document.getElementById("inputDirec").value
    };

    if (!empleado.Nombre || empleado.Contacto || empleado.IdDireccionFk){
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };
    document.getElementById("").innerHTML = "";

    fetch(url,{
        method: "PUT",
        body: JSON.stringify(empleado),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alert("success", respuestaa,mensaje);
        getProveedores();
    })
    .catch(error =>{
        alert("error", error);
    });
    document.getElementById("").reset();
};

const eliminarProveedor = (id) =>{
    fetch(`${url}/${id}`,{
        method : "DELETE"
    })

    .then(respuesta => respuesta.json())
    .then(respuestaa =>{
        alert("success", respuestaa.mensaje);
        getProveedores();
    })
    .catch(error =>{
        alert("error", error);
    });
};