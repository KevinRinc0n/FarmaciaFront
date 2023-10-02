const url = "http://localhost:5297/api/";

let medicamentos = [];

window.addEventListener("DOMContentLoaded", () => {
    getMedicamentos();
});

const getMedicamentos = () => {
    fetch(`${url}Medicamento/GetStock50`)
        .then(respuesta => respuesta.json())
        .then(data => {
            medicamentos = data;
            console.log(medicamentos);
            mostrarMedicamentos(medicamentos);
        })
        .catch(error => {
            alert("Ha ocurrido un problema: " + error);
        });
};

const contenedorMedicamentos = document.getElementById("medicamentosMenos50Stock");

const mostrarMedicamentos = (medicamentos) => {
    let listar = "";
    medicamentos.forEach(medicamento => { 
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamento.id}</h5> 
                <p class="card-text">${medicamento.nombre}</p> 
                <p class="card-text">${medicamento.precio}</p>
            </div>
        </div>
        `;
    });
    contenedorMedicamentos.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicamentosComProveeA = [];

window.addEventListener("DOMContentLoaded", () => {
    getMedicCompProveeA();
});

const getMedicCompProveeA = () => {
    fetch(`${url}Proveedor/proveedorMedica`)
    .then(respuesta => respuesta.json())
    .then(data => {
        medicamentosComProveeA = data;
        console.log(medicamentosComProveeA);
        mostrarMedicCompProveeA(medicamentosComProveeA);
    })
    .catch(error => {
        alert("Ha ocurrido un problema: " + error);
    });
};

const contenedorMedicComProveeA = document.getElementById("medicamentosProveeA");

const mostrarMedicCompProveeA = (medicamentosComProveeA) => {
    let listar = "";
    medicamentosComProveeA.forEach(medicamentoProveeA => {
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoProveeA.nombre}</h5>
            </div>
        </div>
        `;
    }); 
    contenedorMedicComProveeA.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicamentoParacetamol = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicamentoParace();
});

