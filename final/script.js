// define a Constructor function
var Food = function(fName, fCal) {
    this.name = fName;
    this.cal = fCal;
};

FoodArray = []; // define an array to hold Customer objects

// pre-load array with 2 objects
let newFood1 = new Food("Banana",  20);
FoodArray.push(newFood1);

let newFood2 = new Food("Hot Dog",  450);
FoodArray.push(newFood2);

document.addEventListener("DOMContentLoaded", function (){

    document.getElementById("submit").addEventListener("click", function(){
        console.log(FoodArray);
    });

    for (i = 0; i < FoodArray.length; i++) {
            console.log(FoodArray[i]);
        }
});

function submitForm(){
    //derive the vlaues from the textboxes to be placed in array and outputted to console
    let fName = document.getElementById("foodName").value;
    let fCal = document.getElementById("calorieNumber").value;
    FoodArray.push(new Customer(fName, fCal));

    //clear text boxes for new entry
    document.getElementById("foodName").value = "";
    document.getElementById("calorieNumber").value = "";
}