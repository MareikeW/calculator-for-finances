const button = document.getElementById("sparrechner-button");

button.addEventListener("click", calcSparrechner);

function calcSparrechner(event) {
  event.preventDefault();
  let anfangskapital = document.getElementById("anfangskapital").valueAsNumber;
  let sparrate = document.getElementById("sparrate").valueAsNumber;
  const sparintervall = document.getElementById("sparintervall");
  let zinssatz = document.getElementById("zinssatz").valueAsNumber;
  let ansparzeit = document.getElementById("ansparzeit").valueAsNumber;
  let endkapital = document.getElementById("endkapital");
  let jahresendkapital = 0;
  let monate = 12;
  let einzahlungenSumme = 0;

  jahresendkapital += anfangskapital;
  if (sparintervall.value === "monatlich") {
        for (let i = 0; i < ansparzeit; i++) {
          jahresendkapital += (jahresendkapital * zinssatz) / 100; // Jahresendkapital + Zinsen 
          jahresendkapital += sparrate * (monate + 6.5 * (zinssatz / 100));
        }   
        einzahlungenSumme = anfangskapital + ((sparrate * 12) * ansparzeit);
  } else if (sparintervall.value === "jährlich") {
        for (let i = 1; i <= ansparzeit; i++) {
          jahresendkapital = (((jahresendkapital + sparrate) * zinssatz) / 100) + sparrate + jahresendkapital;
        }
        einzahlungenSumme = anfangskapital + (sparrate * ansparzeit);
  }

  endkapital.innerHTML = 
  `
    <p class="result-label-style">Einzahlungen gesamt: <span class="result-number-style">${einzahlungenSumme.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span></p>
    <p class="result-label-style">Zinsen gesamt: <span class="result-number-style">${(jahresendkapital - einzahlungenSumme).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span></p>
    <p class="result-label-style">Endkapital inkl. Zinsen: <span class="result-number-style">${jahresendkapital.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span></p>
  `;
  endkapital.style.display = "block";
}  

  