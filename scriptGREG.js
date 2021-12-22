$.ajax({
    url:"https://api.openbrewerydb.org/breweries/search?query=beer&per_page=25",
    type:"GET",
    success:function(result){
       var htmlcode=""
        
        result.forEach(brewery => { 
htmlcode=htmlcode+"<p>"+brewery.name+"</p>"

        })


        $("#result-brewery").html(htmlcode)
    }
})