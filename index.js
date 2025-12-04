/* all JS/HTML/CSS code was written by fishwithnoeye unless stated otherwise,
i dont particularly care if you use my code or change it in anyway.
just know where it came from i guess */

var lastName = document.getElementById("lastname");
lastName.addEventListener("change", () => {
    if (lastName.value.length == 6){
        lastName.value = lastName.value + ",";
    }
})
/* var hexcode = document.getElementById("hex");
hexcode.addEventListener("change", () => {
    if (hexcode.value.length == 6){
        hexcode.value = "#"+hexcode.value;
    }
}) */


/* sadly this below Doesnt Work...or whateva*/

/*function displayFileName() { 
    const fileInput = document.getElementById('fileInput');
    const fileName = fileInput.files[0].name;
    var myImage = new Image();
    myImage.src = fileName;
    myImage.id = "trollodex-avatar";
    if (document.getElementById("icon").firstChild){
        document.getElementById("icon").replaceChild(myImage, document.getElementById("icon").firstChild);
    } else{
        document.getElementById("icon").appendChild(myImage);
    }
} */

function displayFileName() {

    var fileInput = document.getElementById("fileInput");
    var canvas = document.getElementById("canvasicon");
    var ctx = canvas.getContext("2d");

    var file = fileInput.files[0]; 
    if (!file) return; 
    var img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(img.src);
    }
}

