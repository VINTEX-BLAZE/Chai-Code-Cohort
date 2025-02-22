let  Age = document.getElementById('age');
let  Height_cm = document.getElementById('Height-cm');
let  Weight_Kg = document.getElementById('Weight-Kg');
const Calculate_BMI = document.querySelector('.bmi');
const Male = document.querySelector('.male-btn');
const Female = document.querySelector('.female-btn');
const verdict_output = document.querySelector('.verdict-output');
const BMI_output = document.querySelector('.bmi-output')
let flag = "";
Male.addEventListener('click', (e)=>{
    flag = "Male";
    console.log("Male button clicked, flag set to:", flag);
})
Female.addEventListener('click', (e)=>{
    flag = "Female";
    console.log("Female button clicked, flag set to:", flag);
})
Calculate_BMI.addEventListener('click', BMI_Calculator)

function BMI_Calculator (e){ 
    if(Age.value === "" || Height_cm.value === "" || Weight_Kg.value === ""){
        verdict_output.textContent = "Please Fill-up All Credentials";
    } else { 
        try {
            if (flag !== "") {
                BMI_output.textContent = ((Number(Weight_Kg.value) / Math.pow(Number(Height_cm.value),2))*10000).toFixed(2);
            } else {
                verdict_output.textContent = "Please select gender";
            }   
        } catch (error) {
            BMI_output.textContent = "Error Occurred , Please Try Again!!";
        }
    }
    if(BMI_output.textContent !==""){
        if(flag == "Male"){
                if (BMI_output.textContent < 18.5){
                    verdict_output.textContent = "Under weight"
                }
                else if (Number(BMI_output.textContent) >= 18.5 && Number(BMI_output.textContent) <= 24.9 ) {
                    verdict_output.textContent = "Normal Weight"
                }
                else if (Number(BMI_output.textContent) >= 25 && Number(BMI_output.textContent) <= 29.9 ) {
                    verdict_output.textContent = "Over weight"
                }
                else if (Number(BMI_output.textContent) >= 30 && Number(BMI_output.textContent) <= 34.9 ) {
                    verdict_output.textContent = "Obesity (Class I)";
                }
                else if (Number(BMI_output.textContent) >= 35 && Number(BMI_output.textContent) <= 39.9 ) {
                    verdict_output.textContent = "Obesity (Class II)";
                }
                else if (Number(BMI_output.textContent)>= 40){
                    verdict_output.textContent = "Extreme Obesity (Class III)"  
                }
            }
         else if (flag == "Female") { 
            if (Number(BMI_output.textContent) < 18.5){
                verdict_output.textContent = "Under weight"
            }
            else if (Number(BMI_output.textContent) >= 18.5 && Number(BMI_output.textContent) <= 24.9 ) {
                verdict_output.textContent = "Normal Weight";
            }
            else if (Number(BMI_output.textContent) >= 25 && Number(BMI_output.textContent) <= 29.9 ) {
                verdict_output.textContent = "Over weight";
            }
            else if (Number(BMI_output.textContent) >= 30 && Number(BMI_output.textContent) <= 34.9 ) {
                verdict_output.textContent = "Obesity (Class I)";
            }
            else if (Number(BMI_output.textContent) >= 35 && Number(BMI_output.textContent) <= 39.9 ) {
                verdict_output.textContent = "Obesity (Class II)";
            }
            else if (Number(BMI_output.textContent)>= 40){
                verdict_output.textContent = "Extreme Obesity (Class III)"  
            }
        }
    }
        setTimeout(() => {
            Age.value = "";
            Height_cm.value = "";
            Weight_Kg.value = "";
            flag = "";
            BMI_output.textContent = "";
            verdict_output.textContent = ""
        }, 6000); // Clears fields after 5 seconds    
}

