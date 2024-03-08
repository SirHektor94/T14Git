//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
  "Anglia;4;0;1662",
  "Argentína;10;0;1614",
  "Belgium;1;0;1752",
  "Brazília;3;-1;1719",
  "Chile;17;-3;1576",
  "Dánia;14;-1;1584",
  "Franciaország;2;1;1725",
  "Hollandia;13;3;1586",
  "Horvátország;8;-1;1625",
  "Kolumbia;9;-1;1622",
  "Mexikó;12;0;1603",
  "Németország;16;-1;1580",
  "Olaszország;15;1;1583",
  "Peru;19;0;1551",
  "Portugália;5;1;1643",
  "Spanyolország;7;2;1631",
  "Svájc;11;0;1604",
  "Svédország;18;0;1560",
  "Szenegál;20;0;1546",
  "Uruguay;6;-1;1639",
];

function objektumAdatok(elemek) {
  let adatok = [];
  for (let i = 0; i < elemek.length; i++) {
    let objektum = {};
    let darabSor = elemek[i].split(";");
    objektum.nev = darabSor[0];
    objektum.helyezes = Number(darabSor[1]);
    objektum.valtozas = Number(darabSor[2]);
    objektum.pont = Number(darabSor[3]);
    adatok.push(objektum);
  }
  return adatok;
}

const fifaAdatok = objektumAdatok(csapatAdat);

//1. Feladat

function csapatokSzama(elemek) {
  return elemek.length;
}

function csapatSzamKiir() {
  let tagszam = csapatokSzama(fifaAdatok);
  document.querySelector("#f1").innerHTML =
    "A fifában szereplő csapatok mennyisége: " + tagszam;
}

let f1gomb = document.querySelector("#feladat1");
f1gomb.addEventListener("click", csapatSzamKiir);

//2. Feladat

function csapatAtlag(elemek) {
  let csapPont = 0;
  for (let i = 0; i < elemek.length; i++) {
    csapPont += elemek[i].pont;
  }
  return Math.round(csapPont / elemek.length);
}

function csapatAtlagKiir() {
  let atlagPont = csapatAtlag(fifaAdatok);
  document.querySelector("#f2").innerHTML =
    "A fifában szereplő csapatok átlag pontszáma: " + atlagPont;
}

let f2gomb = document.querySelector("#feladat2");
f2gomb.addEventListener("click", csapatAtlagKiir);

//3. Feladat

function atlagFelett(elemek) {
  let atlagPont = csapatAtlag(elemek);
  let atlagFel = [];
  for (let i = 0; i < elemek.length; i++)
    if (elemek[i].pont > atlagPont) {
      atlagFel.push(elemek[i].nev);
    }
  return atlagFel;
}

function AtlagFelettiekKiir(nevLista) {
  let tableContent =
    "<table border='1'><tr><th>Átlag feletti pontszámos csapatok</th></tr>";
  for (let i = 0; i < nevLista.length; i++) {
    tableContent += `<tr><td><li>${nevLista[i]}</li></td></tr>`;
  }
  tableContent += "</table>";
  document.querySelector("#f3").innerHTML = tableContent;
}
let f3gomb = document.querySelector("#feladat3");
f3gomb.addEventListener("click", function () {
  let atlagFelettiek = atlagFelett(fifaAdatok);
  AtlagFelettiekKiir(atlagFelettiek);
});

//4. Feladat

function legnagyobbJavito(elemek) {
  let csapatIndex = 0;
  for (let i = 0; i < elemek.length; i++)
    if (elemek[i].valtozas > elemek[csapatIndex].valtozas) {
      csapatIndex = i;
    }
  return elemek[csapatIndex];
}

function legnagyobbJavitoKiir() {
  let legJav = legnagyobbJavito(fifaAdatok);
  document.querySelector("#f4").innerHTML =
    "A legtöbbet javító csapat helyezése " +
    legJav.helyezes +
    ", Csapat neve: " +
    legJav.nev +
    ", pontszáma: " +
    legJav.pont;
}

let f4gomb = document.querySelector("#feladat4");
f4gomb.addEventListener("click", legnagyobbJavitoKiir);
//5. Feladat

function SzerepelEAdottOrszag(elemek, orszagNeve) {
  for (let i = 0; i < elemek.length; i++) {
    if (elemek[i].nev == orszagNeve) {
      return true;
    }
  }
  return false;
}

function SzerepelEAdottOrszagKiir(orszagNeve) {
  let szerepel = SzerepelEAdottOrszag(fifaAdatok, orszagNeve);
  if (szerepel == true) {
    document.querySelector(
      "#feladat5"
    ).innerHTML = `${orszagNeve} szerepel a fifa ranglistán`;
  } else {
    document.querySelector(
      "#feladat5"
    ).innerHTML = `${orszagNeve} nem szerepel a fifa ranglistán`;
  }
}

let f5gomb = document.querySelector("#feladat5");
f5gomb.addEventListener("click", function () {
  let orszagNeve = document.querySelector("#orszagNeve").value;
  SzerepelEAdottOrszagKiir(orszagNeve);
});

//6. Feladat
function ValtozasTipusok(elemek) {
  let valtozasTipusok = [];
  for (let i = 0; i < elemek.length; i++) {
    let szerepelE = false;
    for (let j = 0; j < valtozasTipusok.length; j++) {
      if (elemek[i].valtozas == valtozasTipusok[j]) {
        szerepelE = true;
      }
    }
    if (szerepelE == false) {
      valtozasTipusok.push(elemek[i].valtozas);
    }
  }
  return valtozasTipusok;
}
function ValtozasMennyisegek(elemek, valtozasTipusok) {
  let valtozasMennyisegek = [];
  for (let i = 0; i < valtozasTipusok.length; i++) {
    valtozasMennyisegek.push(0);
  }
  for (let i = 0; i < elemek.length; i++) {
    for (let j = 0; j < valtozasTipusok.length; j++) {
      if (elemek[i].valtozas == valtozasTipusok[j]) {
        valtozasMennyisegek[j]++;
      }
    }
  }
  return valtozasMennyisegek;
}

function ValtozasTabla(tipusok, mennyisegek) {
  let tableContent =
    "<table border='1'> <tr> <th> A változások mértéke</th><th>Változások mennyisége</th></tr>";
  for (let i = 0; i < tipusok.length; i++) {
    tableContent += `<tr><td>${tipusok[i]}</td><td>${mennyisegek[i]}</td></tr>`;
  }
  tableContent += "</table";
  document.querySelector("#feladat6").innerHTML = tableContent;
}

function ValtozasKiir() {
  let ValtTipusok = ValtozasTipusok(fifaAdatok);
  let ValtMenny = ValtozasMennyisegek(fifaAdatok, ValtozasTipusok(fifaAdatok));
  ValtozasTabla(ValtTipusok, ValtMenny);
}
let f6gomb = document.querySelector("#feladat6");
f6gomb.addEventListener("click", ValtozasKiir);
