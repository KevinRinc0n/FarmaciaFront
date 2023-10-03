const urlMedi = "http://localhost:5297/api/Medicamento";
let mnedicamentos = [];

window.addEventListener("DOMContentLoaded", () => {
    getMedic();
});

const getMedic = () => {
    fetch(urlMedi)
        .then(respuesta => respuesta.json())
        .then(data => {
            mnedicamentos = data;
            console.log(mnedicamentos);
            mostraarMedicamentos(mnedicamentos);
            llenarSelects(data);
        })
        .catch(error => {
            console.log("Ha ocurrido un problema al obtener los medicamentos.");
            console.log(error);
        });
};

function llenarSelects(datos) {
    const selects = ["selectProvee", "selectPresentac", "selectMarca"];

    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        select.innerHTML = "";
        datos.forEach(dato => {
            const opcion = document.createElement("option");
            opcion.value = dato.id;
            opcion.textContent = dato.nombre;
            select.appendChild(opcion);
        });
    });
}

const contenedorMedicameentos = document.getElementById("aggMedicBody");

const mostraarMedicamentos = (mnedicamentos) => {
    let listar = "";
    mnedicamentos.forEach(medicamento => {
        listar += `
        <tr>
            <th scope="row">${medicamento.id}</th>
            <td>${medicamento.nombre}</td>
            <td>${medicamento.precio}</td>
            <td>${medicamento.fechaExpiracion}</td>
            <td>${medicamento.idInventarioFk.stock}</td>
            <td>${medicamento.idProveedorFk}</td>
            <td>${medicamento.idPresentacionFk}</td>
            <td>${medicamento.idMarcaFk}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onClick="editarMedicamento(${medicamento.id})">EDITAR</button></td>
            <td><button class="btn btn-danger" onClick="eliminarMedicamento(${medicamento.id})">ELIMINAR</button></td>
        </tr>
        `;
    });
    contenedorMedicameentos.innerHTML = listar;
};

const crearMedicamento = () => {
    const formulario = document.getElementById("agregaMedi");

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
        Cantidad: cantidad,
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
            console.alert(error);
        });
};

const editarMedicamento = (id) => {
    const medicamento = mnedicamentos.find(medicament => medicament.Id === id);

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
    editarCantidad.value = medicamento.Cantidad;
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
        Cantidad: cantidad,
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
            console.alert(error);
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
            console.alert(error);
        });
};

function filterTable() {
    const buscarIgual = document.querySelector("#search").value.toLowerCase();

    const filtrarMedicamentos = mnedicamentos.filter(medicamento => {
        return (
            medicamento.Id.toString().includes(buscarIgual) ||
            medicamento.Nombre.toLowerCase().includes(buscarIgual)
        );
    });
    mostraarMedicamentos(filtrarMedicamentos);
}