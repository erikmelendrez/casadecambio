/// <reference types="jquery" />

const cantidad = document.getElementById("cantidad");
cantidad.addEventListener('input', obtenerData);

function obtenerData(){
  const $cantidad = $('#cantidad').val();
  const $currency = $('#currency').val();
  const $currencyTo = $('#currencyTo').val(); 

  fetch(`https://v6.exchangerate-api.com/v6/0f5ece56517279c999b4b159/latest/${$currency}`)
    .then((res) => res.json())
    .then(resJSON => {
      const cambio = $cantidad * resJSON.conversion_rates[$currencyTo];
      $('#resultado').val(cambio.toFixed(2));
    });
}

obtenerData();



