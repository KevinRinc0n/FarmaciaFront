var cartas = document.getElementById("cards");
var ocultarMain = document.getElementById("main");
var medisCompras = document.getElementById("mediCompras");
var pacienCompras = document.getElementById("pacienCompras");
var medisVentas = document.getElementById("mediVentas");
var empleeVentas = document.getElementById("empleeVentas");
var proveeVentas = document.getElementById("proveeVentas");
var proveeListar = document.getElementById("proveeListar");
var pacienteListar = document.getElementById("pacienteListar");
var recetaListar = document.getElementById("recetaListar");
var agregaMedi = document.getElementById("agregaMedi");
var agregaProvee = document.getElementById("agregaProvee");
var agregaPaciente = document.getElementById("agregaPaciente");


var medis = document.getElementById("listarMedis");
medis.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    recetaListar.style.display = "none";
    pacienteListar.style.display = "none";
    proveeListar.style.display = "none";
    proveeVentas.style.display = "none";
    empleeVentas.style.display = "none";
    medisVentas.style.display = "none"
    pacienCompras.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "flex";
    cartas.style.alignItems = "center";
    cartas.style.justifyContent = "center";
    cartas.style.flexWrap = "wrap";
    cartas.style.gap = "5%";
    cartas.style.marginTop = "6%";
});

var medicamentoComprado = document.getElementById("litMedisCompras");
medicamentoComprado.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    recetaListar.style.display = "none";
    pacienteListar.style.display = "none";
    proveeListar.style.display = "none";
    proveeVentas.style.display = "none";
    empleeVentas.style.display = "none";
    medisVentas.style.display = "none"
    pacienCompras.style.display = "none";
    cartas.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "flex";
    medisCompras.style.alignItems = "center";
    medisCompras.style.justifyContent = "center";
    medisCompras.style.flexWrap = "wrap";
    medisCompras.style.gap = "5%";
    medisCompras.style.marginTop = "6%";
    medisCompras.style.height = "100vh";
});

var pacienteCompra = document.getElementById("listPacienCompras");
pacienteCompra.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    recetaListar.style.display = "none";
    pacienteListar.style.display = "none";
    proveeListar.style.display = "none";
    proveeVentas.style.display = "none";
    empleeVentas.style.display = "none";
    medisVentas.style.display = "none"
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "flex";
    pacienCompras.style.alignItems = "center";
    pacienCompras.style.justifyContent = "center";
    pacienCompras.style.flexWrap = "wrap";
    pacienCompras.style.gap = "5%";
    pacienCompras.style.marginTop = "6%";
});

var medisVenta = document.getElementById("listMedisVentas");
medisVenta.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    recetaListar.style.display = "none";
    pacienteListar.style.display = "none";
    proveeListar.style.display = "none";
    proveeVentas.style.display = "none";
    empleeVentas.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "none";
    medisVentas.style.display = "flex";
    medisVentas.style.alignItems = "center";
    medisVentas.style.justifyContent = "center";
    medisVentas.style.flexWrap = "wrap";
    medisVentas.style.gap = "5%";
    medisVentas.style.marginTop = "6%";
});

var empleVentas = document.getElementById("listEmpleVentas");
empleVentas.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    recetaListar.style.display = "none";
    pacienteListar.style.display = "none";
    proveeListar.style.display = "none";
    proveeVentas.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "none";
    medisVentas.style.display = "none";
    empleeVentas.style.display = "flex";
    empleeVentas.style.alignItems = "center";
    empleeVentas.style.justifyContent = "center";
    empleeVentas.style.flexWrap = "wrap";
    empleeVentas.style.gap = "5%";
    empleeVentas.style.marginTop = "6%";
});

var listProvedoVenta = document.getElementById("listProveeVentas");
listProvedoVenta.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    recetaListar.style.display = "none";
    pacienteListar.style.display = "none";
    proveeListar.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "none";
    medisVentas.style.display = "none";
    empleeVentas.style.display = "none";
    proveeVentas.style.display = "flex";
    proveeVentas.style.alignItems = "center";
    proveeVentas.style.justifyContent = "center";
    proveeVentas.style.flexWrap = "wrap";
    proveeVentas.style.gap = "5%";
    proveeVentas.style.marginTop = "6%";
});

