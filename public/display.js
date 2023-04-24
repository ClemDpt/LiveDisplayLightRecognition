// Connexion with the html file
const inputArray = document.querySelector("#box");
const outputText = document.querySelector("#outputText");

// Declaration of variables
let output = ""; 
let lightTreshold = 100; // From 0 to 255 where should be the limit between light and dark
//let data = [220,210,250,20,250,40,10,230,30];

// Recovering data from the server
function fetchData() {
    fetch('/getData')
      .then(response => response.text())
      .then(data => {
        finalData = data.trim().split(" ").map(val => parseInt(val));
        // Calibration of the data
        for (let i = 0; i < finalData.length; i++) {
            finalData[i] = finalData[i]*3;
          }
      })
      .catch(error => {
        console.error(error);
      });
}

// Display the data array
function displayArray() { 
    let txt = "";
    let k = 0; // Goes from 0 to 8 to read the incomming data
    for (let i=0; i<=2; i++){
        txt += "<div id='row'>";
        for (let j=0; j<=2; j++){
            let lightIntensity = finalData[k];
            txt += '<p id="boxes" style="background-color:rgb(' + lightIntensity + ', 0, ' + (255-lightIntensity) + '); font-size:25px;color:white">' 
            + lightIntensity /*display the data inside each boxes*/+ '</p>';
            k++;
        }
        txt += "</div>";
    }
    inputArray.innerHTML = txt; // Send the data to html file
}

// Determine the letter corresponding
function inputDataToTextOutput() {
    let dataBin = "";
    // Transform high number to 1 and low to 0
    for (let i=0; i<finalData.length; i++){ 
        if (finalData[i] >= lightTreshold)
            dataBin += "1";
        else if (finalData[i] < lightTreshold)
            dataBin += "0";
    }
    // Letter recognition
    switch (dataBin) { 
        case "111010010": 
            output = "T";
            break;
        case "101111101":
            output = "H";
            break;
        case "111101001":
            output = "7";
            break;
        case "111101111":
            output = "0";
            break;
        case "111010111":
            output = "I";
            break;
        case "101101111":
            output = "U";
            break;
        case "010110111":
            output = "1";
            break;
        default:
            output = "?";
      }
}

// Display the text output
function textOutput() {
    let txt = "<p id='outputResult'style='font-size:75px; color:white'>";
    txt += output;
    txt += "</p>";
    outputText.innerHTML = txt; // Send the data to html file
}

// Initialization + loop
document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(function() {
        fetchData();
        displayArray();
        inputDataToTextOutput();
        textOutput();
    }, 500);
});




