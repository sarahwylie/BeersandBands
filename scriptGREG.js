var cityBtn = document.querySelector(".submitBtn");
var cityInputEl = document.querySelector("#location")
var breweriesOutput = document.querySelector(".brewery-results")
var cityResult = document.querySelector(".city-result")

//form submit
var formSubmitHandler = (event) => {
    event.preventDefault();
    //get value from input element
    var city = cityInputEl.value.trim();
    if (city) {
        getCity(city);
        //clear old content from form input
        cityInputEl.value = "";
    } else {
        alert("Please enter a city");
    }
    getCity(city);
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
 
var displayBreweries = (res) => {
    // breweriesOutput.textContent = "";

    var city = res[0].city;
    var name = res[0].name;
    var address = res[0].street;
    var web = res[0].website_url;

    console.log(city, name, address, web)

    // cityResult.append(city)
    var brewMug = document.createElement("div")
    var brewAddress = document.createElement("p")
    var brewWeb = document.createElement("p")
    // breweriesOutput.append(brewMug, brewAddress, brewWeb)

    // for (city) {
    //     i 
    // }
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