var proveeList = document.getElementById("listarProvee");
proveeList.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    recetaListar.style.display = "none";
    pacienteListar.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "none";
    medisVentas.style.display = "none";
    empleeVentas.style.display = "none";
    proveeVentas.style.display = "none";
    proveeListar.style.display = "flex";
    proveeListar.style.alignItems = "center";
    proveeListar.style.justifyContent = "center";
    proveeListar.style.flexWrap = "wrap";
    proveeListar.style.gap = "5%";
    proveeListar.style.marginTop = "6%";
});

var pacientList = document.getElementById("listarPaciente");
pacientList.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    recetaListar.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "none";
    medisVentas.style.display = "none";
    empleeVentas.style.display = "none";
    proveeVentas.style.display = "none";
    proveeListar.style.display = "none";
    pacienteListar.style.display = "flex";
    pacienteListar.style.alignItems = "center";
    pacienteListar.style.justifyContent = "center";
    pacienteListar.style.flexWrap = "wrap";
    pacienteListar.style.gap = "5%";
    pacienteListar.style.marginTop = "6%";
});

var recetaList = document.getElementById("listarReceta");
recetaList.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "none";
    medisVentas.style.display = "none";
    empleeVentas.style.display = "none";
    proveeVentas.style.display = "none";
    proveeListar.style.display = "none";
    pacienteListar.style.display = "none";
    recetaListar.style.display = "flex";
    recetaListar.style.alignItems = "center";
    recetaListar.style.justifyContent = "center";
    recetaListar.style.flexWrap = "wrap";
    recetaListar.style.gap = "5%";
    recetaListar.style.marginTop = "6%";
});

var aggMedica = document.getElementById("aggMedica");
aggMedica.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "none";
    medisVentas.style.display = "none";
    empleeVentas.style.display = "none";
    proveeVentas.style.display = "none";
    proveeListar.style.display = "none";
    pacienteListar.style.display = "none";
    recetaListar.style.display = "none";
    agregaMedi.style.display = "flex";
    agregaMedi.style.alignItems = "center";
    agregaMedi.style.justifyContent = "center";
    agregaMedi.style.flexWrap = "wrap";
    agregaMedi.style.gap = "5%";
    agregaMedi.style.marginTop = "6%";
});

var aggProvee = document.getElementById("aggProvee");
aggProvee.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    agregaPaciente.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "none";
    medisVentas.style.display = "none";
    empleeVentas.style.display = "none";
    proveeVentas.style.display = "none";
    proveeListar.style.display = "none";
    pacienteListar.style.display = "none";
    recetaListar.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "flex";
    agregaProvee.style.alignItems = "center";
    agregaProvee.style.justifyContent = "center";
    agregaProvee.style.flexWrap = "wrap";
    agregaProvee.style.gap = "5%";
    agregaProvee.style.marginTop = "6%";
});

var aggPacient = document.getElementById("aggPacient");
aggPacient.addEventListener("click", function(){
    pacienCompraPara = "none";
    pacienCompraPara2023 = "none";
    medicamenNoVendido = "none";
    medicamenExpi2024 = "none";
    pacienNoCompra2023 = "none";
    medicamentosTotaParace = "none";
    medicamentosVenMazo2023 = "none";
    medicamentosMenosVen2023 = "none";
    medicamentosPromeXVen = "none";
    medicamentosNoVendidos = "none";
    medicamentosVenXMes2023 = "none";
    medicamentosVenPorMes2023 = "none";
    medicamentosNoVendidos2023 = "none";
    medicamentosTotalTrimes2023 = "none";
    ventaXEmpleado = "none";
    empleadoMas5Ventas = "none";
    empleadoSinVentas2023 = "none";
    empleadoMenos5Ventas = "none";
    empleVenMedicDistinto2023 = "none";
    empleadoSinVentasAbril2023 = "none";
    totalMedisVenXProveedor = "none";
    proveeNoVenMedicUltiAño = "none";
    proveedorSumiMasMedic2023 = "none";
    proveedoresSumiMedic2023 = "none";
    proveeSumiMas5MedicDife2023 = "none";
    medicamentosMenos50Stock = "none";
    medicamentosVencenAntes2024 = "none";
    totalRecaudadoXVenMedic = "none";
    medicamentoMasCaro = "none";
    medicamentosPre50Stock100 = "none";
    proveeInfoContacto = "none";
    cantMedicXProvee = "none";
    ganaciaXProvee2023 = "none";
    proveeMenos50Medic = "none";
    pacienteMasDinero2023 = "none";
    totalGastXPacientrecetasDespues2023 = "none";
    comProveA.style.display = "none";
    ocultarMain.style.display = "none";
    medisCompras.style.display = "none";
    cartas.style.display = "none";
    pacienCompras.style.display = "none";
    medisVentas.style.display = "none";
    empleeVentas.style.display = "none";
    proveeVentas.style.display = "none";
    proveeListar.style.display = "none";
    pacienteListar.style.display = "none";
    recetaListar.style.display = "none";
    agregaMedi.style.display = "none";
    agregaProvee.style.display = "none";
    agregaPaciente.style.display = "flex";
    agregaPaciente.style.alignItems = "center";
    agregaPaciente.style.justifyContent = "center";
    agregaPaciente.style.flexWrap = "wrap";
    agregaPaciente.style.gap = "5%";
    agregaPaciente.style.marginTop = "6%";
});