function displaySigilName() {
    var sigilInput = document.getElementById("sigilInput");
    var canvas = document.getElementById("canvassigil");
    var ctx = canvas.getContext("2d");

    var file = sigilInput.files[0]; 
    if (!file) return; 
    var img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(img.src);
    }
}
function displayColor(){
    const colorInput = document.getElementById('colorInput');
    const color = document.getElementById('colorInput').value;
    let colorbar = document.getElementById('color');
    colorbar.style.backgroundColor = color;

}
/* 

!!! MY (WRONG) MATH OF RGB -> HSV STUFF.
CORRECT MATH IS UNDER THE HEMOTYPE() FUNCTION. !!!

    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);

    let rh = r/255;
    let gh = g/255;
    let bh = b/255;

    cmax = Math.max(rh, gh, bh);
    cmin = Math.min(rh, gh, bh);
    delta = cmax-cmin;

    if (delta == 0){
        hue = 0;
    }else if(cmax == rh){
        hue = (gh-bh)/delta;
    } else if (cmax == gh) {
        hue = ((bh-rh)/delta)+2;
    } else if (cmax == bh) {
        hue = ((rh-gh)/delta)+4;
    }

    if (hue>6){
        hue = hue%6;
    } else if (hue < 0){
        hue = (hue%6)+6;
    }

    hue = Math.round((hue/6)*255);
    val = Math.round(cmax*255);
    if (val == 0){
        sat = 0;
    } else {
        sat = delta/val;
    }
    sat = Math.round(sat*255);

*/
function hemotype(){
    let grades = ["a","b","c","d","f","s"];
    let grade = document.getElementById("grade");
    grade.textContent = grades[Math.floor(Math.random()*grades.length)];
    let color = document.getElementById('color').style.backgroundColor;
    let colorInput = document.getElementById('colorInput');
    r = parseInt(color.split(",")[0].split("(")[1]);
    g = parseInt(color.split(",")[1]);
    b = parseInt(color.split(",")[2].split(")")[0]);

    let rh = r/255;
    let gh = g/255;
    let bh = b/255;

    cmax = Math.max(rh, gh, bh);
    cmin = Math.min(rh, gh, bh);
    delta = cmax - cmin;

    
    if (delta == 0){
        hue = 0;
    } else if (cmax == rh){
        hue = 60 * ((gh - bh) / delta);
    } else if (cmax == gh){
        hue = 60 * (((bh - rh) / delta) + 2);
    } else if (cmax == bh){
        hue = 60 * (((rh - gh) / delta) + 4);
    }
    if (hue < 0){
        hue += 360;
    }
    hue = Math.round(hue);
    val = Math.round(cmax*255);
    val = Math.round(val / 255 * 100);

    if (val == 0){
        sat = 0;
    } else {
        sat = delta/val;
    }
    sat = Math.round(sat*255);
    let caste;
    let subshade;

    if ((hue >= 346 && hue <= 360) || (hue >= 0 && hue <= 15)) {
        caste = "Red";
        if (val >= 0 && val <= 32) {
            subshade = "Maroon";
        } else if (val >= 33 && val <= 66) {
            subshade = "Rust";
        } else if (val >= 67 && val <= 100) {
            subshade = "Scarlet";
        }

    } else if (hue >= 16 && hue <= 45) {
        caste = "Bronze";
        if (val >= 0 && val <= 32) {
            subshade = "Umber";
        } else if (val >= 33 && val <= 66){
            subshade = "Cola";
        } else if (val >= 67 && val <= 100){
            subshade = "Clay";
        }

    } else if (hue >= 46 && hue <= 75) {
        caste = "Yellow";
        if (val >= 0 && val <= 32) {
            subshade = "Cider";
        } else if (val >= 33 && val <= 66){
            subshade = "Mustard";
        } else if (val >= 67 && val <= 100){
            subshade = "Gold";
        }

    } else if (76 <= hue && hue <= 105) {
        caste = "???";
        subshade = "Lime";

    } else if (hue >= 106 && hue <= 135) {
        caste = "Green";
        if (val >= 0 && val <= 32) {
            subshade = "Ochre";
        } else if (val >= 33 && val <= 66){
            subshade = "Olive";
        } else if (val >= 67 && val <= 100){
            subshade = "Clover";
        }

    } else if (hue >= 136 && hue <= 165) {
        caste = "Jade";
        if (val >= 0 && val <= 32) {
            subshade = "Moss";
        } else if (val >= 33 && val <= 66){
            subshade = "Virdian";
        } else if (val >= 67 && val <= 100){
            subshade = "Fern";
        }

    } else if (hue >= 166 && hue <= 195) {
        caste = "Teal";
        if (val >= 0 && val <= 32) {
            subshade = "Cyprus";
        } else if (val >= 33 && val <= 66){
            subshade = "Turquoise";
        } else if (val >= 67 && val <= 100){
            subshade = "Cyan";
        }

    } else if (hue >= 196 && hue <= 225) {
        caste = "Blue";
        if (val >= 0 && val <= 32) {
            subshade = "Prussian";
        } else if (val >= 33 && val <= 66){
            subshade = "Cobalt";
        } else if (val >= 67 && val <= 100){
            subshade = "Aegean";
        }

    } else if (hue >= 226 && hue <= 255) {
        caste = "Indigo";
        if (val >= 0 && val <= 32) {
            subshade = "Midnight";
        } else if (val >= 33 && val <= 66){
            subshade = "Navy";
        } else if (val >= 67 && val <= 100){
            subshade = "Denim";
        }

    } else if (hue >= 256 && hue <= 285) {
        caste = "Purple";
        if (val >= 0 && val <= 32) {
            subshade = "Aubergine";
        } else if (val >= 33 && val <= 66){
            subshade = "Jam";
        } else if (val >= 67 && val <= 100){
            subshade = "Amethyst";
        }

    } else if (hue >= 286 && hue <= 315) {
        caste = "Violet";
        if (val >= 0 && val <= 32) {
            subshade = "Byzantine";
        } else if (val >= 33 && val <= 66){
            subshade = "Magenta";
        } else if (val >= 67 && val <= 100){
            subshade = "Orchid";
        }

    } else if (hue >= 316 && hue <= 345) {
        caste = "Fuchsia";
        if (val >= 0 && val <= 32) {
            subshade = "Wine";
        } else if (val >= 33 && val <= 66){
            subshade = "Cerise";
        } else if (val >= 67 && val <= 100){
            subshade = "Rose";
        }
    }

    
    var hexr = r.toString(16);
    var hexg = g.toString(16);
    var hexb = b.toString(16);
    if (hexr.length === 1){
        hexr = "0"+hexr;
    }
    if (hexg.length === 1){
        hexg = "0"+hexg;
    }
    if (hexb.length === 1){
        hexb = "0"+hexb;
    }
    console.log("#"+hexr+hexg+hexb);
    console.log(`${caste} + ${subshade}, ${r},${g},${b}`);
    document.getElementById("hex").textContent = `#${hexr}${hexg}${hexb}`;
    document.getElementById('hemo').textContent = `${caste}§${subshade}`;
}
let select = document.getElementById("bondmates");
select.addEventListener("change", () => {
    console.log(`Selection: ${select.value}`);
    if (select.value == "N/A"){
        console.log("N/A - Black");
        select.style.color = "black";
        select.style.fontWeight = "normal";
        document.getElementById('mate').style.visibility = "hidden";
    } else if (select.value == "K"){
        console.log("Kismesis - Black");
        select.style.color = "black";
        select.style.fontWeight = "bold";
        document.getElementById('mate').style.visibility = "visible";
    } else if (select.value == "M"){
        console.log("Matesprite - Red");
        select.style.color = "red";
        select.style.fontWeight = "bold";
        document.getElementById('mate').style.visibility = "visible";
    }
});


/* i stole this code below from w3schools 
cuz i cant be bothered to figure it out
EDIT: technically this code isnt even necessary but im
keeping it here for future reference */

/*
function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "white";

    } else {
        document.body.style.backgroundColor = "white";
    }
}
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 430px)")
// Call listener function at run time
myFunction(x);
// Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
}); */


var fileInput = document.getElementById("fileInput");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

fileInput.onchange = function () {
    var file = fileInput.files[0];
    if (!file) return;

    var img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(img.src);
    };
};