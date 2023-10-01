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
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamento.Id}</h5>
                <p class="card-text">${medicamento.Nombre}</p>
            </div>
        </div>
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
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoProveeA.Nombre}</h5>
            </div>
        </div>
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
    medicamentoParacetamol.foreach(medicamentoParacet =>{                                           
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/parace.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">El total de ventas de paracetamol es:</h5>
                <h5 class="card-title">${medicamentoParacet.unidadesVendidas}</h5>
            </div>
        </div>
        `
    }); 
    contenedorMedicamentoParace.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlReceta = "http://localhost:5297/api/Receta/GetRecetas2023";
let recetas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getRecetas();
});

const getRecetas = ()  =>{                                                               
    fetch(urlReceta)
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

const contenedorRecetas = document.getElementById("");

const mostrarRecetas = (recetas) =>{
    let listar = "";
    recetas.foreach(receta =>{
        listar += `
        <tr>
            <th scope="row">${receta.Id}</th>
            <td>${receta.IdPacienteFk}</td>
            <td>${receta.MedicamentoRemitente}</td>
            <td>${receta.Descripcion}</td>
        </tr>
        `
    }); 
    contenedorRecetas.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlCaducan2024 = "http://localhost:5297/api/Medicamentos/GetCadu2024";
let medisCadu2024 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMediCadu2024();
});

const getMediCadu2024 = ()  =>{
    fetch(urlCaducan2024)
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

const contenedorMedisCadu2024 = document.getElementById("");

const mostrarCadu2024 = (medisCadu2024) =>{
    let listar = "";
    medisCadu2024.foreach(medicamentoCadu2024 =>{
        listar += `
        <tr>
            <th scope="row">${medicamentoCadu2024.Id}</th>
            <td>${medicamentoCadu2024.Nombre}</td>
            <td>${medicamentoCadu2024.Precio}</td>
            <td>${medicamentoCadu2024.FechaExpiracion}</td>
            <td>${medicamentoCadu2024.IdProveedorFk}</td>
        </tr>
        `
    }); 
    contenedorMedisCadu2024.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlMedicVenXProvee = "http://localhost:5297/api/MovimientoInventario/GetTotalMedisVendi";
let medicXProvee = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicVenXProvee();
});

const getMedicVenXProvee = ()  =>{
    fetch(urlMedicVenXProvee)
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

const contenedorMedicXProvee = document.getElementById("");

const mostrarMedicXProvee = (medicXProvee) =>{
    let listar = "";
    medicXProvee.foreach(totalMedicXProve =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${totalMedicXProve.Id}</h5>
                <p class="card-title">${totalMedicXProve.Nombre}</p>
                <p class="card-text">${totalMedicXProve.Precio}</p>
                <p class="card-text">${totalMedicXProve.IdProveedorFk}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicXProvee.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlDineroXVenta = "http://localhost:5297/api/MovimientoInventario/GetTotalRecaudado";
let recaudadoXVenta = [];

window.addEventListener("DOMContentLoaded", () =>{
    getTotalRecaudado();
});

const getTotalRecaudado = ()  =>{
    fetch(urlDineroXVenta)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        recaudadoXVenta = data;
        console.log(recaudadoXVenta);
        mostrarTotalRecaudado(recaudadoXVenta);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorTotalRecaudado = document.getElementById("");

const mostrarTotalRecaudado = (recaudadoXVenta) =>{
    let listar = "";
    recaudadoXVenta.foreach(totalRecaudado =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">El dinero total recaudado por las ventas de los medicamentos es: ${totalRecaudado.totalVentas}</h5>
            </div>
        </div>
        `
    }); 
    contenedorTotalRecaudado.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlMedisNoVendi = "http://localhost:5297/api/MovimientoInventario/GetMediNoVendidos";
let medisNoVendidos = [];

window.addEventListener("DOMContentLoaded", () =>{
    getNoVendidos();
});

