$.ajax({
    url:"https://api.openbrewerydb.org/breweries/search?query=city&per_page=25",
    type:"GET",
    success:function(name, street, state, phone){
       var htmlcode=""
        
        result.forEach(brewery => { 


        })


        $("#result-brewery").html(htmlcode)
    }
})