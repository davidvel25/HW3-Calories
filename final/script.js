// define a Constructor function
var Food = function(pName, pCal) {
    this.name = pName;
    this.cal = parseInt(pCal);
};

FoodArray = []; // define an array to hold Customer objects

// pre-load array with 2 objects
let newFood1 = new Food("Banana", 20);
FoodArray.push(newFood1);

let newFood2 = new Food("Hot Dog", 450);
FoodArray.push(newFood2);

function submitForm(){
    //derive the vlaues from the textboxes to be placed in array and outputted to console
    let vName = document.getElementById("foodName").value;
    let vCal = document.getElementById("calorieNumber").value;
    console.log("submit form called");
    console.log(vName);
    console.log(vCal);
    FoodArray.push(new Food(vName, vCal));
}

function clearFields(){
        //clear text boxes for new entry
        document.getElementById("foodName").value = "";
        document.getElementById("calorieNumber").value = "";
        console.log(FoodArray);
}

function calculateTotal(){
    let calorieCount = 0;
    for (i = 0; i < FoodArray.length; i++) {
        calorieCount += FoodArray[i].cal;
        console.log(FoodArray[i]);
        console.log(calorieCount);
    }
    document.getElementById("calorieTotal").value = calorieCount;
}

document.addEventListener("DOMContentLoaded", function (){

    document.getElementById("submit").addEventListener("click", function(){
        console.log(FoodArray);
        submitForm();
        calculateTotal();
        clearFields();
    });
});