function calculate(){
    var bmi;
    var result = document.getElementById("result");
    
    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-value").textContent = height + "cm";

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-value").textContent = weight + "kg";
    
    bmi = (weight / Math.pow( (height/100), 2)).toFixed(1);
    result.textContent = bmi;

    if(bmi < 18.5){
        category = "Underweight";
        result.style.color = "#ffc44d";
    }
    else if(bmi >= 18.5 && bmi<= 24.9){
        category = "Normal";
        result.style.color = "#0be881";
    }
    else if(bmi >= 25 && bmi<= 29.9){
        category = "Overweight";
        result.style.color = "#ff884d";
    }
    else{
        category = "Obese";
        result.style.color = "#ff5e57";
    }
    document.getElementById("category").textContent = category;
}