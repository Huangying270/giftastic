$(document).ready(function(){

    var displayedGiphy = ["Pikachu", "Eevee", "Brock", "Togepi"];

    function displayGifs(){

        // Clears displayed gifs
        $("#display-gif").empty();

        var input = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input +"&limit=10&api_key=qxs3QpdBNOIc9DigO3PmRnwXyZvadJYv";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){

            

        })

    }









})

/*
variables for gifs of interest
method GET to get data from giphy api
generate gifs from api
changing state of images, still and animate
on click function for button to generate gifs
*/