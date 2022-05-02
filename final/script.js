// define a Constructor function
var Food = function(fName, fCal) {
    this.name = parseInt(fName);
    this.cal = parseInt(fCal);
};

FoodArray = []; // define an array to hold Customer objects

let calorieCount = 0;

// pre-load array with 2 objects
let newFood1 = new Food("Banana", 20);
FoodArray.push(newFood1);

let newFood2 = new Food("Hot Dog", 450);
FoodArray.push(newFood2);

function submitForm(){
    //derive the vlaues from the textboxes to be placed in array and outputted to console
    let fName = document.getElementById("foodName").value;
    let fCal = document.getElementById("calorieNumber").value;
    FoodArray.push(new Food(fName, fCal));

    //clear text boxes for new entry
    document.getElementById("foodName").value = "";
    document.getElementById("calorieNumber").value = "";
}

document.addEventListener("DOMContentLoaded", function (){

    document.getElementById("submit").addEventListener("click", function(){
        console.log(FoodArray);
    });

    for (i = 0; i < FoodArray.length; i++) {
            calorieCount += FoodArray[i].fCal;
            console.log(FoodArray[i]);
        }
});

document.getElementById("calorieTotal").value = calorieCount;

