
function questionOne() {

    document.getElementById("cat").addEventListener("click", function() { //event listener based on mouse click
        document.querySelector("h3").innerHTML = "Incorrect. Please try again."; //DOM manipulation based on answer chosen by user.
    })

    document.getElementById("dog").addEventListener("click", function() {
        document.querySelector("h3").innerHTML = "Great job!"; 
    })
    
    document.getElementById("fish").addEventListener("click", function() {
        document.querySelector("h3").innerHTML = "Incorrect. Please try again.";
    })  
}

questionOne(); //calls the function; the h3 element changes based on which radio button is clicked.