const getMedicamentoParace = ()  =>{
    fetch(`${url}Medicamento/Get2024Expi`)
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

const contenedorMedicamentoParace = document.getElementById("medicamentoExpi2024");

const mostrarMedicamentoParace = (medicamentoParacetamol) =>{
    let listar = "";
    medicamentoParacetamol.forEach(cadu2024 =>{                                           
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cadu2024.id}</h5>
                <h5 class="card-title">${cadu2024.nombre}</h5>
                <h5 class="card-title">${cadu2024.fechaExpiracion}</h5>
            </div>
        </div>
        `
    }); 
    contenedorMedicamentoParace.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let recetas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getRecetas();
});

const getRecetas = ()  =>{                                                               
    fetch(`${url}Receta/GetRecetas2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        recetas = data;
        console.log(recetas);
        mostrarRecetas(recetas);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorRecetas = document.getElementById("recetasBody");

const mostrarRecetas = (recetas) =>{
    let listar = "";
    recetas.forEach(receta =>{
        listar += `
        <tr>
            <th scope="row">${receta.id}</th>
            <td>${receta.idPacienteFk}</td>
            <td>${receta.medicamentoRemitente}</td>
            <td>${receta.descripcion}</td>
        </tr>
        `
    }); 
    contenedorRecetas.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medisCadu2024 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMediCadu2024();
});

const getMediCadu2024 = ()  =>{
    fetch(`${url}Medicamento/GetCadu2024`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medisCadu2024 = data;
        console.log(medisCadu2024);
        mostrarCadu2024(medisCadu2024);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedisCadu2024 = document.getElementById("medicAntes2024Body");

const mostrarCadu2024 = (medisCadu2024) =>{
    let listar = "";
    medisCadu2024.forEach(medicamentoCadu2024 =>{
        listar += `
        <tr>
            <th scope="row">${medicamentoCadu2024.id}</th>
            <td>${medicamentoCadu2024.nombre}</td>
            <td>${medicamentoCadu2024.precio}</td>
            <td>${medicamentoCadu2024.fechaExpiracion}</td>
            <td>${medicamentoCadu2024.idProveedorFk}</td>
        </tr>
        `
    }); 
    contenedorMedisCadu2024.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicXProvee = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicVenXProvee();
});

const getMedicVenXProvee = ()  =>{
    fetch(`${url}MovimientoInventario/GetTotalRecaudado`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicXProvee = data;
        console.log(medicXProvee);
        mostrarMedicXProvee(medicXProvee);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicXProvee = document.getElementById("totalRecaudadoXVenMedic");

const mostrarMedicXProvee = (medicXProvee) =>{
    let listar = "";
    medicXProvee.forEach(totalMedicXProve =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/dinero.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${totalMedicXProve.id}</h5>
                <p class="card-title">${totalMedicXProve.nombre}</p>
                <p class="card-text">${totalMedicXProve.precio}</p>
                <p class="card-text">${totalMedicXProve.idProveedorFk}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicXProvee.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

// let recaudadoXVenta = [];

// window.addEventListener("DOMContentLoaded", () =>{
//     getTotalRecaudado();
// });

// const getTotalRecaudado = ()  =>{
//     fetch(`${url}MovimientoInventario/GetMediNoVendidos`)
//     .then(respuesta  => respuesta.json())
//     .then(data  => {
//         recaudadoXVenta = data;
//         console.log(recaudadoXVenta);
//         mostrarTotalRecaudado(recaudadoXVenta);
//     })
//     .catch(error =>{
//         alert(error, "Ha ocurrido un problema");
//     });
// };

// const contenedorTotalRecaudado = document.getElementById("medicamentosNoVendidos");

// const mostrarTotalRecaudado = (recaudadoXVenta) =>{
//     let listar = "";
//     recaudadoXVenta.forEach(totalRecaudado =>{
//         listar += `
//         <div class="card divPeti" style="width: 18rem;">
//             <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${totalRecaudado.Id}</h5>
//                 <p class="card-text">${totalRecaudado.Nombre}</p>
//             </div>
//         </div>
//         `
//     }); 
//     contenedorTotalRecaudado.innerHTML = listar;
// };

/////////////////////////////////////////////////////////////////

let medisNoVendidos = [];

window.addEventListener("DOMContentLoaded", () =>{
    getNoVendidos();
});

const getNoVendidos = ()  =>{
    fetch(`${url}Medicamento/GetMediCaro`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medisNoVendidos = data;
        console.log(medisNoVendidos);
        mostrarMedicNoVendi(medisNoVendidos);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorNoVendidos = document.getElementById("medicamentoMasCaroBody");

const mostrarMedicNoVendi = (medisNoVendidos) =>{
    let listar = "";
    medisNoVendidos.forEach(medicamentoNoVend =>{
        listar += `
        <tr>
            <th scope="row">${medicamentoNoVend.id}</th>
            <td>${medicamentoNoVend.nombre}</td>
            <td>${medicamentoNoVend.precio}</td>
        </tr>
        `
    }); 
    contenedorNoVendidos.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

// let medicCaro = [];

// window.addEventListener("DOMContentLoaded", () =>{
//     getMasCaro();
// });

// const getMasCaro = ()  =>{
//     fetch(`${url}Medicamento/GetMediMenosVen2023`)
//     .then(respuesta  => respuesta.json())
//     .then(data  => {
//         medicCaro = data;
//         console.log(medicCaro);
//         mostrarMasCaro(medicCaro);
//     })
//     .catch(error =>{
//         alert(error, "Ha ocurrido un problema");
//     });
// };

// const contenedorMasCaro = document.getElementById("medicamentoMasCaro");

// const mostrarMasCaro = (medicCaro) =>{
//     let listar = "";
//     medicCaro.forEach(medicamentoMoreCaro =>{
//         listar += `
//         <div class="card divPeti" style="width: 18rem;">
//             <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${medicamentoMoreCaro.Id}</h5>
//                 <p class="card-text">${medicamentoMoreCaro.Nombre}</p>
//                 <p class="card-text">${medicamentoMoreCaro.Precio}</p>
//             </div>
//         </div>
//         `
//     }); 
//     contenedorMasCaro.innerHTML = listar;
// };

/////////////////////////////////////////////////////////////////

let medicamentoXProvee = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicXProvee();
});

const getMedicXProvee = ()  =>{
    fetch(`${url}Proveedor/GetMedisXProve`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicamentoXProvee = data;
        console.log(medicamentoXProvee);
        mostrarMedicaXProvee(medicamentoXProvee);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicaXProvee = document.getElementById("ventXProveBody");

const mostrarMedicaXProvee = (medicamentoXProvee) =>{
    let listar = "";
    medicamentoXProvee.forEach(medicamentoXProv =>{
        listar += `
        <tr>
            <th scope="row">${medicamentoXProv.id}</th>
            <td>${medicamentoXProv.nombre}</td>
            <td>${medicamentoXProv.precio}</td>
            <td>${medicamentoXProv.idProveedorFk}</td>
        </tr>
        `
    }); 
    contenedorMedicaXProvee.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicamentosVenMazo2023teCompra = [];

window.addEventListener("DOMContentLoaded", () =>{
    getPacientePara();
});

const getPacientePara = ()  =>{
    fetch(`${url}MovimientoInventario/GetPacienComParace`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        pacienteCompraParace = data;
        console.log(pacienteCompraParace);
        mostrarPacientePara(pacienteCompraParace);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorPacientePara = document.getElementById("pacienCompraParaBody");

const mostrarPacientePara = (pacienteCompraParace) =>{
    let listar = "";
    pacienteCompraParace.forEach(pacientComprParace =>{
        listar += `
        <tr>
            <th scope="row">${pacientComprParace.id}</th>
            <td>${pacientComprParace.nombre}</td>
        </tr>
        `
    }); 
    contenedorPacientePara.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let proveeNoVentas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getNoventasProvee();
});

const getNoventasProvee = ()  =>{
    fetch(`${url}Proveedor/GetProveeNoVenMedis`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        proveeNoVentas = data;
        console.log(proveeNoVentas);
        mostrarNoVentaProvee(proveeNoVentas);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorProveeNoVentas = document.getElementById("proveeNoVenMedicUltiAnoBody");

const mostrarNoVentaProvee = (proveeNoVentas) =>{
    let listar = "";
    proveeNoVentas.forEach(proveeNoVenMediLastYear =>{
        listar += `
        <tr>
            <th scope="row">${proveeNoVenMediLastYear.id}</th>
            <td>${proveeNoVenMediLastYear.nombre}</td>
            <td>${proveeNoVenMediLastYear.contacto}</td>
        </tr>
        `
    }); 
    contenedorProveeNoVentas.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicamentosMarzo = [];

window.addEventListener("DOMContentLoaded", () => {
    getMedicamentoMarzo();
});

const getMedicamentoMarzo = () => {
    fetch(`${url}Medicamento/GetMedisVendMarzo`)
        .then(respuesta => respuesta.json())
        .then(data => {
            medicamentosMarzo = data;
            console.log(medicamentosMarzo);
            mostrarMedicMarzo(medicamentosMarzo);
        })
        .catch(error => {
            alert("Ha ocurrido un problema: " + error);
        });
};

const contenedorMedicMarzo = document.getElementById("medicamentosVenMazo2023");

const mostrarMedicMarzo = (medicamentosMarzo) => {
    let listar = "";
    medicamentosMarzo.forEach(totalMedicamentoMarzo => {
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${totalMedicamentoMarzo}</h5>
            </div>
        </div>
        `;
    });
    contenedorMedicMarzo.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicMenosVendido = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMediMenosVen2023();
});

const getMediMenosVen2023 = ()  =>{
    fetch(`${url}Medicamento/GetMediMenosVe2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicMenosVendido = data;
        console.log(medicMenosVendido);
        mostrarMedicMenosven(medicMenosVendido);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicMenosVen = document.getElementById("medicamentosMenosVen2023");

const mostrarMedicMenosven = (medicMenosVendido) =>{
    let listar = "";
    medicMenosVendido.forEach(medicamentoMenosVen =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoMenosVen.id}</h5>
                <p class="card-text">${medicamentoMenosVen.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicMenosVen.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

// let gananciaXProvee = [];

// window.addEventListener("DOMContentLoaded", () =>{
//     getProveeGanancia();
// });

// const getProveeGanancia = ()  =>{
//     fetch(`${url}Proveedor/GetGananTotalProvee`)
//     .then(respuesta  => respuesta.json())
//     .then(data  => {
//         gananciaXProvee = data;
//         console.log(gananciaXProvee);
//         mostrarGananciaProvee(gananciaXProvee);
//     })
//     .catch(error =>{
//         alert(error, "Ha ocurrido un problema");
//     });
// };

// const contenedorGananciaProvee = document.getElementById("ventXProveBody");

// const mostrarGananciaProvee = (gananciaXProvee) =>{
//     let listar = "";
//     gananciaXProvee.forEach(proveeGananciaTotal =>{
//         listar += `
//         <tr>
//             <th scope="row">${proveeGananciaTotal.Id}</th>
//             <td>${proveeGananciaTotal.Nombre}</td>
//             <td>${proveeGananciaTotal.Contacto}</td>
//             <td>${proveeGananciaTotal.gananciaXProvee}</td>
//         </tr>
//         `
//     }); 
//     contenedorGananciaProvee.innerHTML = listar;
// };

/////////////////////////////////////////////////////////////////

let promMedisVentas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getPromMedis();
});

const getPromMedis = ()  =>{
    fetch(`${url}MovimientoInventario/GetPromMedis`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        promMedisVentas = data;
        console.log(promMedisVentas);
        mostrarPromMedisVenta(promMedisVentas);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorPromMedis = document.getElementById("medicamentosPromeXVen");

const mostrarPromMedisVenta = (promMedisVentas) =>{
    let listar = "";
    promMedisVentas.forEach(promedioMedicamento =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${promedioMedicamento.id}</h5>
                <p class="card-text">${promedioMedicamento.nombre}</p>
                <p class="card-text">${promedioMedicamento.precio}</p>
                <p class="card-text">${promedioMedicamento.promedio}</p>
            </div>
        </div>
        `
    }); 
    contenedorPromMedis.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let ventasEmple2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getVentaEmple2023();
});

const getVentaEmple2023 = ()  =>{
    fetch(`${url}Medicamento/GetTotalParace`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        ventasEmple2023 = data;
        console.log(ventasEmple2023);
        mostrarVentaEmpleados2023(ventasEmple2023);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorVentaEmple = document.getElementById("medicamentosTotaParace");

const mostrarVentaEmpleados2023 = (ventasEmple2023) =>{
    let listar = "";
    ventasEmple2023.forEach(ventaXEmple =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/parace.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">El total de ventas del medicamento paracetamol es: ${ventaXEmple.unidadesVendidas}</p>
            </div>
        </div>
        `
    }); 
    contenedorVentaEmple.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicamentosExpiran2024 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedisExpi2024();
});

const getMedisExpi2024 = ()  =>{
    fetch(`${url}Empleado/CantVentaEmple`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicamentosExpiran2024 = data;
        console.log(medicamentosExpiran2024);
        mostraMedicExpira2024(medicamentosExpiran2024);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedoMedicExp2024 = document.getElementById("cantidadVentaEmpleadoo");

const mostraMedicExpira2024 = (medicamentosExpiran2024) =>{
    let listar = "";
    medicamentosExpiran2024.forEach(medicamento2024Expira =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/moviInvent.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamento2024Expira.id}</h5>
                <p class="card-text">${medicamento2024Expira.nombre}</p>
                <p class="card-text">${medicamento2024Expira.ventas}</p>
            </div>
        </div>
        `
    }); 
    contenedoMedicExp2024.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let empleadosMas5Ventas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleMas5Vent();
});

const getEmpleMas5Vent = ()  =>{
    fetch(`${url}Empleado/mas-5-ventas`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        empleadosMas5Ventas = data;
        console.log(empleadosMas5Ventas);
        mostraEmpleMas5ventas(empleadosMas5Ventas);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorEmpleMas5Ventas = document.getElementById("empleMas5VentasBody");

const mostraEmpleMas5ventas = (empleadosMas5Ventas) =>{
    let listar = "";
    empleadosMas5Ventas.forEach(empleMas5Ven =>{
        listar += `
        <tr>
            <th scope="row">${empleMas5Ven.id}</th>
            <td>${empleMas5Ven.nombre}</td>
        </tr>
        `
    }); 
    contenedorEmpleMas5Ventas.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicamentosNuncaVendidos = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedisNuncaVen();
});

const getMedisNuncaVen = ()  =>{
    fetch(`${url}Medicamento/nunca-vendido`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicamentosNuncaVendidos = data;
        console.log(medicamentosNuncaVendidos);
        mostraMedicNuncaVent(medicamentosNuncaVendidos);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicNuncaVendi = document.getElementById("medicamentosNoVendidos");

const mostraMedicNuncaVent = (medicamentosNuncaVendidos) =>{
    let listar = "";
    medicamentosNuncaVendidos.forEach(medicamentoNeverVendi =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoNeverVendi.id}</h5>
                <p class="card-text">${medicamentoNeverVendi.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicNuncaVendi.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let pacienteMasDineroGasta = [];

window.addEventListener("DOMContentLoaded", () =>{
    getPaciente();
});

const getPaciente = ()  =>{
    fetch(`${url}Paciente/gastado-mas-dinero-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        pacienteMasDineroGasta = data;
        console.log(pacienteMasDineroGasta);
        mostraPacienMasDinero(pacienteMasDineroGasta);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMasDineroGasta = document.getElementById("pacienteMasDinero2023");

const mostraPacienMasDinero = (pacienteMasDineroGasta) =>{
    let listar = "";
    pacienteMasDineroGasta.forEach(pacienteMasDinero =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/dinero.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pacienteMasDinero.id}</h5>
                <p class="card-text">${pacienteMasDinero.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMasDineroGasta.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let empleadosSinVentas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleadosSinVentas();
});

const getEmpleadosSinVentas = ()  =>{
    fetch(`${url}Empleado/sin-ventas-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        empleadosSinVentas = data;
        console.log(empleadosSinVentas);
        mostrarEmpleadosSinVentas(empleadosSinVentas);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorEmpleSinVentas = document.getElementById("empleadoSinVentas2023");

const mostrarEmpleadosSinVentas = (empleadosSinVentas) =>{
    let listar = "";
    empleadosSinVentas.forEach(empleadoSinVentt =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/farmac.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${empleadoSinVentt.id}</h5>
                <p class="card-text">${empleadoSinVentt.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorEmpleSinVentas.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let proveeSuminisMasMedis = [];

window.addEventListener("DOMContentLoaded", () =>{
    getproveeSuminisMasMedis();
});

const getproveeSuminisMasMedis = ()  =>{
    fetch(`${url}Proveedor/suministro-mas-medicamentos-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        proveeSuminisMasMedis = data;
        console.log(proveeSuminisMasMedis);
        mostrarProveeMasMedis(proveeSuminisMasMedis);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorProveMasMedis = document.getElementById("proveedorSumiMasMedic2023Body");

const mostrarProveeMasMedis = (proveeSuminisMasMedis) =>{
    let listar = "";
    proveeSuminisMasMedis.forEach(proveeSuminisMoreMedic =>{
        listar += `
        <tr>
            <th scope="row">${proveeSuminisMoreMedic.id}</th>
            <td>${proveeSuminisMoreMedic.nombre}</td>
            <td>${proveeSuminisMoreMedic.contacto}</td>
        </tr>
        `
    }); 
    contenedorProveMasMedis.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let pacienteCompraronParace2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getpacienteComprarParace2023();
});

const getpacienteComprarParace2023 = ()  =>{
    fetch(`${url}Paciente/compraron--2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        pacienteCompraronParace2023 = data;
        console.log(pacienteCompraronParace2023);
        mostrarmedicNoVenBodyce2023(pacienteCompraronParace2023);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedormedicNoVenBodyce2023 = document.getElementById("medicNoVenBody2023");

const mostrarmedicNoVenBodyce2023 = (pacienteCompraronParace2023) =>{
    let listar = "";
    pacienteCompraronParace2023.forEach(pacienteParacc =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pacienteParacc.id}</h5>
                <p class="card-text">${pacienteParacc.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedormedicNoVenBodyce2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

// let totalMedicvendiXMes = [];

// window.addEventListener("DOMContentLoaded", () =>{
//     getMedisVenXMes();
// });

// const getMedisVenXMes = ()  =>{
//     fetch(`${url}Medicamento/total-medicamentos-vendidosXmes-2023`)
//     .then(respuesta  => respuesta.json())
//     .then(data  => {
//         totalMedicvendiXMes = data;
//         console.log(totalMedicvendiXMes);
//         mostrarMedisVenXMes(totalMedicvendiXMes);
//     })
//     .catch(error =>{
//         alert(error, "Ha ocurrido un problema");
//     });
// };

// const contenedorMedisVenXMes = document.getElementById("medicamentosVenXMes2023");

// const mostrarMedisVenXMes = (totalMedicvendiXMes) =>{
//     let listar = "";
//     totalMedicvendiXMes.forEach(medicamentoVenPorMe =>{
//         listar += `
//         <div class="card divPeti" style="width: 18rem;">
//             <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${medicamentoVenPorMe.Id}</h5>
//                 <p class="card-text">${medicamentoVenPorMe.Nombre}</p>
//             </div>
//         </div>
//         `
//     }); 
//     contenedorMedisVenXMes.innerHTML = listar;
// };

/////////////////////////////////////////////////////////////////

let empleadosMenos5Ven2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleMenos5Vent2023();
});

const getEmpleMenos5Vent2023 = ()  =>{
    fetch(`${url}Empleado/menos-5-ventas-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        empleadosMenos5Ven2023 = data;
        console.log(empleadosMenos5Ven2023);
        mostrarEmpleMenos5Vent2023(empleadosMenos5Ven2023);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorEmpleMenos5Vent2023 = document.getElementById("empleadoMenos5Ventas");

const mostrarEmpleMenos5Vent2023 = (empleadosMenos5Ven2023) =>{
    let listar = "";
    empleadosMenos5Ven2023.forEach(empleadoMenos5Ventt =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/farmac.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${empleadoMenos5Ventt.id}</h5>
                <p class="card-text">${empleadoMenos5Ventt.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorEmpleMenos5Vent2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let totalProveeSumnisMedicamentos = [];

window.addEventListener("DOMContentLoaded", () =>{
    getProveeSumMedis();
});

const getProveeSumMedis = ()  =>{
    fetch(`${url}Proveedor/suministraron-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        totalProveeSumnisMedicamentos = data;
        console.log(totalProveeSumnisMedicamentos);
        mostrarProveeSumMedis(totalProveeSumnisMedicamentos);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorProveeSumMedis = document.getElementById("proveedoresSumiMedic2023");

const mostrarProveeSumMedis = (totalProveeSumnisMedicamentos) =>{
    let listar = "";
    totalProveeSumnisMedicamentos.forEach(proveeSumMedic =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/moviInvent.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${proveeSumMedic.TotalProveedores}</h5>
            </div>
        </div>
        `
    }); 
    contenedorProveeSumMedis.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

// let proveMedicMenos50Stock = [];

// window.addEventListener("DOMContentLoaded", () =>{
//     getProveeMedic50();
// });

// const getProveeMedic50 = ()  =>{
//     fetch(`${url}Empleado/venta`)
//     .then(respuesta  => respuesta.json())
//     .then(data  => {
//         proveMedicMenos50Stock = data;
//         console.log(proveMedicMenos50Stock);
//         mostrarProveeMedic50(proveMedicMenos50Stock);
//     })
//     .catch(error =>{
//         alert(error, "Ha ocurrido un problema");
//     });
// };

// const contenedorProveeMedic50 = document.getElementById("");

// const mostrarProveeMedic50 = (proveMedicMenos50Stock) =>{
//     let listar = "";
//     proveMedicMenos50Stock.forEach(proveeMedicMenos50 =>{
//         listar += `
//         <tr>
//             <th scope="row">${proveeMedicMenos50.Id}</th>
//             <td>${proveeMedicMenos50.Nombre}</td>
//             <td>${proveeMedicMenos50.Contacto}</td>
//         </tr>
//         `
//     }); 
//     contenedorProveeMedic50.innerHTML = listar;
// };

/////////////////////////////////////////////////////////////////

let pacientNoCompraron = [];

window.addEventListener("DOMContentLoaded", () =>{
    getPacientNoCompraMedic();
});

const getPacientNoCompraMedic = ()  =>{
    fetch(`${url}Paciente/no-compraron-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        pacientNoCompraron = data;
        console.log(pacientNoCompraron);
        mostrarPacientNoCompraMedic(pacientNoCompraron);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorPacientNoCompraMedic = document.getElementById("pacienNoCompra2023");

const mostrarPacientNoCompraMedic = (pacientNoCompraron) =>{
    let listar = "";
    pacientNoCompraron.forEach(pacienteSinCom =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/noCompra.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pacienteSinCom.id}</h5>
                <p class="card-text">${pacienteSinCom.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorPacientNoCompraMedic.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medisVendidoXMes = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedisVendidosXMes2023();
});

const getMedisVendidosXMes2023 = ()  =>{
    fetch(`${url}Medicamento/medicamentos-vendidosXmes-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medisVendidoXMes = data;
        console.log(medisVendidoXMes);
        mostrarMedisVendidosXMes2023(medisVendidoXMes);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedisVendidosXMes2023 = document.getElementById("medicamentosVenXMes2023");

const mostrarMedisVendidosXMes2023 = (medisVendidoXMes) =>{
    let listar = "";
    medisVendidoXMes.forEach(medicamentoVenXMes =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoVenXMes.id}</h5>
                <p class="card-text">${medicamentoVenXMes.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedisVendidosXMes2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let empleadoVendidoMayorMedic = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleadoVendi();
});

const getEmpleadoVendi = ()  =>{
    fetch(`${url}Empleado/ventamayorcantidad-medicamentos-distintos`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        empleadoVendidoMayorMedic = data;
        console.log(empleadoVendidoMayorMedic);
        mostrarEmpleadoVendi(empleadoVendidoMayorMedic);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorEmpleadoVendi = document.getElementById("empleVenMedicDistinto2023");

const mostrarEmpleadoVendi = (empleadoVendidoMayorMedic) =>{
    let listar = "";
    empleadoVendidoMayorMedic.forEach(empleadoMayorMedicDisnti =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/moviInvent.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${empleadoMayorMedicDisnti.id}</h5>
                <p class="card-text">${empleadoMayorMedicDisnti.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorEmpleadoVendi.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let totalGastadoXPaci2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getTotalPacientX2023();
});

const getTotalPacientX2023 = ()  =>{
    fetch(`${url}Paciente/total-gastadoXpaciente-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        totalGastadoXPaci2023 = data;
        console.log(totalGastadoXPaci2023);
        mostrarTotalPacientX2023(totalGastadoXPaci2023);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorTotalPacientX2023 = document.getElementById("totalGastXPacientBody");

const mostrarTotalPacientX2023 = (totalGastadoXPaci2023) =>{
    let listar = "";
    totalGastadoXPaci2023.forEach(pacienteTotalGast =>{
        listar += `
        <tr>
            <th scope="row">${pacienteTotalGast.id}</th>
            <td>${pacienteTotalGast.nombre}</td>
            <td>${pacienteTotalGast.totalGastado}</td>
        </tr>
        `
    }); 
    contenedorTotalPacientX2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let mediNoVendido2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicamentosNoVendidos2023();
});

const getMedicamentosNoVendidos2023 = ()  =>{
    fetch(`${url}Medicamento/medicamentos-no-vendidos-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        mediNoVendido2023 = data;
        console.log(mediNoVendido2023);
        mostrarMedicamentosNoVendidos2023(mediNoVendido2023);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicamentosNoVendidos2023 = document.getElementById("medicamentosNoVendidos2023");

const mostrarMedicamentosNoVendidos2023 = (mediNoVendido2023) =>{
    let listar = "";
    mediNoVendido2023.forEach(medicamentoNoVen2023 =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoNoVen2023.id}</h5>
                <p class="card-text">${medicamentoNoVen2023.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicamentosNoVendidos2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let proveeSuminisAlmenos52023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getProveeSumi5Medic2023();
});

const getProveeSumi5Medic2023 = ()  =>{
    fetch(`${url}Proveedor/suministro-almenos-5-medicamentos-diferentes-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        proveeSuminisAlmenos52023 = data;
        console.log(proveeSuminisAlmenos52023);
        mostrarProveeSumi5Medic2023(proveeSuminisAlmenos52023);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorProveeSumi5Medic2023 = document.getElementById("proveeSumiMas5MedicDife20234Body");

const mostrarProveeSumi5Medic2023 = (proveeSuminisAlmenos52023) =>{
    let listar = "";
    proveeSuminisAlmenos52023.forEach(provSuminis5MedicDifere =>{
        listar += `
        <tr>
            <th scope="row">${provSuminis5MedicDifere.id}</th>
            <td>${provSuminis5MedicDifere.nombre}</td>
            <td>${provSuminis5MedicDifere.proveedoresConMedicamentos2023}</td>
        </tr>
        `
    }); 
    contenedorProveeSumi5Medic2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicVenTrimes2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getTotalMedicVen2023();
});

const getTotalMedicVen2023 = ()  =>{
    fetch(`${url}Medicamento/total-medicamentos-vendidos-primer-trimestre-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicVenTrimes2023 = data;
        console.log(medicVenTrimes2023);
        mostrarTotalMedicVen2023(medicVenTrimes2023);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorTotalMedicVen2023 = document.getElementById("medicamentosTotalTrimes2023");

const mostrarTotalMedicVen2023 = (medicVenTrimes2023) =>{
    let listar = "";
    medicVenTrimes2023.forEach(totalMedicTrimestre =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${totalMedicTrimestre.Medicamentos}</h5>
            </div>
        </div>
        `
    }); 
    contenedorTotalMedicVen2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let empleSinVentas2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleadoSinVentas2023();
});

const getEmpleadoSinVentas2023 = ()  =>{
    fetch(`${url}Empleado/sin-ventas-abril-2023`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        empleSinVentas2023 = data;
        console.log(empleSinVentas2023);
        mostrarEmpleadoSinVentas2023(empleSinVentas2023);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorEmpleadoSinVentas2023 = document.getElementById("empleadoSinVentasAbril2023Body");

const mostrarEmpleadoSinVentas2023 = (empleSinVentas2023) =>{
    let listar = "";
    empleSinVentas2023.forEach(empleaSinVentt2023 =>{
        listar += `
        <tr>
            <th scope="row">${empleaSinVentt2023.id}</th>
            <td>${empleaSinVentt2023.nombre}</td>
        </tr>
        `
    }); 
    contenedorEmpleadoSinVentas2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let empleSinVentasEnAbril = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleSinVentasEnAbril();
});

const getEmpleSinVentasEnAbril = ()  =>{
    fetch(`${url}total-medicamentos-vendidosxmes-2023/{mes}`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        empleSinVentasEnAbril = data;
        console.log(empleSinVentasEnAbril);
        mostrarEmpleSinVentasEnAbril(empleSinVentasEnAbril);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorEmpleSinVentasEnAbril = document.getElementById("medicamentosVenPorMes2023Body");

const mostrarEmpleSinVentasEnAbril = (empleSinVentasEnAbril) =>{
    let listar = "";
    empleSinVentasEnAbril.forEach(empleaSinVentEnAbril =>{
        listar += `
        <tr>
            <th scope="row">${empleaSinVentEnAbril.id}</th>
            <td>${empleaSinVentEnAbril.nombre}</td>
        </tr>
        `
    }); 
    contenedorEmpleSinVentasEnAbril.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

let medicPreci50StockMenor100 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicPrecio50Stock100();
});

const getMedicPrecio50Stock100 = ()  =>{
    fetch(`${url}Medicamento/medicamentos-precio-mas-50-stock-menos-100`)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicPreci50StockMenor100 = data;
        console.log(medicPreci50StockMenor100);
        mostrarMedicPrecio50Stock100(medicPreci50StockMenor100);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicPrecio50Stock100 = document.getElementById("medicamentosPre50Stock100");

const mostrarMedicPrecio50Stock100 = (medicPreci50StockMenor100) =>{
    let listar = "";
    medicPreci50StockMenor100.forEach(medicamento500Y100 =>{
        listar += `
        <div class="card divPeti" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamento500Y100.id}</h5>
                <p class="card-text">${medicamento500Y100.nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicPrecio50Stock100.innerHTML = listar;     
};