const getNoVendidos = ()  =>{
    fetch(urlMedisNoVendi)
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

const contenedorNoVendidos = document.getElementById("");

const mostrarMedicNoVendi = (medisNoVendidos) =>{
    let listar = "";
    medisNoVendidos.foreach(medicamentoNoVend =>{
        listar += `
        <tr>
            <th scope="row">${medicamentoNoVend.Id}</th>
            <td>${medicamentoNoVend.Nombre}</td>
            <td>${medicamentoNoVend.Precio}</td>
        </tr>
        `
    }); 
    contenedorNoVendidos.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlMedicCaro = "http://localhost:5297/api/Medicamento/GetMediCaro";
let medicCaro = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMasCaro();
});

const getMasCaro = ()  =>{
    fetch(urlMedicCaro)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicCaro = data;
        console.log(medicCaro);
        mostrarMasCaro(medicCaro);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMasCaro = document.getElementById("");

const mostrarMasCaro = (medicCaro) =>{
    let listar = "";
    medicCaro.foreach(medicamentoMoreCaro =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoMoreCaro.Id}</h5>
                <p class="card-text">${medicamento.Nombre}</p>
                <p class="card-text">${medicamento.Precio}</p>
            </div>
        </div>
        `
    }); 
    contenedorMasCaro.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlMedicXProvee = "http://localhost:5297/api/Proveedor/GetMedisXProve";
let medicamentoXProvee = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicXProvee();
});

const getMedicXProvee = ()  =>{
    fetch(urlMedicXProvee)
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

const contenedorMedicaXProvee = document.getElementById("");

const mostrarMedicaXProvee = (medicamentoXProvee) =>{
    let listar = "";
    medicamentoXProvee.foreach(medicamentoXProv =>{
        listar += `
        <tr>
            <th scope="row">${medicamentoXProv.Id}</th>
            <td>${medicamentoXProv.Nombre}</td>
            <td>${medicamentoXProv.Precio}</td>
            <td>${medicamentoXProv.IdProveedorFk}</td>
        </tr>
        `
    }); 
    contenedorMedicaXProvee.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlPacienParaceta = "http://localhost:5297/api/MovimientoInventario/GetPacienComParace";
let pacienteCompraParace = [];

window.addEventListener("DOMContentLoaded", () =>{
    getPacientePara();
});

const getPacientePara = ()  =>{
    fetch(urlPacienParaceta)
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

const contenedorPacientePara = document.getElementById("");

const mostrarPacientePara = (pacienteCompraParace) =>{
    let listar = "";
    pacienteCompraParace.foreach(pacientComprParace =>{
        listar += `
        <tr>
            <th scope="row">${pacientComprParace.Id}</th>
            <td>${pacientComprParace.Nombre}</td>
        </tr>
        `
    }); 
    contenedorPacientePara.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlProveeNoVentas = "http://localhost:5297/api/Proveedor/GetProveeNoVenMedis";
let proveeNoVentas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getNoventasProvee();
});

const getNoventasProvee = ()  =>{
    fetch(urlProveeNoVentas)
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

const contenedorProveeNoVentas = document.getElementById("");

const mostrarNoVentaProvee = (proveeNoVentas) =>{
    let listar = "";
    proveeNoVentas.foreach(proveeNoVenMediLastYear =>{
        listar += `
        <tr>
            <th scope="row">${proveeNoVenMediLastYear.Id}</th>
            <td>${proveeNoVenMediLastYear.Nombre}</td>
            <td>${proveeNoVenMediLastYear.Contacto}</td>
        </tr>
        `
    }); 
    contenedorProveeNoVentas.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlMedicMarzo = "http://localhost:5297/api/Medicamento/GetMedisVendMarzo";
let medicamentosMarzo = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicamentoMarzo();
});

const getMedicamentoMarzo = ()  =>{
    fetch(urlMedicMarzo)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        medicamentosMarzo = data;
        console.log(medicamentosMarzo);
        mostrarMedicMarzo(medicamentosMarzo);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedicMarzo = document.getElementById("");

const mostrarMedicMarzo = (medicamentosMarzo) =>{
    let listar = "";
    medicamentosMarzo.foreach(totalMedicamentoMarzo =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${totalMedicamentoMarzo.totalMedicamentosVendidos}</h5>
            </div>
        </div>
        `
    }); 
    contenedorMedicMarzo.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlMedicMenosVen = "http://localhost:5297/api/Medicamento/GetMediMenosVe2023";
