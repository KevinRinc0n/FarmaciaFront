const url = "http://localhost:5297/api/Medicamentos/GetStock50";
let medicamentos = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicamentos();
});

const getMedicamentos = ()  =>{
    fetch(url)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicamentos = data;
        console.log(medicamentos);
        mostrarMedicamentos(medicamentos);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicamentos = document.getElementById("");

const mostrarMedicamentos = (medicamentos) =>{
    let listar = "";
    medicamentos.foreach(medicamento =>{
        listar += `
        `
    }); 
    contenedorMedicamentos.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urll = "http://localhost:5297/api/Proveedor/proveedorMedica";
let medicamentosComProveeA = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicCompProveeA();
});

const getMedicCompProveeA = ()  =>{
    fetch(urll)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicamentosComProveeA = data;
        console.log(medicamentosComProveeA);
        mostrarMedicCompProveeA(medicamentosComProveeA);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicComProveeA = document.getElementById("");

const mostrarMedicCompProveeA = (medicamentosComProveeA) =>{
    let listar = "";
    medicamentosComProveeA.foreach(medicamentoProveeA =>{
        listar += `
        `
    }); 
    contenedorMedicComProveeA.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urrrl = "http://localhost:5297/api/Medicamentos/GetTotalParace";
let medicamentoParacetamol = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicamentoParace();
});

const getMedicamentoParace = ()  =>{
    fetch(urrrl)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicamentoParacetamol = data;
        console.log(medicamentoParacetamol);
        mostrarMedicamentoParace(medicamentoParacetamol);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicamentoParace = document.getElementById("");

const mostrarMedicamentoParace = (medicamentoParacetamol) =>{
    let listar = "";
    medicamentoParacetamol.foreach(medicamento =>{
        listar += `
        `
    }); 
    contenedorMedicamentoParace.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////