$(document).ready(function(){

    var displayedGiphy = ["Pikachu", "Eevee", "Brock", "Togepi"];

    function displayGifs(input){
        console.log(input);
        // Clears displayed gifs
        $("#display-gif").empty();

        //var input = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input +"&limit=10&api_key=Kcj2pSMDpIaD2MCZxbsaZc4vX4NtAh0B";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){

            console.log(response);

            var results = response.data;

            for(var i = 0; i < 10; i++) {

                var newGif = $("<img>");
                var newDiv = $("<div>");
                newDiv.addClass("gifholder");

                newGif.attr("src", results[i].images.fixed_height.url);
                newGif.attr("data-still", results[i].images.fixed_height.url);
                newGif.attr("data-animate", results[i].images.fixed_height.url);
                newGif.attr("data-state", "still");
                newGif.attr("class", "gif");
                newDiv.append(newGif);

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);
                newDiv.append(p)

                $("#display-gif").prepend(newDiv);

            }

        });

    }

    $("#confirmButton").on("click", function(event){

        event.preventDefault();
        console.log($("#user-input").val());
        console.log($("#user-input"));
        var input = $("#user-input").val();
        console.log(input);
        displayGifs(input);
        
        displayedGiphy.push(input);

        return;
    })





})

/*
variables for gifs of interest
method GET to get data from giphy api
generate gifs from api
changing state of images, still and animate
on click function for button to generate gifs
*/