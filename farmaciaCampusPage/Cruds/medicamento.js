const url = "http://localhost:5297/api/Medicamento";
let medicaments = [];

window.addEventListener("DOMContentLoaded", () => {
    getMedic();
});

const getMedic = () =>{
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        medicaments = data;
        console.log(medicaments);
        mostrarMedicamentos(medicaments);
    })
    .catch(error => {
        alert("error", "Ha ocurrido un problema");
    });
};

const contenedorMedicamentos = document.getElementById("");

const mostrarMedicamentos = (medicamentos) =>{
    let listar = "";
    medicamentos.foreach(medicamento =>{
        listar += `
        <tr>
            <th scope="row">${medicamento.Id}</th>
            <td>${medicamento.Nombre}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarMedicamento(${medicamento.Id})>EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarrMedicamento(${medicamento.Id})>ELIMINAR</button></td>
        </tr>
        `
    }); 
    contenedorMedicamentos.innerHTML = listar;
};

const crearMedicamento = () => {
    const formulario = document.getElementById("agregaMedi");
    if (!formulario.getElementById('nombreMedic').lenght || formulario.getElementById('precioMedic').lenght || formulario.getElementById('fechaExpiMedic').lenght || formulario.getElementById('cantidadMedic').lenght || formulario.getElementById('selectProvee').lenght || formulario.getElementById('selectPresentac').lenght || formulario.getElementById('selectMarca').lenght)
    {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };


const medicamento = {
    Nombre: formulario.getElementById("nombreMedic"),
    Precio: formulario.getElementById("precioMedic"),
    FechaExpiracion: formulario.getElementById("fechaExpiMedic"),
    Stock: formulario.getElementById("cantidadMedic"),
    IdProveedorFk: formulario.getElementById("selectProvee"),
    IdPresentacionFk: formulario.getElementById("selectPresentac"),
    IdMarcaFk: formulario.getElementById("selectMarca")
};
console.log(medicamento);

    fetch(url,{
        method: "POST",
        body: JSON.stringify(medicamento),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alert("success", respuestaa,mensaje);
        getMedic();
    })
    .catch(error =>{
        alert("error", error);
        document.getElementById("contenedor").reset();
    });
};

const editarMedicamento= (id) =>{
    let medicamento = {};
    medicaments.filter(medicament => {
        if(medicament.Id == id){
            medicamento = medicament;
        };
    });

    document.getElementById("editarNombre").value = medicamento.Nombre;
    document.getElementById("editarPrecio").value = medicamento.Precio;
    document.getElementById("editarFecha").value = medicamento.FechaExpiracion;
    document.getElementById("editarCantidad").value = medicamento.Stock;
    document.getElementById("medicProveEditar").value = medicamento.IdProveedorFk;
    document.getElementById("medicPresentaEditar").value = medicamento.IdPresentacionFk;
    document.getElementById("medicMarcaeEditar").value = medicamento.IdMarcaFk;

    console.log(medicamento)
    modalEdit();
};

const subirMedicamento = () =>{
    const medicamento = {
        Nombre: document.getElementById("nombreMedic").value,
        Precio: document.getElementById("precioMedic").value,
        FechaExpiracion: document.getElementById("fechaExpiMedic").value,
        Stock: document.getElementById("cantidadMedic").value,
        IdProveedorFk: document.getElementById("selectProvee").value,
        IdPresentacionFk: document.getElementById("selectPresentac").value,
        IdMarcaFk: document.getElementById("selectMarca").value
    };

    if (!medicamento.Nombre || medicamento.Precio || medicamento.FechaExpiracion || medicamento.Stock || medicamento.IdProveedorFk || medicamento.IdPresentacionFk || medicamento.IdMarcaFk){
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };
    document.getElementById("").innerHTML = "";

    fetch(url,{
        method: "PUT",
        body: JSON.stringify(medicamento),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alert("success", respuestaa,mensaje);
        getMedic();
    })
    .catch(error =>{
        alert("error", error);
    });
    document.getElementById("").reset();
};

const eliminarMedicamento = (id) =>{
    fetch(`${url}/${id}`,{
        method : "DELETE"
    })

    .then(respuesta => respuesta.json())
    .then(respuestaa =>{
        alert("success", respuestaa.mensaje);
        getMedic();
    })
    .catch(error =>{
        alert("error", error);
    });
};