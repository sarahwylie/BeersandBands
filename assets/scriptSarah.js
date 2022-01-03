var api = `1dSMNu004yPP163tvnnPbdA3cwZleRuJ`;
var cityResult = document.querySelector(".city-result")
var cityInputEl = document.querySelector("#location")
var cityBtn = document.querySelector(".submitBtn");
var eventOutput = document.querySelector(".event-results")
var startDateInput = document.querySelector("#start-date")
var endDateInput = document.querySelector("#end-date")

//form submit
// var formSubmitHandler = (event) => {
//     event.preventDefault();
//     //get value from input element
//     var city = cityInputEl.value.trim();
//     var startDate = startDateInput.value.trim();
//     var endDate = endDateInput.value.trim();
//     if (city) {
//         getTCity(city);
//         //clear old content from form input
//         cityInputEl.value = "";
//         startDateInput.value = "";
//         endDateInput.value = "";
//     // } else if (startDate) {
//     //     getEventStartDate(startDate);
//     //     startDateInput.value = "";
//     // } else if (endDate) {
//     //     getEventEndDate(endDate);
//     //     endDateInput.value = "";
//     } else if (startDate === false) {
//         alert("Please choose a start date")
//     } else if (endDate === false) {
//         alert("Please choose an end date")
//     }
// };

var getEventResults = (city, startDate, endDate) => {
        //api url
        var TapiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?size=25&apikey=${api}&city=${city}&startDateTime=${startDate}&endDateTime=${endDate}`;
        //make a request to the url
        fetch(TapiUrl)
            .then(function (response) {
                return response.json();
            }).then(function (res) {
                console.log(res);
                displayEvents(res)
});
};

var displayEvents = (res) => {
     
}

cityBtn.addEventListener("click", formSubmitHandler);