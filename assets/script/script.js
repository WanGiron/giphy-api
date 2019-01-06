

// global variables
var fruits = ['mango', 'grape', 'orange'];
console.log(fruits);

// function to generate gif from API when buttons are pressed    key=dhLFlW8aHxB3KJixF0PIyztPiyCqOqgq
function getData(){     
var input = $(this).attr("data-name");        
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=dhLFlW8aHxB3KJixF0PIyztPiyCqOqgq&limit=10";

$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
    console.log(response);
    // to clear gif from previous fruit
    $("#fruitGifBox").empty();
    // generating the img and appending to DOM
    var newGif = response.data;
    for(i in newGif){
     $("#fruitGifBox").append("<img src='"+newGif[i].images.original.url+" 'style='width: 200px;'/>");   
    }
}); 
}


// function to generate the  fruit buttons from the array
function fruitButtons(){ 
// to not repeat buttons already rendered
$("#main-box").empty();
// creating buttons for each array element
for(var i = 0; i < fruits.length; i++ ){
var a = $("<button>");
// Adding a class of fruit-btn to our button
a.addClass("fruit-btn");
// Adding a data-attribute
a.attr("data-name", fruits[i]);
// Providing the initial button text
a.text(fruits[i]);
// Adding the button to the main-box div
$("#main-box").append(a);

}}

// function to generate the array-  push values from user input
$("#getFruit").on("click", function(event){
    var newFruit = $("#userInput").val().trim();
    // push from form input to array fruit
    fruits.push(newFruit);
    // run function to create buttons to main-box div
    fruitButtons();
})  

fruitButtons();
// run function on click that calls the gif from API according to buttton assigned value
$(document).on("click", ".fruit-btn", getData);