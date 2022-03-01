//console.log("script-ben");

function init(){
    document.getElementById("uzenet").innerHTML="Szia!";    
    //console.log("init-ben");
}

window.addEventListener("load", init, false);

/***********************************************/

/*Változók a js-ben (var/let/const)*/

var ertek="szöveg";
var a="2";
var b=3;
var osszeg=Number(a)+Number(b);
console.log(osszeg);

var logikai=true;

if(logikai){
    console.log("igaz");
}else{
    console.log("hamis");
}

var szin="blue";

if(szin==="red") {
    console.log("piros");
}
else if(szin==="orange"){
    console.log("narancs");
}
else if(szin==="blue"){
    console.log("kék");
}
else{
    console.log("Nem ismerem ezt a színt!");
}

switch(szin) {
    case "red":
        console.log("piros");
        break;
    case "orange":
        console.log("narancs");
        break;
    case "blue":
        console.log("kék");
        break;
    default:
        console.log("Nem ismerem ezt a színt!");      
}

var szam="2";

if(szam===2){
    /*console.log("Ez egy 2-es szám!");
    console.log(typeof szam);*/
} else{
    /*console.log("Ez nem szám!");
    console.log(typeof szam);*/
}