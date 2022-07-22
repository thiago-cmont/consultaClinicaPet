const MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const DIAS = {
  janeiro: 31,
  fevereiro: 28,
  março: 31,
  abril: 30,
  maio: 31,
  junho: 30,
  julho: 31,
  agosto: 31,
  setembro: 30,
  outubro: 31,
  novembro: 30,
  dezembro: 31,
};

const HORAS = ["13:30", "14:30", "15:30", "16:30", "17:30"];

function populateMonthSelect() {
  var select = document.getElementById("mes");
  for (var i = 0; i < 12; i++) {
    var opt = document.createElement("option");
    opt.value = MESES[i];
    opt.innerHTML = MESES[i];
    select.appendChild(opt);
  }
  reloadDays();
}

function reloadDays(value) {
  const DEFAULT = 31;
  var select = document.getElementById("dia");
  const days = value ? DIAS[value] : DEFAULT;
  var i,
    L = select.options.length - 1;
  for (i = L; i >= 0; i--) {
    select.remove(i);
  }
  for (var i = 0; i < days; i++) {
    var opt = document.createElement("option");
    opt.value = i + 1;
    opt.innerHTML = i + 1;
    select.appendChild(opt);
  }
}

function getAvailableHours() {
  const mes = document.getElementById("mes");
  const dia = document.getElementById("dia");
  var availableHours = HORAS;
  axios
    .post("http://localhost:3030/getConsulta", {
      dia: dia.value,
      mes: mes.value,
    })
    .then((response) => {
      const responseData = response.data;
      for (i = 0; i < responseData.length; i++) {
        for (j = 0; j < availableHours.length; j++) {
          if (availableHours[j] == responseData[i].hora) {
            availableHours.splice(j, 1);
          }
        }
      }
      var select = document.getElementById("hora");
      var i,
        L = select.options.length - 1;
      for (i = L; i >= 0; i--) {
        select.remove(i);
      }
      for (var i = 0; i < availableHours.length; i++) {
        var opt = document.createElement("option");
        opt.value = availableHours[i];
        opt.innerHTML = availableHours[i];
        select.appendChild(opt);
      }
    });
}

function create(e) {
  e.preventDefault();
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const cpf = document.getElementById("cpf");
  const nomeDoPet = document.getElementById("nomeDoPet");
  const tipoDoPet = document.getElementById("tipoDoPet");
  const mes = document.getElementById("mes");
  const dia = document.getElementById("dia");
  const hora = document.getElementById("hora");

  axios
    .post("http://localhost:3030/createConsultas", {
      nome: nome.value,
      email: email.value,
      cpf: cpf.value,
      nomeDoPet: nomeDoPet.value,
      tipoDePet: tipoDoPet.value,
      dia: dia.value,
      mes: mes.value,
      hora: hora.value,
    })
    .then((response) => {
      alert("Consulta criada!");
      window.location.reload();
    });
}

populateMonthSelect();
var form = document.getElementById("submitForm");
form.onsubmit = create;