var comProveA = document.getElementById("medicamentosProveeA");
var pacienCompraPara = document.getElementById("pacienCompraPara");
var pacienCompraPara2023 = document.getElementById("pacienCompraPara2023");
var pacienNoCompra2023 = document.getElementById("pacienNoCompra2023");
var medicamentosTotaParace = document.getElementById("medicamentosTotaParace");
var medicamentosVenMazo2023 = document.getElementById("medicamentosVenMazo2023");
var medicamentosMenosVen2023 = document.getElementById("medicamentosMenosVen2023");
var medicamentosPromeXVen = document.getElementById("medicamentosPromeXVen");
var medicamentosNoVendidos = document.getElementById("medicamentosNoVendidos");
var medicamentosVenXMes2023 = document.getElementById("medicamentosVenXMes2023");
var medicamentosVenPorMes2023 = document.getElementById("medicamentosVenPorMes2023");
var medicamentosNoVendidos2023 = document.getElementById("medicamentosNoVendidos2023");
var medicamentosTotalTrimes2023 = document.getElementById("medicamentosTotalTrimes2023");
var ventaXEmpleado = document.getElementById("ventaXEmpleado");
var empleadoMas5Ventas = document.getElementById("empleadoMas5Ventas");
var empleadoSinVentas2023 = document.getElementById("empleadoSinVentas2023");
var empleadoMenos5Ventas = document.getElementById("empleadoMenos5Ventas");
var empleVenMedicDistinto2023 = document.getElementById("empleVenMedicDistinto2023");
var empleadoSinVentasAbril2023 = document.getElementById("empleadoSinVentasAbril2023");
var totalMedisVenXProveedor = document.getElementById("totalMedisVenXProveedor");
var proveeNoVenMedicUltiAño = document.getElementById("proveeNoVenMedicUltiAño");
var proveedorSumiMasMedic2023 = document.getElementById("proveedorSumiMasMedic2023");
var proveedoresSumiMedic2023 = document.getElementById("proveedoresSumiMedic2023");
var proveeSumiMas5MedicDife2023 = document.getElementById("proveeSumiMas5MedicDife2023");
var medicamentosMenos50Stock = document.getElementById("medicamentosMenos50Stock");
var medicamentosVencenAntes2024 = document.getElementById("medicamentosVencenAntes2024");
var medicamenNoVendido = document.getElementById("medicamentosNoVendidos");
var totalRecaudadoXVenMedic = document.getElementById("totalRecaudadoXVenMedic");
var medicamentoMasCaro = document.getElementById("medicamentoMasCaro");
var medicamenExpi2024 = document.getElementById("medicamentoExpi2024");
var medicamentosPre50Stock100 = document.getElementById("medicamentosPre50Stock100");
var proveeInfoContacto = document.getElementById("proveeInfoContacto");
var cantMedicXProvee = document.getElementById("cantMedicXProvee");
var ganaciaXProvee2023 = document.getElementById("ganaciaXProvee2023");
var proveeMenos50Medic = document.getElementById("proveeMenos50Medic");
var pacienteMasDinero2023 = document.getElementById("pacienteMasDinero2023");
var totalGastXPacient = document.getElementById("totalGastXPacient");
var recetasDespues2023 = document.getElementById("recetasDespues2023");


var medicComProveeA = document.getElementById("comProveA");
medicComProveeA.addEventListener("click", function(){
    medisCompras.style.display = "none";
    comProveA.style.display = "flex";
});

