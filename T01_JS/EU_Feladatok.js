<script>
const EuropaiUnio = [{
        orszag: "Ausztria",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
        csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
        csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
        csatlakozas: "2004.05.01"
    }
]

//1. Feladat 
function EuTagok(vizsgaltTomb){
	let tagok=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
    	tagok++
    }
    return tagok;
}
console.log("Az EU-nak jelenleg ennyi tagja van: "+EuTagok(EuropaiUnio));


//2. Feladat ( basic )
function EuCsat(vizsgaltTomb){
	let csatlakozas=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i].csatlakozas=="2007.01.01"){
        csatlakozas++;
    }
    }
    return csatlakozas;
}
console.log("2007-ben ennyi ország csatlakozott az EU-hoz: "+EuCsat(EuropaiUnio));

//3. Feladat ( basic )

function EuMagy(vizsgaltTomb){
	let magyar=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
    	if(vizsgaltTomb[i].orszag="Magyarország"){
        		return "Igen";
   			}
    	else{
        		return "Nem";
            }
    }
    return magyar;
}
console.log("Magyarország csatlakozott az EU-hoz?: "+EuMagy(EuropaiUnio));

//4. Feladat ( basic )
function EuMaj(vizsgaltTomb){
	for(let i=0;i<vizsgaltTomb.length;i++){
   	 	let csatDat = vizsgaltTomb[i].csatlakozas;
    	let Ho = csatDat.substring(5,7);    
		if (Ho === "05") {
          	return "Igen";
          }    
		  
        }
	 return "Nem"
}

console.log("Volt májusban csatlakozás az EU-hoz?: "+EuMaj(EuropaiUnio));

//5. Feladat 

function EuUtCsat(vizsgaltTomb){
	let UtolsoBelepo=0;
    for(let i=0;i<vizsgaltTomb.length;i++){
		if(vizsgaltTomb[i].csatlakozas>vizsgaltTomb[UtolsoBelepo].csatlakozas){
        	UtolsoBelepo=i;
        }
	}
    return UtolsoBelepo; 
}
function UtolsoBelepoKiad(UtolsoBelepo){
	console.log("Az ország ami utoljára csatlakozott az EU-hoz: "+EuropaiUnio[UtolsoBelepo].orszag);
}

UtolsoBelepoKiad(EuUtCsat(EuropaiUnio));
</script>

