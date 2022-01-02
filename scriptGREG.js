var cityBtn = document.querySelector(".submitBtn");
var cityInputEl = document.querySelector("#location")
var breweriesOutput = document.querySelector(".brewery-results")
var cityResult = document.querySelector(".city-result")
var startDateInput = document.querySelector("#start-date")
var endDateInput = document.querySelector("#end-date")

//form submit
var formSubmitHandler = (event) => {
    event.preventDefault();
    //get value from input element
    var city = cityInputEl.value.trim();
    var startDate = startDateInput.value.trim();
    var endDate = endDateInput.value.trim();
    if (city) {
        getCity(city);
        //clear old content from form input
        cityInputEl.value = "";
        startDateInput.value = "";
        endDateInput.value = "";
    } else if (city === false) {
        alert("Please enter a city");
    }  else if (startDate === false) {
        alert("Please choose a start date")
    } else if (endDate === false) {
        alert("Please choose an end date")
    }
    // getCity(city);
    // getEventResults(city);
};

var getCity = (city) => {
    //weather api url
    var apiUrl = `https://api.openbrewerydb.org/breweries/search?query=${city}&per_page=25`;
    //make a request to the url
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        }).then(function (res) {
            displayBreweries(res);
        });
};
 
var displayBreweries = (res) => {

    for (var i=0; i < res.length; i++) {
        var cardContainer = document.createElement("div")
        var websiteLink = document.createElement("a")
        var link = document.createTextNode(`${res[i].name}`)
        websiteLink.appendChild(link)
        websiteLink.href = `${res[i].website_url}`
        var city = document.createElement("p")
        city.textContent = `${res[i].city}`
        var address = document.createElement("p")
        address.textContent = `${res[i].street}`
        cardContainer.appendChild(websiteLink)
        cardContainer.appendChild(city)
        cardContainer.appendChild(address)
        cardContainer.classList.add("cardContainer")
        websiteLink.classList.add("websiteLink")
        city.classList.add("city")
        address.classList.add("address")    
    //     var card = `
    //     <div style="border: gold 2px solid">
    //     <h1 style="font-weight: bold">${res[i].name}</h1>
    //     <p>${res[i].street}</p>
    //   </div>
    //     `

        var resDiv = document.querySelector("#result-brewery");
        resDiv.appendChild(cardContainer);
    }
}

// $.ajax({
//     url:"https://api.openbrewerydb.org/breweries/search?query=beer&per_page=25",
//     type:"GET",
//     success:function(result){
//        var htmlcode=""
        
//         result.forEach(brewery => { 
// htmlcode=htmlcode+"<p>"+brewery.name+"</p>"

//         })


//         $("#result-brewery").html(htmlcode)
//     }
// })

cityBtn.addEventListener("click", formSubmitHandler);
