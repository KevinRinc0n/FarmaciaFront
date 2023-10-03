import { urlGlobal } from "./main.js";

async function GetMedicamentosStock50(){
    try {
        const response = await fetch(urlGlobal + "/api/Medicamento/GetStock50");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw 'Error al obtener los datos';
    }
}

const contenedorMedicamentos = document.getElementById("medicamentosMenos50Stock");

export async function mostrarMedicamentosMenos50Stock(){

    try {
        contenedorMedicamentos.innerHTML =""
        const medicamentosMenos50Stock = await GetMedicamentosStock50();
        console.log(medicamentosMenos50Stock);

        medicamentosMenos50Stock.forEach(medicamento =>{
            const listar = `
            <div class="card" style="width: 18rem;">
                <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${medicamento.id}</h5>
                    <p class="card-text">${medicamento.nombre}</p>
                    <p class="card-text">Precio: $ ${medicamento.precio}</p>
                </div>
            </div>
            `
            contenedorMedicamentos.innerHTML += listar;
        }); 
    } catch (error) {
        alert("Hubo un error al obtener los datos");
    }
    
};

async function GetMedicamentosVencenAntes2024(){
    try {
        const response = await fetch(urlGlobal + "/api/Medicamento/GetCadu2024");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw 'Error al obtener los datos';
    }
}

const contenedorMedisCadu2024 = document.getElementById("medicAntes2024Body");

export async function mostrarCadu2024() {
    try {
        contenedorMedisCadu2024.innerHTML ="";
        const medisCadu2024 = await GetMedicamentosVencenAntes2024();
        console.log(medisCadu2024);
    
        medisCadu2024.forEach(medicamentoCadu2024 =>{
            const listar = `
            <tr>
                <th scope="row">${medicamentoCadu2024.id}</th>
                <td>${medicamentoCadu2024.nombre}</td>
                <td>${medicamentoCadu2024.precio}</td>
                <td>${medicamentoCadu2024.fechaExpiracion}</td>
            </tr>
            `
            contenedorMedisCadu2024.innerHTML += listar;
        }); 
    } catch (error) {
        alert("Hubo un error al obtener los datos");
    }
};

async function GetTotalRecaudadoXventas(){
    try {
        const response = await fetch(urlGlobal + "/api/MovimientoInventario/GetTotalRecaudado");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw 'Error al obtener los datos';
    }
}

const contenedorTotalRecaudado = document.getElementById("totalRecaudadoXVenMedic");

export async function mostrarTotalRecaudado() {
    const recaudadoXVenta = await GetTotalRecaudadoXventas();

    if (recaudadoXVenta !== null) {
        const listar = `
        <div class="card" style="width: 18rem;">
            <img src="./imgs/dinero.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">El dinero total recaudado por las ventas de los medicamentos es: $${recaudadoXVenta}</h5>
            </div>
        </div>
        `;

        contenedorTotalRecaudado.innerHTML = listar;
    } else {
        alert("Hubo un error al obtener los datos");
    }
}

async function getMedicamentosNoVendidos2023(){
    try {
        const response = await fetch(urlGlobal + "/api/Medicamento/medicamentos-no-vendidos-2023");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw 'Error al obtener los datos';
    }
}

const contenedorMedicamentosNoVendidos2023 = document.getElementById("medicamentosNoVendidos2023");

export async function mostrarMedicamentosNoVendidos2023() {
    contenedorMedicamentosNoVendidos2023.innerHTML = "";

    try {

        const medicamentosNoVendidos2023 = await getMedicamentosNoVendidos2023();
        console.log(medicamentosNoVendidos2023);
        
        medicamentosNoVendidos2023.forEach(item =>{
            const listar = `
            <div class="card" style="width: 18rem;">
                <img src="./imgs/cards.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.id}</h5>
                    <p class="card-text">${item.nombre}</p>
                    <p class="card-text">Precio: $ ${item.precio}</p>
                </div>
            </div>
            `;
            contenedorMedicamentosNoVendidos2023.innerHTML += listar;
        }); 
    } catch (error) {
        alert("Hubo un error al obtener los datos");
    }

};

async function getMedicamentosMasCaro() {
    try {
      const response = await fetch(urlGlobal + "/api/Medicamento/GetMediCaro");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw 'Error al obtener los datos';
    }
  }
  
  const contenedorMasCaro = document.getElementById("medicamentoMasCaro");
  
  export async function mostrarMasCaro() {
    try {
      contenedorMasCaro.innerHTML = "";
      const medicCaro = await getMedicamentosMasCaro();
  
      if (medicCaro != null) {
        let listar = `
          <div class="card" style="width: 18rem;">
            <img src="./imgs/mediCard.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${medicCaro.id}</h5>
              <p class="card-text">${medicCaro.nombre}</p>
              <p class="card-text">${medicCaro.precio}</p>
            </div>
          </div>
        `;
        contenedorMasCaro.innerHTML = listar;
      } else {
        alert("Hubo un error al obtener los datos");
      }
    } catch (error) {
      alert("Hubo un error al obtener los datos");
    }
  };