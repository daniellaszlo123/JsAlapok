/*Tömb*/

var tomb=[];
var tomb2=[1, 2, 3, 4, 5];
var tomb3=[5];
console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);
console.log(tomb2[0]);

var gyumolcs = ["alma", "körte", "szivla", "narancs", "szőlő", "eper", "ananász"];
var gyumolcsSin=["piros", "sárga", "kék", "sárga", "zöld", "piros", "sárga"];
var gyumolcsAr=[200, 180, 320,310,500,3000,1400];

for (let index = 0; index < gyumolcs.length; index++) {
    console.log (gyumolcs[index]);
}

var i=0;
while (i<gyumolcsSin.length && !(gyumolcsSin[i]===("sárga"))) {
    i++;
}

var van=i<gyumolcsSin.length;

console.log("Van benne sárga gyülömcs: "+(van ? "igaz":"hamis"));

/*Hány sárga gyümölcs van?*/
var db=0;
for (let index = 0; index < gyumolcsSin.length; index++) {
    if(gyumolcsSin[index]==="sárga"){
        db++;
    }
}
console.log("Összes sárga gyümölcsök száma: "+db);

/*Mennyi a gyümölcsök összértéke?*/
var osszeg=0;
for (let index = 0; index < gyumolcsAr.length; index++) {
    osszeg+=gyumolcsAr[index];
}
console.log("Gyümölcsök számának összege: "+osszeg);

/*Piros vagy sárga gyümölcsből van több? */
var sDb=0, pDb=0;
for (let index = 0; index < gyumolcsSin.length; index++) {
    if(gyumolcsSin[index]==="piros"){
        pDb++;
    }else if (gyumolcsSin[index]==="sárga") {
        sDb++;
    }
}

if (pDb>sDb) {
    console.log("A piros gyümölcsök száma több mint a sárga gyümölcsök száma");
} else {
    console.log("A sárga gyümölcsök száma több mint a piros gyümölcsök száma");
}

/* van-e 100ft alatti gyümölcs? */
i=0;
while (i<gyumolcsAr.length && !(gyumolcsAr[i]<100)) {
    i++;
}
van=i<gyumolcsAr.length;
console.log("Van benne 100ft alatti gyülömcs: "+(van ? "igaz":"hamis"));

/*Mennyi a gyümölcsök átlag ára? */
var atlag=osszeg/gyumolcsAr.length;
console.log("A gyümölcsök átlag ára: "+atlag);

/*Melyik gyümölcs ára van 500ft felett?*/
i=0;
while (i<gyumolcsAr.length && !(gyumolcsAr[i]>500)) {
    i++;
}
if (i<gyumolcsAr.length) {
    console.log("Az 500 ft feletti gyümölcs neve: "+gyumolcs[i]+" ára: "+gyumolcsAr[i]);
} else {
    console.log("Nincs 500ft feletti gyümölcs");
}