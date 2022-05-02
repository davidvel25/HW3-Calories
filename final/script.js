// this is a food constructor which is used to create new Food objects
var Food = function(pName, pCal) {
    //assigns the name to the parameter of the food inputted
    this.name = pName;
    //assigns the calories to the parameter of the food inputted
    this.cal = parseInt(pCal);
};

//creates an empty array to hold all the Food objects (which will later be outputted to the console)
FoodArray = [];

//Food #1 pre-loaded into the array
let newFood1 = new Food("Banana", 20);
//push food item #1 (newFood1) to the "FoodArray" array which was constructed earlier
FoodArray.push(newFood1);

//Food #2 pre-loaded into the array
let newFood2 = new Food("Hot Dog", 450);
//push food item #2 (newFood2) to the "FoodArray" array which was constructed earlier
FoodArray.push(newFood2);

//a series of commands are executed with this submitForm() function, involving extracting the values from the textboxes
function submitForm(){
    //derive the name of the food in the textbox and assign it to the "vName" variable
    let vName = document.getElementById("foodName").value;
    //derive the calories of the food in the textbox and assign it to the "vCal" variable
    let vCal = document.getElementById("calorieNumber").value;
    // console.log("submit form called");
    // console.log(vName);
    // console.log(vCal);
    //once the values of the textbox have been extracted, push this new Food to the "FoodArray" array
    FoodArray.push(new Food(vName, vCal));
}

//a function to clear the text fields
function clearFields(){
        //clear the text boxes for new entries to be made
        document.getElementById("foodName").value = "";
        document.getElementById("calorieNumber").value = "";
        //prints the "FoodArray" array to the console
        // console.log(FoodArray);
}

//a function to calculate the total Calories of all the foods in the "foodArray" array
function calculateTotal(){
    //initial calorie Count starts at 0 (initializing the variable)
    let calorieCount = 0;

    //creates an array that runs through each item (food) in the "foodArray" array (traverses thru the array)
    for (i = 0; i < FoodArray.length; i++) {
        //updates the "calorieCount" variable that was initially at 0 by adding the calorie number of the new food item
        calorieCount += FoodArray[i].cal;
        // console.log(FoodArray[i]);
        // console.log(calorieCount);
    }
    //display the final calorieCount after adding all the calories from all the foods in the "FoodArray" into the textbox titled "calorieTotal"
    document.getElementById("calorieTotal").value = calorieCount;
}

// DOMContentLoaded essentially runs the code that is contained within it ONCE the page FULLY loads
document.addEventListener("DOMContentLoaded", function (){

    //once the "submit button" has been clicked, run the following function positioned inside this eventListener
    document.getElementById("submit").addEventListener("click", function(){
        //prints the "FoodArray" array to the console
        console.log(FoodArray);
        //runs the "submitForm" function which extracts the values of the textbox input fields and puts the data into the "FoodArray" array
        submitForm();
        //runs the "calculateTotal" function which calculates the total calories of all food items in "FoodArray" array and displays them into the corresponding textbox
        calculateTotal();
        //runs the "clearFields" function so that the user is now able to input a new food into the text fields
        clearFields();
    });
});