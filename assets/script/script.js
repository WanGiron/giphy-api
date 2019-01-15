

// global variables
var fruits = ['mango', 'grape', 'orange', 'coconut'];
console.log(fruits);
var frutaMia = [];


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
     $("#fruitGifBox").append("<img src=' "+newGif[i].images.original.url+" 'style='width: 200px;' class='animated gif" + newGif[i].id + "' data-gif='" + newGif[i].id + "' />");
     $("#fruitGifBox").append("<img src=' "+newGif[i].images.original_still.url+" 'style='width: 200px;' class='still gif" + newGif[i].id + "' data-gif='" + newGif[i].id + "' />"); 
     hideAnimated();  
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

// to hide and show img function
function hideStill (){
    $(".still").hide();
}

function hideAnimated (){
    $(".animated").hide();
}


function animate(){
    $(".still.gif" + $(this).attr("data-gif")).hide();
    $(".animated.gif" + $(this).attr("data-gif")).show();
    console.log($(this).parent().html());
}

function freeze (){
    $(".animated.gif" + $(this).attr("data-gif")).hide();
    $(".still.gif" + $(this).attr("data-gif")).show();
}




fruitButtons();

// run function on click that calls the gif from API according to buttton assigned value
$(".gifButtonAnimated").on("click", ".fruit-t=btn", getData);

$(document).on("click", ".fruit-btn", getData);

// on click function gif to animate and stop
$(document).on("click", ".still", animate);
$(document).on("click", ".animated", freeze);