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
                <h5 class="card-title">${medicamento.Nombre}</h5>
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
    recetas.foreach(medicamento =>{
        listar += `
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
    medisCadu2024.foreach(medicamento =>{
        listar += `
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
    medicXProvee.foreach(medicamento =>{
        listar += `
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
    recaudadoXVenta.foreach(medicamento =>{
        listar += `
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
    medisNoVendidos.foreach(medicamento =>{
        listar += `
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
    medicCaro.foreach(medicamento =>{
        listar += `
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
    medicamentoXProvee.foreach(medicamento =>{
        listar += `
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
    pacienteCompraParace.foreach(medicamento =>{
        listar += `
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
    proveeNoVentas.foreach(medicamento =>{
        listar += `
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
    medicamentosMarzo.foreach(medicamento =>{
        listar += `
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
    medicMenosVendido.foreach(medicamento =>{
        listar += `
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
    gananciaXProvee.foreach(medicamento =>{
        listar += `
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
    promMedisVentas.foreach(medicamento =>{
        listar += `
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
    ventasEmple2023.foreach(medicamento =>{
        listar += `
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
    medicamentosExpiran2024.foreach(medicamento =>{
        listar += `
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
    empleadosMas5Ventas.foreach(medicamento =>{
        listar += `
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
    medicamentosNuncaVendidos.foreach(medicamento =>{
        listar += `
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
    pacienteMasDineroGasta.foreach(medicamento =>{
        listar += `
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
    empleadosSinVentas.foreach(medicamento =>{
        listar += `
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
    proveeSuminisMasMedis.foreach(medicamento =>{
        listar += `
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
    pacienteCompraronParace2023.foreach(medicamento =>{
        listar += `
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
    totalMedicvendiXMes.foreach(medicamento =>{
        listar += `
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
    empleadosMenos5Ven2023.foreach(medicamento =>{
        listar += `
        `
    }); 
    contenedorEmpleMenos5Vent2023.innerHTML = listar;
};

/////////////////////////////////////////////////////////////////