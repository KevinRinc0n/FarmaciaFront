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