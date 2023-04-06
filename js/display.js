const inputArray = document.querySelector("#box");
const outputText = document.querySelector("#outputText");

// Variable declaration
let output = "0";
let lightIntensity = 48;
let lightTreshold = 100;
let data = [120,110,150,20,150,40,10,170,30];


function displayArray() { 
    let txt = "";
    let k = 0;

    for (let i=0; i<=2; i++){
        txt += "<div id='row'>";
        for (let j=0; j<=2; j++){
            lightIntensity = data[k];
            
            txt += '<div id="boxes" style="background-color:rgb(' + lightIntensity + ', ' + lightIntensity +', ' + lightIntensity + ');"></div>';
            k++;
        }
        
        txt += "</div>";
    }

    inputArray.innerHTML = txt;
}

function inputArrayToTextOutput() {

    dataBin = "";

    for (let i=0; i<data.length; i++){ 
        if (data[i] >= lightTreshold)
            dataBin += "1";
        else if (data[i] < lightTreshold)
            dataBin += "0";
    }
    
    switch (dataBin) { // Letter recognition
        case "111010010": 
            output = "T";
            break;
        case "101111101":
            output = "H";
            break;
        case "111101001":
            output = "7";
            break;
        default:
            output = "Unknow";
      }
}

function textOutput() {
    let txt = "<p style='font-size:40px'>";
    txt += output;
    txt += "</p>";
    outputText.innerHTML = txt;
}

// Initialization 
document.addEventListener("DOMContentLoaded", (event) => {
    displayArray();
    inputArrayToTextOutput();
    textOutput();
});

// Data recovery

//TODO https://youtu.be/gQYsUjT-IBo