var pacientesParacetamol = document.getElementById("pacientComPara");
pacientesParacetamol.addEventListener("click", function(){
    pacienCompras.style.display = "none";
    pacienCompraPara.style.display = "flex";
});

var pacienCompraPara2023 = document.getElementById("pacientComPara2023");
pacienCompraPara2023.addEventListener("click", function(){
    pacienCompras.style.display = "none";
    pacienCompraPara2023.style.display = "flex";
});

var pacienteSinCompras = document.getElementById("pacienSinCompra2023");
pacienteSinCompras.addEventListener("click", function(){
    pacienCompras.style.display = "none";
    pacienNoCompra2023.style.display = "flex";
});

var medicTotalVenPara = document.getElementById("totalVenPara");
medicTotalVenPara.addEventListener("click", function(){
    medisVentas.style.display = "none";
    medicamentosTotaParace.style.display = "flex";
});

var medicVenMarzo = document.getElementById("medicVenMarzo2023");
medicVenMarzo.addEventListener("click", function(){
    medisVentas.style.display = "none";
    medicamentosVenMazo2023.style.display = "flex";
});

var medicMenosVen = document.getElementById("medicMenosVen2023");
medicMenosVen.addEventListener("click", function(){
    medisVentas.style.display = "none";
    medicamentosMenosVen2023.style.display = "flex";
});

var promMedicPorVenta = document.getElementById("promMedicXVenta");
promMedicPorVenta.addEventListener("click", function(){
    medisVentas.style.display = "none";
    medicamentosPromeXVen.style.display = "flex";
});

var medicamentoNoVen = document.getElementById("medicNoVendidos");
medicamentoNoVen.addEventListener("click", function(){
    medisVentas.style.display = "none";
    medicamentosNoVendidos.style.display = "flex";
});

var medicVendidosXMes2023 = document.getElementById("medicVendidosXMes2023");
medicVendidosXMes2023.addEventListener("click", function(){
    medisVentas.style.display = "none";
    medicamentosVenXMes2023.style.display = "flex";
});

var medicVenCadaMes = document.getElementById("medicVendidosCadaMes2023");
medicVenCadaMes.addEventListener("click", function(){
    medisVentas.style.display = "none";
    medicamentosVenPorMes2023.style.display = "flex";
});

var medicNoVen2023 = document.getElementById("medicNoVendidos2023");
medicNoVen2023.addEventListener("click", function(){
    medisVentas.style.display = "none";
    medicamentosNoVendidos2023.style.display = "flex";
});

var medicVendiTrimestre2023 = document.getElementById("medicVendiTrimestre2023");
medicVendiTrimestre2023.addEventListener("click", function(){
    medisVentas.style.display = "none";
    medicamentosTotalTrimes2023.style.display = "flex";
});

var ventPorEmple2023 = document.getElementById("ventXEmpleado2023");
ventPorEmple2023.addEventListener("click", function(){
    empleeVentas.style.display = "none";
    ventaXEmpleado.style.display = "flex";
});

var empleado5VentasMas = document.getElementById("empleaMas5Ventas");
empleado5VentasMas.addEventListener("click", function(){
    empleeVentas.style.display = "none";
    empleadoMas5Ventas.style.display = "flex";
});

var empleadoSinVenta2023 = document.getElementById("empleaSinVenta2023");
empleadoSinVenta2023.addEventListener("click", function(){
    empleeVentas.style.display = "none";
    empleadoSinVentas2023.style.display = "flex";
});

var empleMenos5Ventas = document.getElementById("empleadoMenos5Ventass");
empleMenos5Ventas.addEventListener("click", function(){
    empleeVentas.style.display = "none";
    empleadoMenos5Ventas.style.display = "flex";
});

var empleadoMedicDistin2023 = document.getElementById("empleMedicDistin2023");
empleadoMedicDistin2023.addEventListener("click", function(){
    empleeVentas.style.display = "none";
    empleVenMedicDistinto2023.style.display = "flex";
});

var empleSinVentasAbril2023 = document.getElementById("empleadosSinVentasAbril2023");
empleSinVentasAbril2023.addEventListener("click", function(){
    empleeVentas.style.display = "none";
    empleadoSinVentasAbril2023.style.display = "flex";
});

