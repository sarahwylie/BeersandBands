var api = `1dSMNu004yPP163tvnnPbdA3cwZleRuJ`;
var cityResult = document.querySelector(".city-result")
var cityInputEl = document.querySelector("#location")
var cityBtn = document.querySelector(".add-brewery");
var eventOutput = document.querySelector(".events")
var startDateInput = document.querySelector("#start-date")
var endDateInput = document.querySelector("#end-date")
var breweryOutput = document.querySelector(".brews")
// var starter = new Date(startDateInput)
// document.write(starter.toString())


// displaybreweryInfo function re-renders the HTML to display the appropriate content
function displaybreweryInfo(cityName) {
  cityInputEl.textContent = "";
    var city = cityName;
  var queryURL =
    `https://api.openbrewerydb.org/breweries?by_city=${city}`;
  // console.log(queryURL);
  fetch(queryURL)
  .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        console.log(data)

    // Storing the rating data
    for (i=0; i < data.length; i++){
      // console.log(data[i].name)
    // let phone = data[i].phone;
    var name = data[i].name;    
    var type = data[i].brewery_type;
    var street = data[i].street;
    var website = data[i].website_url;

    var breweryCard = document.createElement("div");
    breweryOutput.appendChild(breweryCard);
      
    // var card = document.createElement("div");
    // breweryCard.append(card);
    var naming = document.createElement("h2");
    breweryCard.appendChild(naming);
    naming.textContent = name;

    var brewType = document.createElement("p");
    brewType.textContent = type;
    breweryCard.appendChild(brewType);

    var address = document.createElement("p");
    address.textContent = street;
    breweryCard.appendChild(address);

    var web = document.createElement("p")
    web.textContent = website;
    breweryCard.appendChild(web);

    var cardGap = document.createElement("br");
    breweryCard.appendChild(cardGap);
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

var getEventResults = (city, startDate, endDate) => {
  cityInputEl.textContent = "";
  $.ajax({
    type:"GET",
    url:`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${api}&city=${city}`,
    async:true,
    dataType: "json",
    success: function(json) {
      let data = json._embedded.events
                console.log(data);

    for (i=0; i < data.length; i++){
      // console.log(data[i].name)

    var name = data[i].name;    
    var pic = data[i].images[0].url;
    var venue = data[i]._embedded.venues.name;
      console.log(venue)
    var url = data[i].url;

    var eventCard = document.createElement("div");
    eventOutput.appendChild(eventCard);           
  
    var naming = document.createElement("h2");
    eventCard.appendChild(naming);
    naming.textContent = name;
  
    var eventVenue = document.createElement("p");
    eventVenue.textContent = venue;
    eventCard.appendChild(eventVenue);

    var photo = document.createElement("img");
    photo.src = `${pic}`
    // console.log(photo)
    eventCard.appendChild(photo);

    var web = document.createElement("p")
    web.textContent = url;
    eventCard.appendChild(web);

    var cardGap = document.createElement("br");
    eventCard.appendChild(cardGap);
  }
  //   //api url
//   var TapiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?startDateTime=${startDate}&endDateTime=${endDate}&city=${city}&apikey=${api}`;
// console.log(TapiUrl);
//   //make a request to the url
//   fetch(TapiUrl)
//       .then(function (response) {
//           return response.json();
//       }).then(function (res) {
//           console.log(res);
//     .catch(function (err) {
            }   
});
  }

var formSubmitHandler = (event) => {
    event.preventDefault();
    var city = cityInputEl.value.trim();
    var startDate = startDateInput.value;
    // startDate = Date.parse("YYYY-MM-DDTHH:mm:ssZ");
    // var start = new Date(startDate);
     var endDate = endDateInput.value;
    // var end = new Date(endDate)
    // end.toString()
      console.log(startDate, endDate) 
      displaybreweryInfo(city);
       getEventResults(city, startDate, endDate);
  
  };

cityBtn.addEventListener("click", formSubmitHandler);
