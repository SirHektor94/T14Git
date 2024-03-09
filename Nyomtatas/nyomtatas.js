function kalkulal() {
  //Űrlapadatok
  const szelesseg = Number(document.getElementById("szelesseg").value);
  const magassag = Number(document.getElementById("magassag").value);
  const papir = Number(document.getElementById("papirtipus").value);
  //Számítások
  let terulet = Math.round((szelesseg * magassag) / 10000);
  let koltseg = terulet * papir;
  //Megjelenítés
  document.getElementById("valasz").style.visibility = "visible";
  document.getElementById("terulet").innerHTML = terulet;
  document.getElementById("koltseg").innerHTML = koltseg;
  document.getElementById("papir").innerHTML = papir;
}

let kalkGomb = document.querySelector("#kalkulalGomb");
kalkGomb.addEventListener("click", kalkulal);
