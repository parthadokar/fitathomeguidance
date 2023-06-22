// FORM 

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// FAQ

const items = document.querySelectorAll(".accordion-item h2");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// BMI

// select the calculate button
let calculate = document.querySelector('.calculate');

// attach event listener to the button
calculate.addEventListener('click', findBMI);

// function to find the BMI
function findBMI() {
let height = +document.querySelector('#height').value;
let weight = +document.querySelector('#weight').value;
// check height & weight are a valid number
if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
    alert('Please fill all fields with valid numbers');
    return;
  }
// convert height to meters
  height = height / 100;
  let bmi = weight / (height * height);
  showResult(bmi);
    }

// function to show the result
function showResult(bmi) {
  let result = document.querySelector('.result');
  let bmiStatus;
  if (bmi < 18.5) {
    bmiStatus = 'Underweight';
  } else if (bmi < 25) {
    bmiStatus = 'Normal';
  } else if (bmi < 30) {
    bmiStatus = 'Overweight';
  } else {
    bmiStatus = 'Obese';
  }
    result.innerHTML = `<div class=${bmiStatus}>Your BMI is ${bmi.toFixed(2)} and you are ${bmiStatus}.</div>`;
  }


  // Body Fat 

  function calculateMaleBodyFat() {
    let height = document.getElementById("maleHeight").value;
    let weight = document.getElementById("maleWeight").value;
    let waist = document.getElementById("maleWaist").value;
    let neck = document.getElementById("maleNeck").value;

    let bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    let leanBodyMass = weight - (weight * bodyFatPercentage / 100);

    document.getElementById("maleResult").innerHTML = "Estimated body fat percentage: " + bodyFatPercentage.toFixed(2) + "%<br>";
    document.getElementById("maleResult").innerHTML += "Lean body mass: " + leanBodyMass.toFixed(2) + " kg";
  }

  function calculateFemaleBodyFat() {
    let height = document.getElementById("femaleHeight").value;
    let weight = document.getElementById("femaleWeight").value;
    let waist = document.getElementById("femaleWaist").value;
    let neck = document.getElementById("femaleNeck").value;
    let hip = document.getElementById("femaleHip").value;

    let bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    let leanBodyMass = weight - (weight * bodyFatPercentage / 100);

    document.getElementById("femaleResult").innerHTML = "Estimated body fat percentage: " + bodyFatPercentage.toFixed(2) + "%<br>";
    document.getElementById("femaleResult").innerHTML += "Lean body mass: " + leanBodyMass.toFixed(2) + " kg";
  }

  // Calorie Intake
 
  function calculateCalorieIntake() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let activityLevel = document.getElementById("activityLevel").value;

    let calorieIntake;

    if (gender.toLowerCase() === "male") {
      calorieIntake = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender.toLowerCase() === "female") {
      calorieIntake = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      console.log("Invalid gender input.");
      return;
    }

    if (activityLevel.toLowerCase() === "sedentary") {
      calorieIntake *= 1.2;
    } else if (activityLevel.toLowerCase() === "moderate") {
      calorieIntake *= 1.55;
    } else if (activityLevel.toLowerCase() === "active") {
      calorieIntake *= 1.9;
    } else {
      console.log("Invalid activity level input.");
      return;
    }

    document.getElementById("calorieIntakeResult").innerHTML = "Your estimated daily calorie intake is: " + calorieIntake.toFixed(2) + " calories.";
  }