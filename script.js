/* ==============Toggle / Modo Dark ===========*/

const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwtich = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwtich.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/* ============== Chars 1 ===========*/

const graf = document.getElementById('myChart');

const labels = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril'
]
const data = {
  labels,
  datasets: [{
    data: [22, 30, 60, 40],
    label: "Número de vendas (milhões)",
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 205, 86,1)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',],
    borderWidth: 1
  }],
}

const config = {
  type: 'bar',
  data,
  options: {
    responsive: true,

  }
};

const myChart = new Chart(graf, config);


/* ============== Chars 2 ===========*/

const graf_two = document.querySelector('.mySecondChart');


const data_two = {
  labels: [
    'Mulheres',
    'Homens'
  ],
  datasets: [{
    data: [22, 30],
    label: "Gênero por venda",
    backgroundColor: [
      'rgba(245, 40, 145, 0.8)',
      'rgba(255, 0, 0, 0.81)'
    ],

  }],
}
const config_two = {
  type: 'bar',
  data: data_two,
   options: {
    responsive: true,
    indexAxis: 'y',
     
    }
};
const myChart_Two = new Chart(graf_two, config_two);

/* ============== Chars 3 ===========*/


const graf_three = document.querySelector('.mythreeChart');

const data_three = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril'
    ],
    datasets: [{
      data: [35, 33,55,62],
      label: "Acesso na Página",
      fill:true,
      backgroundColor:'rgba(245, 40, 145, 0.3)',
      borderColor:  'rgba(245, 40, 145, 0.8)',
  
    }],
}

const config_three = {
  type: 'line',
  data: data_three,
   options: {
    responsive: true,
    tension: 0.4
    }
};
const myChart_three = new Chart(graf_three, config_three);


/* ============== Chars 4 ===========*/
const graf_four = document.querySelector('.myfourChart');

const data_four = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril'
    ],
    datasets: [{
      data: [20, 28,50,40],
      label: "vendas por click",
      fill:true,
      backgroundColor:'rgba(145, 10, 245, 0.3)',
      borderColor:  'rgba(145, 10, 245, 0.3)',
  
    }],
}

const config_four = {
  type: 'line',
  data: data_four,
   options: {
    responsive: true,
    tension: 0.4
    }
};
const myChart_four = new Chart(graf_four, config_four);

let diahtm = document.querySelector('.dia');

var datadia = new Date();
var dia = String(datadia.getDate()).padStart(2, '0');
diahtm.innerHTML = dia + ' de Fevereiro';
console.log(dia);