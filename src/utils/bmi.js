"use strict";

const bmiopen = () => {

const heightInput = document.getElementById("height");        
const heightRange = document.getElementById("heightRange");    
const weightInput = document.getElementById("weight");         
const weightRange = document.getElementById("weightRange");
const bmiSpan = document.getElementById("bmi");           
const maxWeightText = document.getElementById("maxWeight"); 


function updateBMI() {
  
  const height = parseFloat(heightInput.value); 
  const weight = parseFloat(weightInput.value);

  
  if (!height || !weight) return;

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  const roundedBMI = bmi.toFixed(1);

  bmiSpan.textContent = roundedBMI;

  const maxProperWeight = 25 * (heightInMeters * heightInMeters);

  maxWeightText.textContent = `Your Maximum Proper Weight: ${maxProperWeight.toFixed(1)} kg`;
}


heightInput.addEventListener("input", () => {
  heightRange.value = heightInput.value; 
  updateBMI(); 
});


heightRange.addEventListener("input", () => {
  heightInput.value = heightRange.value; 
  updateBMI(); 
});


weightInput.addEventListener("input", () => {
  weightRange.value = weightInput.value;
  updateBMI();
});

weightRange.addEventListener("input", () => {
  weightInput.value = weightRange.value;
  updateBMI();
});


updateBMI();

};

export default bmiopen;