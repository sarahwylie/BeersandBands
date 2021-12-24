var api = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=1dSMNu004yPP163tvnnPbdA3cwZleRuJ"

var searchEvents = function(city, startDate, endDate) {
    var cityArray = []
    var cityObject = {
        "id": 40001, 
        "name": "OSLO",
        "region_id": 40002,
        "country_id": 578,
    }
    cityArray.push(cityObject)


    // eventDate_from
    // eventDate_To
    // year-month-day


    var url = "http://app.ticketmaster.com/discovery/v2/events.json?apikey=1dSMNu004yPP163tvnnPbdA3cwZleRuJ&classificationName=music";
    url += "&keyword=" +city
    url += "&startDateTime=" +startDate +"&endDateTime=" +endDate 
    fetch(url)
    .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            //display results 
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
};
      // .catch(function(error) {
      //   alert("Unable to connect to Ticketmaster");
  
searchEvents("Austin", "2021-03-01", "2021-04-01")
// https://app.ticketmaster.com/discovery/v2/events.json?apikey=1dSMNu004yPP163tvnnPbdA3cwZleRuJ&classificationName=music

// classificationName - designate event type being music (array)

// city - designateCity (array)

// date - localStartDateTime (array)
// date - localStartEndDateTime (array) 



//ref module 6.3 for api java code !!!

