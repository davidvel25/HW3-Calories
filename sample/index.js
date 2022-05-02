// code the runs immediately when page is first loaded

// define a Constructor function
var Customer = function(pName, pCity,  pZip) {
    this.name = pName;
    this.city = pCity;
    this.zip = pZip;
};

CustomerArray = []; // define an array to hold Customer objects

// pr-load array with 2 objects
let newCustomer1 = new Customer("Sue",  "Bellevue",  99003);
CustomerArray.push(newCustomer1);

let newCustomer2 = new Customer("Bill",  "Bellevue",  99003);
CustomerArray.push(newCustomer2);


document.addEventListener("DOMContentLoaded", function (event) {

// define what should happend when the "show one" button is clicked
    document.getElementById("show").addEventListener("click", function () {
        console.log(CustomerArray);
        let message = "Name  City  ZIP\n";  // add heading
        // search thru array to find which object has the correct name property
        for (i = 0; i < CustomerArray.length; i++) {
            if( document.getElementById("whichPerson").value == CustomerArray[i].name){
            message = message + CustomerArray[i].name + "  " + CustomerArray[i].city +  "  " + CustomerArray[i].zip;
            }
        }
        document.getElementById("output").value = message;  // write out the data
    });
    
});

// define what should happen when the form is submitted
function formSubmitEvent() {
    let tname = document.getElementById("custname").value;
    let tCity = document.getElementById("city").value;
    let tZip = document.getElementById("zip").value;
    CustomerArray.push( new Customer(tname, tCity, tZip))
    // clear text boxes
    document.getElementById("custname").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zip").value = "";
}


