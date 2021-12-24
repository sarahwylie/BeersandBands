// Initial array of brewerys
var brewerys = ["Chicago", "Raleigh", "Denver", "Asheville"];

// displaybreweryInfo function re-renders the HTML to display the appropriate content
function displaybreweryInfo() {
  var brewery = $(this).attr("data-name");
  var queryURL =
    "https://api.openbrewerydb.org/breweries/search?query=" + brewery;
  console.log(queryURL);
  // Creating an AJAX call for the specific brewery button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // Creating a div to hold the brewery
    var breweryDiv = $("<div class='brewery'>");

    // Storing the rating data
    // for (i=0; i < results.length; i++){
    // return <h3>response[i].phone</h3>
    // }
    let phone = response[1].phone;
    var name = response[1].name;
    var city = response[1].city;
    var state = response[1].state;
    var postal_code = response[1].postal_code;
    var street = response[1].street;

    // <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
    // <br>
    // <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    // </div>
    // </div>
    // <footer class="card-footer">
    // <a href="#" class="card-footer-item">Save</a>
    // <a href="#" class="card-footer-item">Edit</a>
    // <a href="#" class="card-footer-item">Delete</a>
    // </footer>
    // </div>
    var address = $(
      '<div class="brewResults content">${street}</div> <div class="content">${city}</div> <div class="content">${state}</div><div class="content">${postal_code}</div>'
    );
    var card = $("<div class='card'><header class='card-header'>");
    breweryDiv.append(card);

    var card2 = $("<h3>").text(name);
    breweryDiv.append(card2);
    var pOne = $("<p>").text("Phone: " + phone);
    breweryDiv.append(pOne);

    var pTwo = $("<p>").text(street);
    breweryDiv.append(pTwo);

    var pThree = $("<p>").text(city + ", " + state + " " + postal_code);
    breweryDiv.append(pThree);
    var queryURL =
      // "<a href='https://www.google.com/maps/place/" + city+",+"+state+"+"+postal_code+"'>Map</a>";
      "<a href='https://www.google.com/maps/place/" + name + "'>Map</a>";
    breweryDiv.append(queryURL);

    // Putting the entire brewery above the previous brewerys
    $("#brewerys-view").prepend(breweryDiv);
  });
}

// Function for displaying brewery data
function renderButtons() {
  // Deleting the brewerys prior to adding new brewerys
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of brewerys
  for (var i = 0; i < brewerys.length; i++) {
    // Then dynamicaly generating buttons for each brewery in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of brewery-btn to our button
    a.addClass("brewery-btn");
    // Adding a data-attribute
    a.attr("data-name", brewerys[i]);
    // Providing the initial button text
    a.text(brewerys[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where a brewery button is clicked
$("#add-brewery").on("click", function (event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var brewery = $("#brewery-input").val().trim();

  // Adding brewery from the textbox to our array
  brewerys.push(brewery);

  // Calling renderButtons which handles the processing of our brewery array
  renderButtons();
});

// Adding a click event listener to all elements with a class of "brewery-btn"
$(document).on("click", ".brewery-btn", displaybreweryInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();

$("#thing_to_click").on("click", function () {
  window.location = "./results.html";
});
