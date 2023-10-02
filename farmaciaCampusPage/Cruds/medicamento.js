const urlMedi = "http://localhost:5297/api/Medicamento";
let medicaments = [];

window.addEventListener("DOMContentLoaded", () => {
    getMedic();
});

const getMedic = () => {
    fetch(urlMedi)
        .then(respuesta => respuesta.json())
        .then(data => {
            medicaments = data;
            console.log(medicaments);
            mostrarMedicamentos(medicaments);
            llenarSelects(datos);
        })
        .catch(error => {
            alert("Ha ocurrido un problema al obtener los medicamentos.");
            console.error(error);
        });
};

function llenarSelects(datos) {
    const selects = ["selectProvee", "selectPresentac", "selectMarca"];

    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        select.innerHTML = "";
        datos.forEach(dato => {
            const opcion = document.createElement("option");
            opcion.value = dato.Id;
            opcion.textContent = dato.Nombre;
            select.appendChild(opcion);
        });
    });
}

const contenedorMedicamentos = document.getElementById("aggMedicBody");

const mostrarMedicamentos = (medicamentos) => {
    let listar = "";
    medicamentos.forEach(medicamento => {
        listar += `
        <tr>
            <th scope="row">${medicamento.Id}</th>
            <td>${medicamento.Nombre}</td>
            <td>${medicamento.Precio}</td>
            <td>${medicamento.FechaExpiracion}</td>
            <td>${medicamento.Cantidad}</td>
            <td>${medicamento.Proveedor}</td>
            <td>${medicamento.Presentacion}</td>
            <td>${medicamento.Marca}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarMedicamento(${medicamento.Id})">EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarMedicamento(${medicamento.Id})">ELIMINAR</button></td>
        </tr>
        `;
    });
    contenedorMedicamentos.innerHTML = listar;
};

const crearMedicamento = () => {
    const formulario = document.getElementById("agregaMedi");

    const nombre = formulario.getElementById("nombreMedic").value;
    const precio = formulario.getElementById("precioMedic").value;
    const fechaExpiracion = formulario.getElementById("fechaExpiMedic").value;
    const cantidad = formulario.getElementById("cantidadMedic").value;
    const proveedor = formulario.getElementById("selectProvee").value;
    const presentacion = formulario.getElementById("selectPresentac").value;
    const marca = formulario.getElementById("selectMarca").value;

    if (!nombre || !precio || !fechaExpiracion || !cantidad || !proveedor || !presentacion || !marca) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const medicamento = {
        Nombre: nombre,
        Precio: precio,
        FechaExpiracion: fechaExpiracion,
        Stock: cantidad,
        IdProveedorFk: proveedor,
        IdPresentacionFk: presentacion,
        IdMarcaFk: marca
    };

    fetch(urlMedi, {
        method: "POST",
        body: JSON.stringify(medicamento),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(respuesta => respuesta.json())
        .then(respuestaa => {
            alert("Medicamento creado exitosamente.");
            getMedic();
        })
        .catch(error => {
            alert("Ha ocurrido un error al crear el medicamento.");
            console.error(error);
        });
};

const editarMedicamento = (id) => {
    const medicamento = medicaments.find(medicament => medicament.Id === id);

    if (!medicamento) {
        alert("Medicamento no encontrado.");
        return;
    }

    const editarNombre = document.getElementById("editarNombre");
    const editarPrecio = document.getElementById("editarPrecio");
    const editarFecha = document.getElementById("editarFecha");
    const editarCantidad = document.getElementById("editarCantidad");
    const medicProveEditar = document.getElementById("medicProveEditar");
    const medicPresentaEditar = document.getElementById("medicPresentaEditar");
    const medicMarcaeEditar = document.getElementById("medicMarcaeEditar");

    editarNombre.value = medicamento.Nombre;
    editarPrecio.value = medicamento.Precio;
    editarFecha.value = medicamento.FechaExpiracion;
    editarCantidad.value = medicamento.Stock;
    medicProveEditar.value = medicamento.IdProveedorFk;
    medicPresentaEditar.value = medicamento.IdPresentacionFk;
    medicMarcaeEditar.value = medicamento.IdMarcaFk;
};

const subirMedicamento = () => {
    const nombre = document.getElementById("nombreMedic").value;
    const precio = document.getElementById("precioMedic").value;
    const fechaExpiracion = document.getElementById("fechaExpiMedic").value;
    const cantidad = document.getElementById("cantidadMedic").value;
    const proveedor = document.getElementById("selectProvee").value;
    const presentacion = document.getElementById("selectPresentac").value;
    const marca = document.getElementById("selectMarca").value;

    if (!nombre || !precio || !fechaExpiracion || !cantidad || !proveedor || !presentacion || !marca) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const medicamento = {
        Nombre: nombre,
        Precio: precio,
        FechaExpiracion: fechaExpiracion,
        Stock: cantidad,
        IdProveedorFk: proveedor,
        IdPresentacionFk: presentacion,
        IdMarcaFk: marca
    };

    fetch(urlMedi, {
        method: "PUT",
        body: JSON.stringify(medicamento),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(respuesta => respuesta.json())
        .then(respuestaa => {
            alert("Medicamento actualizado exitosamente.");
            getMedic();
        })
        .catch(error => {
            alert("Ha ocurrido un error al actualizar el medicamento.");
            console.error(error);
        });

    document.getElementById("agregaMedi").reset();
};

const eliminarMedicamento = (id) => {
    fetch(`${urlMedi}/${id}`, {
        method: "DELETE"
    })
        .then(respuesta => respuesta.json())
        .then(respuestaa => {
            alert("Medicamento eliminado exitosamente.");
            getMedic();
        })
        .catch(error => {
            alert("Ha ocurrido un error al eliminar el medicamento.");
            console.error(error);
        });
};

function filterTable() {
    const buscarIgual = document.querySelector("#search").value.toLowerCase();

    const filtrarMedicamentos = medicaments.filter(medicamento => {
        return (
            medicamento.Id.toString().includes(buscarIgual) ||
            medicamento.Nombre.toString().includes(buscarIgual)
        );
    });
    mostrarMedicamentos(filtrarMedicamentos);
}