var medicVenXProvee = document.getElementById("totalMedicVenXProvee");
medicVenXProvee.addEventListener("click", function(){
    proveeVentas.style.display = "none";
    totalMedisVenXProveedor.style.display = "flex";
});

var proveedorSinVentasUltAño = document.getElementById("proveSinVentasUltiAño");
proveedorSinVentasUltAño.addEventListener("click", function(){
    proveeVentas.style.display = "none";
    proveeNoVenMedicUltiAño.style.display = "flex";
});

var provSumMasMed2023 = document.getElementById("proveedorSumiMasMedicc2023");
provSumMasMed2023.addEventListener("click", function(){
    proveeVentas.style.display = "none";
    proveedorSumiMasMedic2023.style.display = "flex";
});

var proveedoresSumiMasMedic2023 = document.getElementById("proveedoresSumiMasMedic2023");
proveedoresSumiMasMedic2023.addEventListener("click", function(){
    proveeVentas.style.display = "none";
    proveedoresSumiMedic2023.style.display = "flex";
});

var proveeSumi5MedicDiferent2023 = document.getElementById("proveedoresSumi5MedicDife2023");
proveeSumi5MedicDiferent2023.addEventListener("click", function(){
    proveeVentas.style.display = "none";
    proveeSumiMas5MedicDife2023.style.display = "flex";
});

var menos50Stock = document.getElementById("medicMenos50Stock");
menos50Stock.addEventListener("click", function(){
    cartas.style.display = "none";
    medicamentosMenos50Stock.style.display = "flex";
});

var vencenMedic2024 = document.getElementById("medicVencen2024");
vencenMedic2024.addEventListener("click", function(){
    cartas.style.display = "none";
    medicamentosVencenAntes2024.style.display = "flex";
});

var reacudadoMedic = document.getElementById("dineroRecaudadoMedic");
reacudadoMedic.addEventListener("click", function(){
    cartas.style.display = "none";
    totalRecaudadoXVenMedic.style.display = "flex";
});

var medicamentosNoVen = document.getElementById("medicameNoVen");
medicamentosNoVen.addEventListener("click", function(){
    cartas.style.display = "none";
    medicamenNoVendido.style.display = "flex";
});

var medicameMasCaro = document.getElementById("medicMasCaro");
medicameMasCaro.addEventListener("click", function(){
    cartas.style.display = "none";
    medicamentoMasCaro.style.display = "flex";
});

var medicExpir2024 = document.getElementById("medicQueExpiran2024");
medicExpir2024.addEventListener("click", function(){
    cartas.style.display = "none";
    medicamenExpi2024.style.display = "flex";
});

var medic50100 = document.getElementById("medic50Y100");
medic50100.addEventListener("click", function(){
    cartas.style.display = "none";
    medicamentosPre50Stock100.style.display = "flex";
});

var proveedoInfoContacto = document.getElementById("provInfoContacto");
proveedoInfoContacto.addEventListener("click", function(){
    proveeListar.style.display = "none";
    proveeInfoContacto.style.display = "flex";
});

var cantiMedicaXProvee = document.getElementById("cantidadMedicXProvee");
cantiMedicaXProvee.addEventListener("click", function(){
    proveeListar.style.display = "none";
    cantMedicXProvee.style.display = "flex";
});

var ganaciaXProv2023 = document.getElementById("ganaciaPorProvee2023");
ganaciaXProv2023.addEventListener("click", function(){
    proveeListar.style.display = "none";
    ganaciaXProvee2023.style.display = "flex";
});

var provMenos50Medicamentos = document.getElementById("proveeMenos50Medicamentos");
provMenos50Medicamentos.addEventListener("click", function(){
    proveeListar.style.display = "none";
    proveeMenos50Medic.style.display = "flex";
});

var pacientGastadoMas2023 = document.getElementById("pacienteGasMasDine2023");
pacientGastadoMas2023.addEventListener("click", function(){
    pacienteListar.style.display = "none";
    pacienteMasDinero2023.style.display = "flex";
});

var gastadoXPaciente2023 = document.getElementById("totalGastXPacient2023");
gastadoXPaciente2023.addEventListener("click", function(){
    pacienteListar.style.display = "none";
    totalGastXPacient.style.display = "flex";
});

var recetas = document.getElementById("recetasMedicDespues2023");
recetas.addEventListener("click", function(){
    recetaListar.style.display = "none";
    recetasDespues2023.style.display = "flex";
});