let medicMenosVendido = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMediMenosVen2023();
});

const getMediMenosVen2023 = ()  =>{
    fetch(urlMedicMenosVen)
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

const contenedorMedicMenosVen = document.getElementById("");

const mostrarMedicMenosven = (medicMenosVendido) =>{
    let listar = "";
    medicMenosVendido.foreach(medicamentoMenosVen =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoMenosVen.Id}</h5>
                <p class="card-text">${medicamentoMenosVen.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicMenosVen.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlGananciaXProvee = "http://localhost:5297/api/Proveedor/GetGananTotalProvee";
let gananciaXProvee = [];

window.addEventListener("DOMContentLoaded", () =>{
    getProveeGanancia();
});

const getProveeGanancia = ()  =>{
    fetch(urlGananciaXProvee)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        gananciaXProvee = data;
        console.log(gananciaXProvee);
        mostrarGananciaProvee(gananciaXProvee);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorGananciaProvee = document.getElementById("");

const mostrarGananciaProvee = (gananciaXProvee) =>{
    let listar = "";
    gananciaXProvee.foreach(proveeGananciaTotal =>{
        listar += `
        <tr>
            <th scope="row">${proveeGananciaTotal.Id}</th>
            <td>${proveeGananciaTotal.Nombre}</td>
            <td>${proveeGananciaTotal.Contacto}</td>
            <td>${proveeGananciaTotal.gananciaXProvee}</td>
        </tr>
        `
    }); 
    contenedorGananciaProvee.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const urlPromMediVenta = "http://localhost:5297/api/MovimientoInventario/GetPromMedis";
let promMedisVentas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getPromMedis();
});

const getPromMedis = ()  =>{
    fetch(urlPromMediVenta)
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

const contenedorPromMedis = document.getElementById("");

const mostrarPromMedisVenta = (promMedisVentas) =>{
    let listar = "";
    promMedisVentas.foreach(promedioMedicamento =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${promedioMedicamento.Id}</h5>
                <p class="card-text">${promedioMedicamento.Nombre}</p>
                <p class="card-text">${promedioMedicamento.Precio}</p>
                <p class="card-text">${promedioMedicamento.promedio}</p>
            </div>
        </div>
        `
    }); 
    contenedorPromMedis.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const cantVenEmpleado2023 = "http://localhost:5297/api/Empleado/CantVentaEmple";
let ventasEmple2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getVentaEmple2023();
});

const getVentaEmple2023 = ()  =>{
    fetch(cantVenEmpleado2023)
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

const contenedorVentaEmple = document.getElementById("");

const mostrarVentaEmpleados2023 = (ventasEmple2023) =>{
    let listar = "";
    ventasEmple2023.foreach(ventaXEmple =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${ventaXEmple.Id}</h5>
                <p class="card-text">${ventaXEmple.Nombre}</p>
                <p class="card-text">${ventaXEmple.cantVentasPorEmpleado}</p>
            </div>
        </div>
        `
    }); 
    contenedorVentaEmple.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const medicExpira2024 = "http://localhost:5297/api/Medicamento/Get2024Expi";
let medicamentosExpiran2024 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedisExpi2024();
});

const getMedisExpi2024 = ()  =>{
    fetch(medicExpira2024)
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

const contenedoMedicExp2024 = document.getElementById("");

const mostraMedicExpira2024 = (medicamentosExpiran2024) =>{
    let listar = "";
    medicamentosExpiran2024.foreach(medicamento2024Expira =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamento2024Expira.Id}</h5>
                <p class="card-text">${medicamento2024Expira.Nombre}</p>
                <p class="card-text">${medicamento2024Expira.Precio}</p>
                <p class="card-text">${medicamento2024Expira.FechaExpiracion}</p>
            </div>
        </div>
        `
    }); 
    contenedoMedicExp2024.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const empleMas5Ventas = "http://localhost:5297/api/Empleado/mas-5-ventas";
let empleadosMas5Ventas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleMas5Vent();
});

const getEmpleMas5Vent = ()  =>{
    fetch(empleMas5Ventas)
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

const contenedorEmpleMas5Ventas = document.getElementById("");

const mostraEmpleMas5ventas = (empleadosMas5Ventas) =>{
    let listar = "";
    empleadosMas5Ventas.foreach(empleMas5Ven =>{
        listar += `
        <tr>
            <th scope="row">${empleMas5Ven.Id}</th>
            <td>${empleMas5Ven.Nombre}</td>
        </tr>
        `
    }); 
    contenedorEmpleMas5Ventas.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const medicNuncaVen = "http://localhost:5297/api/Medicamento/nunca-vendido";
let medicamentosNuncaVendidos = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedisNuncaVen();
});

const getMedisNuncaVen = ()  =>{
    fetch(medicNuncaVen)
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

const contenedorMedicNuncaVendi = document.getElementById("");

const mostraMedicNuncaVent = (medicamentosNuncaVendidos) =>{
    let listar = "";
    medicamentosNuncaVendidos.foreach(medicamentoNeverVendi =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoNeverVendi.Id}</h5>
                <p class="card-text">${medicamentoNeverVendi.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicNuncaVendi.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const pacieGastadoMasdinero = "http://localhost:5297/api/Paciente/gastado-mas-dinero-2023";
let pacienteMasDineroGasta = [];

window.addEventListener("DOMContentLoaded", () =>{
    getPaciente();
});

const getPaciente = ()  =>{
    fetch(pacieGastadoMasdinero)
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

const contenedorMasDineroGasta = document.getElementById("");

const mostraPacienMasDinero = (pacienteMasDineroGasta) =>{
    let listar = "";
    pacienteMasDineroGasta.foreach(pacienteMasDinero =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pacienteMasDinero.Id}</h5>
                <p class="card-text">${medicamento.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMasDineroGasta.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const empleSinVentas = "http://localhost:5297/api/Empleado/sin-ventas-2023";
let empleadosSinVentas = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleadosSinVentas();
});

const getEmpleadosSinVentas = ()  =>{
    fetch(empleSinVentas)
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

const contenedorEmpleSinVentas = document.getElementById("");

const mostrarEmpleadosSinVentas = (empleadosSinVentas) =>{
    let listar = "";
    empleadosSinVentas.foreach(empleadoSinVentt =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${empleadoSinVentt.Id}</h5>
                <p class="card-text">${empleadoSinVentt.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorEmpleSinVentas.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const proveedorMasMedis = "http://localhost:5297/api/Proveedor/suministro-mas-medicamentos-2023";
let proveeSuminisMasMedis = [];

window.addEventListener("DOMContentLoaded", () =>{
    getproveeSuminisMasMedis();
});

const getproveeSuminisMasMedis = ()  =>{
    fetch(proveedorMasMedis)
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

const contenedorProveMasMedis = document.getElementById("");

const mostrarProveeMasMedis = (proveeSuminisMasMedis) =>{
    let listar = "";
    proveeSuminisMasMedis.foreach(proveeSuminisMoreMedic =>{
        listar += `
        <tr>
            <th scope="row">${proveeSuminisMoreMedic.Id}</th>
            <td>${proveeSuminisMoreMedic.Nombre}</td>
            <td>${proveeSuminisMoreMedic.Contacto}</td>
        </tr>
        `
    }); 
    contenedorProveMasMedis.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const pacienteComParace2023 = "http://localhost:5297/api/Paciente/compraron-paracetamol-2023";
let pacienteCompraronParace2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getpacienteComprarParace2023();
});

const getpacienteComprarParace2023 = ()  =>{
    fetch(pacienteComParace2023)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        pacienteCompraronParace2023 = data;
        console.log(pacienteCompraronParace2023);
        mostrarpacienCompraParace2023(pacienteCompraronParace2023);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorpacienCompraParace2023 = document.getElementById("");

const mostrarpacienCompraParace2023 = (pacienteCompraronParace2023) =>{
    let listar = "";
    pacienteCompraronParace2023.foreach(pacienteParacc =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pacienteParacc.Id}</h5>
                <p class="card-text">${pacienteParacc.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorpacienCompraParace2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const totalMedisXMes = "http://localhost:5297/api/Medicamento/total-medicamentos-vendidosXmes-2023";
let totalMedicvendiXMes = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedisVenXMes();
});

const getMedisVenXMes = ()  =>{
    fetch(totalMedisXMes)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        totalMedicvendiXMes = data;
        console.log(totalMedicvendiXMes);
        mostrarMedisVenXMes(totalMedicvendiXMes);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorMedisVenXMes = document.getElementById("");

const mostrarMedisVenXMes = (totalMedicvendiXMes) =>{
    let listar = "";
    totalMedicvendiXMes.foreach(medicamentoVenPorMe =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoVenPorMe.Id}</h5>
                <p class="card-text">${medicamentoVenPorMe.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedisVenXMes.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const empleadoMenos5Ventas = "http://localhost:5297/api/Empleado/menos-5-ventas-2023";
let empleadosMenos5Ven2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleMenos5Vent2023();
});

const getEmpleMenos5Vent2023 = ()  =>{
    fetch(empleadoMenos5Ventas)
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

const contenedorEmpleMenos5Vent2023 = document.getElementById("");

const mostrarEmpleMenos5Vent2023 = (empleadosMenos5Ven2023) =>{
    let listar = "";
    empleadosMenos5Ven2023.foreach(empleadoMenos5Ventt =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${empleadoMenos5Ventt.Id}</h5>
                <p class="card-text">${empleadoMenos5Ventt.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorEmpleMenos5Vent2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const proveedoresTotalMedis = "http://localhost:5297/api/Proveedor/suministraron-2023";
let totalProveeSumnisMedicamentos = [];

window.addEventListener("DOMContentLoaded", () =>{
    getProveeSumMedis();
});

const getProveeSumMedis = ()  =>{
    fetch(proveedoresTotalMedis)
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

const contenedorProveeSumMedis = document.getElementById("");

const mostrarProveeSumMedis = (totalProveeSumnisMedicamentos) =>{
    let listar = "";
    totalProveeSumnisMedicamentos.foreach(proveeSumMedic =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${proveeSumMedic.TotalProveedores}</h5>
            </div>
        </div>
        `
    }); 
    contenedorProveeSumMedis.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const proveeMenos50Stock = "http://localhost:5297/api/Proveedor/medicamentos-menos-50-stock";
let proveMedicMenos50Stock = [];

window.addEventListener("DOMContentLoaded", () =>{
    getProveeMedic50();
});

const getProveeMedic50 = ()  =>{
    fetch(proveeMenos50Stock)
    .then(respuesta  => respuesta.json())
    .then(data  => {
        proveMedicMenos50Stock = data;
        console.log(proveMedicMenos50Stock);
        mostrarProveeMedic50(proveMedicMenos50Stock);
    })
    .catch(error =>{
        alert(error, "Ha ocurrido un problema");
    });
};

const contenedorProveeMedic50 = document.getElementById("");

const mostrarProveeMedic50 = (proveMedicMenos50Stock) =>{
    let listar = "";
    proveMedicMenos50Stock.foreach(proveeMedicMenos50 =>{
        listar += `
        <tr>
            <th scope="row">${proveeMedicMenos50.Id}</th>
            <td>${proveeMedicMenos50.Nombre}</td>
            <td>${proveeMedicMenos50.Contacto}</td>
        </tr>
        `
    }); 
    contenedorProveeMedic50.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const pacientNoCompraronMedis = "http://localhost:5297/api/Paciente/no-compraron-2023";
let pacientNoCompraron = [];

window.addEventListener("DOMContentLoaded", () =>{
    getPacientNoCompraMedic();
});

const getPacientNoCompraMedic = ()  =>{
    fetch(pacientNoCompraronMedis)
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

const contenedorPacientNoCompraMedic = document.getElementById("");

const mostrarPacientNoCompraMedic = (pacientNoCompraron) =>{
    let listar = "";
    pacientNoCompraron.foreach(pacienteSinCom =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pacienteSinCom.Id}</h5>
                <p class="card-text">${pacienteSinCom.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorPacientNoCompraMedic.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const medisVendiXMes2023 = "http://localhost:5297/api/Medicamento/medicamentos-vendidosXmes-2023";
let medisVendidoXMes = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedisVendidosXMes2023();
});

const getMedisVendidosXMes2023 = ()  =>{
    fetch(medisVendiXMes2023)
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

const contenedorMedisVendidosXMes2023 = document.getElementById("");

const mostrarMedisVendidosXMes2023 = (medisVendidoXMes) =>{
    let listar = "";
    medisVendidoXMes.foreach(medicamentoVenXMes =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoVenXMes.Id}</h5>
                <p class="card-text">${medicamentoVenXMes.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedisVendidosXMes2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const empleadoMayorVentDistin = "http://localhost:5297/api/Empleado/venta/mayorcantidad-medicamentos-distintos";
let empleadoVendidoMayorMedic = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleadoVendi();
});

const getEmpleadoVendi = ()  =>{
    fetch(empleadoMayorVentDistin)
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

const contenedorEmpleadoVendi = document.getElementById("");

const mostrarEmpleadoVendi = (empleadoVendidoMayorMedic) =>{
    let listar = "";
    empleadoVendidoMayorMedic.foreach(empleadoMayorMedicDisnti =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${empleadoMayorMedicDisnti.Id}</h5>
                <p class="card-text">${empleadoMayorMedicDisnti.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorEmpleadoVendi.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const pacienteTotalGastado = "http://localhost:5297/api/Paciente/total-gastadoXpaciente-2023";
let totalGastadoXPaci2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getTotalPacientX2023();
});

const getTotalPacientX2023 = ()  =>{
    fetch(pacienteTotalGastado)
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

const contenedorTotalPacientX2023 = document.getElementById("");

const mostrarTotalPacientX2023 = (totalGastadoXPaci2023) =>{
    let listar = "";
    totalGastadoXPaci2023.foreach(pacienteTotalGast =>{
        listar += `
        <tr>
            <th scope="row">${pacienteTotalGast.Id}</th>
            <td>${pacienteTotalGast.Nombre}</td>
            <td>${pacienteTotalGast.TotalGastado}</td>
        </tr>
        `
    }); 
    contenedorTotalPacientX2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const medicamentoNoVendi2023 = "http://localhost:5297/api/Medicamento/medicamentos-no-vendidos-2023";
let mediNoVendido2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicamentosNoVendidos2023();
});

const getMedicamentosNoVendidos2023 = ()  =>{
    fetch(medicamentoNoVendi2023)
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

const contenedorMedicamentosNoVendidos2023 = document.getElementById("");

const mostrarMedicamentosNoVendidos2023 = (mediNoVendido2023) =>{
    let listar = "";
    mediNoVendido2023.foreach(medicamentoNoVen2023 =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamentoNoVen2023.Id}</h5>
                <p class="card-text">${medicamentoNoVen2023.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicamentosNoVendidos2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const proveeSumi5Medic2023 = "http://localhost:5297/api/Proveedor/suministro-almenos-5-medicamentos-diferentes-2023";
let proveeSuminisAlmenos52023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getProveeSumi5Medic2023();
});

const getProveeSumi5Medic2023 = ()  =>{
    fetch(proveeSumi5Medic2023)
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

const contenedorProveeSumi5Medic2023 = document.getElementById("");

const mostrarProveeSumi5Medic2023 = (proveeSuminisAlmenos52023) =>{
    let listar = "";
    proveeSuminisAlmenos52023.foreach(provSuminis5MedicDifere =>{
        listar += `
        <tr>
            <th scope="row">${provSuminis5MedicDifere.Id}</th>
            <td>${provSuminis5MedicDifere.Nombre}</td>
            <td>${provSuminis5MedicDifere.proveedoresConMedicamentos2023}</td>
        </tr>
        `
    }); 
    contenedorProveeSumi5Medic2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const totalMedisTrimesVen2023 = "http://localhost:5297/api/Medicamento/total-medicamentos-vendidos-primer-trimestre-2023";
let medicVenTrimes2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getTotalMedicVen2023();
});

const getTotalMedicVen2023 = ()  =>{
    fetch(totalMedisTrimesVen2023)
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

const contenedorTotalMedicVen2023 = document.getElementById("");

const mostrarTotalMedicVen2023 = (medicVenTrimes2023) =>{
    let listar = "";
    medicVenTrimes2023.foreach(totalMedicTrimestre =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${totalMedicTrimestre.Medicamentos}</h5>
            </div>
        </div>
        `
    }); 
    contenedorTotalMedicVen2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const empleadoSinVentas2023 = "http://localhost:5297/api/Empleado/sin-ventas-abril-2023";
let empleSinVentas2023 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleadoSinVentas2023();
});

const getEmpleadoSinVentas2023 = ()  =>{
    fetch(empleadoSinVentas2023)
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

const contenedorEmpleadoSinVentas2023 = document.getElementById("");

const mostrarEmpleadoSinVentas2023 = (empleSinVentas2023) =>{
    let listar = "";
    empleSinVentas2023.foreach(empleaSinVentt2023 =>{
        listar += `
        <tr>
            <th scope="row">${empleaSinVentt2023.Id}</th>
            <td>${empleaSinVentt2023.Nombre}</td>
        </tr>
        `
    }); 
    contenedorEmpleadoSinVentas2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const empleSinVentaAbri = "http://localhost:5297/api/Emplado/sin-ventas-abril-2023";
let empleSinVentasEnAbril = [];

window.addEventListener("DOMContentLoaded", () =>{
    getEmpleSinVentasEnAbril();
});

const getEmpleSinVentasEnAbril = ()  =>{
    fetch(empleSinVentaAbri)
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

const contenedorEmpleSinVentasEnAbril = document.getElementById("");

const mostrarEmpleSinVentasEnAbril = (empleSinVentasEnAbril) =>{
    let listar = "";
    empleSinVentasEnAbril.foreach(empleaSinVentEnAbril =>{
        listar += `
        <tr>
            <th scope="row">${empleaSinVentEnAbril.Id}</th>
            <td>${empleaSinVentt2023.Nombre}</td>
        </tr>
        `
    }); 
    contenedorEmpleSinVentasEnAbril.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////

const medicMayor50Menor100 = "http://localhost:5297/api/Medicamento/medicamentos-precio-mas-50-stock-menos-100";
let medicPreci50StockMenor100 = [];

window.addEventListener("DOMContentLoaded", () =>{
    getMedicPrecio50Stock100();
});

const getMedicPrecio50Stock100 = ()  =>{
    fetch(medicMayor50Menor100)
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

const contenedorMedicPrecio50Stock100 = document.getElementById("");

const mostrarMedicPrecio50Stock100 = (medicPreci50StockMenor100) =>{
    let listar = "";
    medicPreci50StockMenor100.foreach(medicamento500Y100 =>{
        listar += `
        <div class="card" style="width: 18rem;">
            <img src="./img/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${medicamento500Y100.Id}</h5>
                <p class="card-text">${medicamento500Y100.Nombre}</p>
            </div>
        </div>
        `
    }); 
    contenedorMedicPrecio50Stock100.innerHTML = listar;
};