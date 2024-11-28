let weight = document.getElementById('weight');
let height = document.getElementById('height');

// Weight inputs

let inputKG = document.getElementById('weightinputkg');
let inputPound = document.getElementById('weightinputpd');

// height inputs

let inputMeters = document.getElementById('heightinputmt');
let inputCenti = document.getElementById('heightinputcm');
let inputFeet = document.getElementById('heightinputft');
let inputInch = document.getElementById('heightinputin');

let forms = document.querySelector('.forms');
let results = document.querySelector('.results');

// function to change placeholder when selected
//for height
weight.addEventListener('change', ()=>{
    if(weight.value == 'kg'){
        inputKG.style.display = 'block';
        inputPound.style.display = 'none';
    }
    else if(weight.value == 'pound'){
        inputKG.style.display = 'none';
        inputPound.style.display = 'block';
    }
})

//for weight
height.addEventListener('change', ()=>{
    if(height.value == 'meter'){
        inputMeters.style.display = 'block';
        inputCenti.style.display = 'none';
        inputFeet.style.display = 'none';
        inputInch.style.display = 'none';
    }
    else if(height.value == 'centimeter'){
        inputCenti.style.display = 'block';
        inputFeet.style.display = 'none';
        inputInch.style.display = 'none';
        inputMeters.style.display = 'none';
    }
    else if (height.value = 'feet'){
        inputFeet.style.display = 'block';
        inputInch.style.display = 'block';
        inputMeters.style.display = 'none';
        inputCenti.style.display = 'none';
    }
})

//function to calculate the BMI
function Calculate(){
    let weightinkg = 0;
    let heightinmt = 0;

// for weight

    if (weight.value = 'kg'){
        weightinkg = inputKG.value;
    }
    else if(weight.value ='pounds'){
        weightinkg = inputPound * 0.45359237;
    }

    // for height
    if(height.value = 'meter'){
        heightinmt = inputMeters.value; 
    }
    else if(height.value ='centimeter'){
        heightinmt = inputCenti.value * 0.01;
    }
    else if(height.value = 'feet'){
        heightinmt = inputFeet.value*0.3048 + inputPound* 0.0254;
    }

    let bmi = weightinkg / (heightinmt*heightinmt);
    

    //status
    let status = '';
    if(bmi<18.5){
        status ='You need to gain weight';
    }
    else if(bmi>=18.5 && bmi <=24.9){
        status ='You are normal in weight';
    }
    else if(bmi>=25 && bmi<=29.9){
        status ='You are overweight';
    }
    else{
        status ='You are obese';
    }

    //showing results
    results.style.display = 'flex';
    forms.style.display = 'none';

    results.querySelector('h2').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    results.querySelector('.status').innerHTML = status;
}
