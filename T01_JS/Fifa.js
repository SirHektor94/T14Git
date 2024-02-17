<script>
//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
	{nev:"Anglia",helyezes:4,valtozas:0,pont:1662},
    {nev:"Argentína",helyezes:10,valtozas:0,pont:1614},
    {nev:"Belgium",helyezes:4,valtozas:0,pont:1662},
	{nev:"Brazília",helyezes:3,valtozas:-1,pont:1719}, 
    {nev:"Chile",helyezes:17,valtozas:-3,pont:1576},
    {nev:"Dánia",helyezes:14,valtozas:-1,pont:1584},
    {nev:"Franciaország",helyezes:2,valtozas:1,pont:1725},
    {nev:"Hollandia",helyezes:13,valtozas:3,pont:1586},
    {nev:"Horvátország",helyezes:8,valtozas:-1,pont:1625},
    {nev:"Kolumbia",helyezes:9,valtozas:-1,pont:1622},
    {nev:"Mexikó",helyezes:12,valtozas:0,pont:1603},
    {nev:"Németország",helyezes:16,valtozas:-1,pont:1580},
    {nev:"Olaszország",helyezes:15,valtozas:1,pont:1583},
	{nev:"Peru",helyezes:19,valtozas:0,pont:1551},
	{nev:"Portugália",helyezes:5,valtozas:1,pont:1643},
	{nev:"Spanyolország",helyezes:7,valtozas:2,pont:1631},
	{nev:"Svájc",helyezes:11,valtozas:0,pont:1604},
 	{nev:"Svédország",helyezes:18,valtozas:0,pont:1560},
	{nev:"Szenegál",helyezes:20,valtozas:0,pont:1546},
    {nev:"Uruguay",helyezes:6,valtozas:-1,pont:1639}
 	];



//1. Feladat - Hány csapat szerepel

function csapatszamlalo(vizsgaltTomb){
	let csapatmennyiseg=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
    	csapatmennyiseg++;
        }
        console.log("A Fifaban " + csapatmennyiseg + " csapat szerepel");
}

csapatszamlalo(csapatAdat);





//2. Feladat - Mennyi a csapatok átlag pontszáma
function atlagszamlalas(vizsgaltTomb){
	let osszeg=0;
	for(let i=0;i<vizsgaltTomb.length;i++){
    	osszeg+=vizsgaltTomb[i].pont; 	
    }
   	return osszeg/vizsgaltTomb.length;
}
console.log("A csapatok átlag pontszáma: "+atlagszamlalas(csapatAdat));



//3. Feladat - Átlagfeletti csapatok listája
function legtobbPontCsapatok(vizsgaltTomb){
	let legtobbPont=[];
    let osszeg=0;
	
    for(let i=0;i<vizsgaltTomb.length;i++){
    	osszeg+=vizsgaltTomb[i].pont; 	
    }
   	let atlag = osszeg/vizsgaltTomb.length;
    
    for(let i=0;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i].pont > atlag ){
    		legtobbPont.push(vizsgaltTomb[i]);
        }
    }
	return legtobbPont;
}
let legtobbPontosCsapatok = legtobbPontCsapatok(csapatAdat);
console.log(" Az átlag feletti csapatok nevei és pontszámai: ");
for(let i=0;i <legtobbPontosCsapatok.length;i++){
	console.log("Csapatnév: " + legtobbPontosCsapatok[i].nev + "Pontszám: " + legtobbPontosCsapatok[i].pont);
}

//4. Feladat - Legtöbbet javító csapat
function legtobbJav(vizsgaltTomb){
	let legmagasabbErtek=vizsgaltTomb[0];
    for (let i=0;i<vizsgaltTomb.length;i++){
		if(vizsgaltTomb[i]>legmagasabbErtek[i]){
        	legmagasabbErtek=vizsgaltTomb[i];
		}
	}
	console.log("A legtöbbet javító csapat neve:" +legmagasabbErtek.nev);
	console.log("A legtöbbet javító csapat helyezése:" + legmagasabbErtek.helyezes);
	console.log("A legtöbbet javító csapat pontszáma:" + legmagasabbErtek.pont );   
}
legtobbJav(csapatAdat);
	
//5. Feladat - Megtalálható-e Magyarország
function orszagKereso(vizsgaltTomb,keresettOrszag){
	let talalt = false;
	for (let i=0;i<vizsgaltTomb.length;i++){
		if(vizsgaltTomb[i].nev === keresettOrszag){ 
		console.log(keresettOrszag + " rajta van a FIFA listán.");
        talalt = true;
       
		}
    }    
   	if (!talalt){
    	console.log(keresettOrszag + " nincs rajta a FIFA listán.");
    	}    	
}
orszagKereso(csapatAdat,"Szenegál");

</script>