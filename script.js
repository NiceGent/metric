
let userInput = document.getElementById("user-input");
let convertBtn = document.getElementById("convert-btn");
let lengthOutput = document.getElementById("length-output");
let volOutput = document.getElementById("volume-output");
let massOutput = document.getElementById("volume-output");


convertBtn.addEventListener("click", function() {

    let usersInput = userInput.value;

    let meterToFeet = usersInput * 3.28084;
    let feetToMeter = usersInput * 0.3048;


    let literToGallon = usersInput * 0.264172;
    let GallonToLiter = usersInput * 4.54609;


    let KilogramToPounds = usersInput * 2.20462;
    let poundstoKilograms = usersInput * 0.453592;
    
    if(isNaN(userInput.value)) {
        console.log(userInput.value)

        userInput.style.border = "3px solid red";

    } else {

        userInput.style.border = "3px solid #FFFFFF";

        lengthOutput.textContent = `${usersInput} meters = ${meterToFeet.toFixed(2)} feet | ${usersInput} feet = ${feetToMeter.toFixed(2)} meters`

        volOutput.textContent = `${usersInput} liters = ${literToGallon.toFixed(2)} gallons | ${usersInput} gallons = ${GallonToLiter.toFixed(2)} liters`

        massOutput.textContent = `${usersInput} kilograms = ${KilogramToPounds.toFixed(2)} points | ${usersInput} pounds = ${poundstoKilograms.toFixed(2)} kilograms`

    }
})