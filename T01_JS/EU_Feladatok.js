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
    	if(vizsgaltTomb[i].csatlakozas=="2007.01.01"){   //csatlakozas.substr(0,4) == "2007"  is megoldás//
        csatlakozas++;
    }
    }
    return csatlakozas;
}
console.log("2007-ben ennyi ország csatlakozott az EU-hoz: "+EuCsat(EuropaiUnio));


//2. Feladat ( adv )

function EuCsatAdv(vizsgaltTomb,adottEv){
	let adottcsatlakozas=0;
	for (let i=0;i<vizsgaltTomb.length;i++){
		if(vizsgaltTomb[i].csatlakozas.substr(0,4)==adottEv){
			adottcsatlakozas++;
		} 	
	}
	return adottcsatlakozas++;

}
console.log("A 2004ben csatlakozott országok mennyisége " +EuCsatAdv(EuropaiUnio,2004)+" db");


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

//6. Feladat

function EvKivalogato(vizsgaltTomb){
	let evLista=[];
	for (let i=0;i<vizsgaltTomb.length;i++){
		let szerepelE=false;
		for(let j=0;j<evLista.length;j++){
			if(evLista[j]==vizsgaltTomb[i].csatlakozas.substring(0,5){
				szerepelE=true;				
			}
		}
		if(szerepelE==false){
			evlista.push(vizsgaltTomb[i].csatlakozas.substring(0,4));
		}
	}	
	return evLista;
}

function EvSzamolo(vizsgaltTomb,evLista){
	let evMennyiseg=[];
	for(let i=0;i<evLista.length;i++){
		evMennyiseg.push(0)
	}
	for(let i=0;i<vizsgaltTomb.length;i++){
		for(let j=0;j<evLista.length;j++){
			if(evLista[j]==vizsgaltTomb[i].csatlakozas.substring(0,4){
				evMennyiseg[j]++;
			}
		}
	}
}

function StatisztikaKiirKONZOL(evLista,evMennyiseg){
	for(let i=0;i<evLista;i++){
		console.log(evLista[i]+":" +evMennyiseg[i]);
	}
	
}
</script>

