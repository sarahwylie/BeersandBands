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
            console.log(res);
            displayBreweries(res, city);
        });
};
 
var displayBreweries = (res, city) => {
  

    for (var i=0; i < res.length; i++) {
        var card = `
        <div>
        <h6>${res[i].name}</h6>
        <p>${res[i].street}</p>
      </div>
        `

        var resDiv = document.querySelector("#result-brewery");
        resDiv.insertAdjacentHTML("beforeend", card);
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
