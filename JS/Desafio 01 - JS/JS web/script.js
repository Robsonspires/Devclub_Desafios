const btnConvert = document.querySelector(".btn-convert");
const selectFrom = document.querySelector(".select-from");
const selectTo = document.querySelector(".select-to");

let inputValue = Number(document.querySelector(".input-currency").value);

let valueFrom = document.querySelector(".value-from");
let labelFrom = document.querySelector(".label-from");
let imgFrom = document.querySelector(".img-from");
let labelTo = document.querySelector(".label-to");
let valueTo = document.querySelector(".value-to");
let imgTo = document.querySelector(".img-to").src;

const realToday = 2;
const dolarToday = 5;
const euroToday = 6;
const libraToday = 7;

// Faz atualizações iniciais, caso haja algum valor em cache
updateInputValue();
updateOutputValue();
changeCurrencyFrom();
changeCurrencyTo();

function convertValues() {
  updateInputValue();
  updateOutputValue();

  inputValue = Number(document.querySelector(".input-currency").value);

  if (inputValue > 0) {
    //>> ???? como resetar
    // e como voltar para o valor default
    changeCurrencyFrom();
    changeCurrencyTo();
  }
}

function changeCurrencyFrom() {
  const imgFrom = document.querySelector(".img-from");

  if (selectFrom.value === "real") {
    imgFrom.src = "./assets/real.png";
    labelFrom.textContent = "Real Brasileiro";
  } else if (selectFrom.value === "dolar") {
    imgFrom.src = "./assets/dolar.png";
    labelFrom.textContent = "Dólar Americano";
  } else if (selectFrom.value === "euro") {
    imgFrom.src = "./assets/euro.png";
    labelFrom.textContent = "Euro";
  } else if (selectFrom.value === "libra") {
    imgFrom.src = "./assets/libra.png";
    labelFrom.textContent = "Libra";
  }

  updateInputValue();
  updateOutputValue();
}

function changeCurrencyTo() {
  const imgTo = document.querySelector(".img-to");

  if (selectTo.value === "real") {
    imgTo.src = "./assets/real.png";
    labelTo.textContent = "Real Brasileiro";
  } else if (selectTo.value === "dolar") {
    imgTo.src = "./assets/dolar.png";
    labelTo.textContent = "Dólar Americano";
  } else if (selectTo.value === "euro") {
    imgTo.src = "./assets/euro.png";
    labelTo.textContent = "Euro";
  } else if (selectTo.value === "libra") {
    imgTo.src = "./assets/libra.png";
    labelTo.textContent = "Libra";
  }
  updateInputValue();
  updateOutputValue();
}

function updateInputValue() {
  // Atualiza os dados de entrada
  if (selectFrom.value === "real") {
    valueFrom.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(inputValue));
  } else if (selectFrom.value === "dolar") {
    labelFrom.innerHTML = "Dólar";
    valueFrom.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(inputValue));
  } else if (selectFrom.value === "euro") {
    labelFrom.innerHTML = "Euro";
    valueFrom.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(Number(inputValue));
  } else if (selectFrom.value === "libra") {
    labelFrom.innerHTML = "Libra";
    valueFrom.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(Number(inputValue));
  }
}

function updateOutputValue() {
  // Atualiza os dados de saída
  updateInputValue();
  let valueResult = 0;
  if (selectTo.value === "real") {
    labelTo.innerHTML = "Real Brasileiro";
    valueResult = inputValue / realToday;
    valueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(valueResult));
  } else if (selectTo.value === "dolar") {
    labelTo.innerHTML = "Dólar";
    valueResult = inputValue / dolarToday;
    valueTo.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(valueResult));
  } else if (selectTo.value === "euro") {
    labelTo.innerHTML = "Euro";
    valueResult = inputValue / euroToday;
    valueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(Number(valueResult));
  } else if (selectTo.value === "libra") {
    labelTo.innerHTML = "Libra";
    valueResult = inputValue / libraToday;
    valueTo.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(Number(valueResult));
  }
}

btnConvert.addEventListener("click", convertValues);
selectFrom.addEventListener("change", changeCurrencyFrom);
selectTo.addEventListener("change", changeCurrencyTo);
