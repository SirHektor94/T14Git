Feladat 1 :

<script>
let nev=prompt("Csoporttag neve");
let azon=(prompt("A csoport azonosítója(Team XY)"));
let html=Number(prompt("Mennyire érti a jelenlegi HTML tananyagot 1-100-ig?"));
let css=Number(prompt("Mennyire érti a jelenlegi CSS tananyagot 1-100-ig?"));
let js=Number(prompt("Mennyire érti a jelenlegi Javascript tananyagot 1-100-ig?"));

document.write(`A ${nev} nevü tanuló, a ${azon} csoportból a következő szinteken érti a 
jelenlegi tananyagot 1-100ig: <br> HTML: ${html} %<br> CSS: ${css} %<br> Javascript: ${js} %`);

</script>

Feladat 2 :

<script>
let szam=Number(prompt("A hatványozni kívánt szám"));
let hatvany=Number(prompt("A kért hatvány"));

document.write(Math.pow(szam , hatvany));

</script>

Feladat 3 : 

<script>
let felso = Number(prompt("Add meg a felső határértéket!"));
let eredmeny 

do {
  eredmeny = Math.floor(Math.random() * felso);
} while (eredmeny % 2 !== 0);

document.write(eredmeny)

</script>



Feladat 4 : 

<script>
let eletkor=Number(prompt("Hány éves az illető?"));

if (eletkor >= 0 && eletkor <= 6){
	document.write(`Az illető ${eletkor} éves, tehát újszülött korú`.);
	}
    
else if (eletkor > 6 && eletkor <= 12){
	document.write(`Az illető ${eletkor} éves, tehát gyermekkorú`.);
	}
else if (eletkor > 12 && eletkor <= 16){
	document.write(`Az illető ${eletkor} éves, tehát serdülőkorú`.);
	}
else if (eletkor > 16 && eletkor <= 20){
	document.write(`Az illető ${eletkor} éves, tehát ifjúkorú`.);
	}
else if (eletkor > 20 && eletkor <= 30){
	document.write(`Az illető ${eletkor} éves, tehát fiatal felnőttkorú`.);
	}
else if (eletkor > 30 && eletkor <= 60){
	document.write(`Az illető ${eletkor} éves, tehát felnőttkorú`.);
	}
else if (eletkor > 60 && eletkor <= 120 ){
	document.write(`Az illető ${eletkor} éves, tehát aggkorú`.);
	}
else{
	document.write("Hibás a beírt adat");
	}

</script>

Feladat 6 :

<script>
	document.write(`Az első 10 négyzetszám<br>`);
for(let i=1;i<=10;i++){
	document.write(i * i +",");
}

</script>

