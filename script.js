var api = `1dSMNu004yPP163tvnnPbdA3cwZleRuJ`;
var cityResult = document.querySelector(".city-result")
var cityInputEl = document.querySelector("#location")
var cityBtn = document.querySelector(".add-brewery");
var eventOutput = document.querySelector(".event-results")
var startDateInput = document.querySelector("#start-date")
var endDateInput = document.querySelector("#end-date")
var breweryOutput = document.querySelector("#breweries-view")

// displaybreweryInfo function re-renders the HTML to display the appropriate content
function displaybreweryInfo(cityName) {
    var city = cityName;
  var queryURL =
    `https://api.openbrewerydb.org/breweries?by_city=${city}`;
  console.log(queryURL);
  // Creating an AJAX call for the specific brewery button being clicked
  fetch(queryURL)
  .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        // Creating a div to hold the brewery
        console.log(data)

    // Storing the rating data
    for (i=0; i < data.length; i++){
      console.log(data[i].name)
    // let phone = data[i].phone;
    var name = data[i].name;
    // var city = data[i].city;
    // var state = data[i].state;
    // var postal_code = data[i].postal_code;
    // var street = data[i].street;
    var type = data[i].brewery_type;
    // var website = data[i].website_url;

    var breweryDiv = document.createElement("div");
    var card = document.createElement("div");
    breweryDiv.append(card);
    var naming = document.createElement("h3");
    breweryDiv.append(naming);
    naming.textContent = name;
    breweryOutput.append(breweryDiv);

    var typeDiv = document.createElement("p");
    typeDiv.textContent = type;
    typeDiv.append(breweryDiv);
    }

    
    


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
    // var address = $(
    //   '<div class="brewResults content">${street}</div> <div class="content">${city}</div> <div class="content">${state}</div><div class="content">${postal_code}</div>'
    // );

    // var card = $("<div class='card'><header class='card-header'>");
    // breweryDiv.append(card);

    // var card2 = $("<h3>").text(name);
    // breweryDiv.append(card2);

    // var card3 = $("<h4>").text(type);
    // breweryDiv.append(card3);

    // var pOne = $("<p>").text("Phone: " + phone);
    // breweryDiv.append(pOne);

    // var pTwo = $("<p>").text(street);
    // breweryDiv.append(pTwo);

    // var pThree = $("<p>").text(city + ", " + state + " " + postal_code);
    // breweryDiv.append(pThree);
    // var queryURL =
    //   // "<a href='https://www.google.com/maps/place/" + city+",+"+state+"+"+postal_code+"'>Map</a>";
    //   "<a href='https://www.google.com/maps/place/" + name + "'>Map</a>";
    // breweryDiv.append(queryURL);

    // // Putting the entire brewery above the previous breweries
    // $("#brewerys-view").prepend(breweryDiv);
    })
    .catch(function (err) {

    });
  }

// Function for displaying brewery data
// function renderButtons() {
//   // Deleting the breweriess prior to adding new breweries
//   // (this is necessary otherwise you will have repeat buttons)
//   $("#buttons-view").empty();

//   // Looping through the array of brewerys
//   for (var i = 0; i < city.length; i++) {
//     // Then dynamicaly generating buttons for each brewery in the array
//     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//     var a = $("<button>");
//     // Adding a class of brewery-btn to our button
//     a.addClass("brewery-btn");
//     // Adding a data-attribute
//     a.attr("data-name", brewerys[i]);
//     // Providing the initial button text
//     a.text(brewerys[i]);
//     // Adding the button to the buttons-view div
//     $("#buttons-view").append(a);
//   }
// }

// // This function handles events where a brewery button is clicked
// $("#add-brewery").on("click", function (event) {
//   event.preventDefault();
//   // This line grabs the input from the textbox
//   var brewery = $("#brewery-input").val().trim();

//   // Adding brewery from the textbox to our array
//   brewerys.push(brewery);

//   // Calling renderButtons which handles the processing of our brewery array
//   renderButtons();
// });

// Adding a click event listener to all elements with a class of "brewery-btn"
// $(document).on("click", ".brewery-btn", displaybreweryInfo);

// Calling the renderButtons function to display the initial buttons
// renderButtons();

// $("#thing_to_click").on("click", function () {
//   window.location = "./results.html";
// });
var getEventResults = (city, startDate, endDate) => {
  //api url
  var TapiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=${startDate}&endDateTime=${endDate}&city=${city}&apikey=${api}`;
console.log(TapiUrl);
  //make a request to the url
  fetch(TapiUrl)
      .then(function (response) {
          return response.json();
      }).then(function (res) {
          console.log(res);
});
};

var formSubmitHandler = (event) => {
    event.preventDefault();
    var city = cityInputEl.value.trim();
    var startDate = startDateInput.value;
    startDate.toString();
    var start = new Date(startDate);
     var endDate = endDateInput.value;
    var end = new Date(endDate)
    end.toString()
      console.log(start, end) 
      displaybreweryInfo(city);
       getEventResults(city, startDate, endDate);
};

cityBtn.addEventListener("click", formSubmitHandler);
