$(document).ready(function(){

    var displayedGiphy = ["Pikachu", "Eevee", "Brock", "Togepi"];

    function displayGifs(){

        // Clears displayed gifs
        $("#display-gif").empty();

        var input = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input +"&limit=10&api_key=Kcj2pSMDpIaD2MCZxbsaZc4vX4NtAh0B";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){

            console.log(response);

            var results = response.data;

            for(var i = 0; i < 10; i++) {

                var newDiv = $("<div>");
                newDiv.addClass("gifholder");

                $("<img>").attr("src", results[i].images.original_still.url);
                $("<img>").attr("data-still", results[i].images.original_still.url);
                $("<img>").attr("data-animate", results[i].images.original.url);
                $("<img>").attr("data-state", "still");
                $("<img>").attr("class", "gif");
                newDiv.append($("<img>"));

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);
                newDiv.append(p)

                $("#display-gif").append(newDiv);

            }

        });

    }

    $("#confirmButton").on("click", function(){

        var input = $("#user-input").val();
        displayedGiphy.push(input);

        return;
    })

    $("#confirmButton").on("click", displayGifs);





})

/*
variables for gifs of interest
method GET to get data from giphy api
generate gifs from api
changing state of images, still and animate
on click function for button to generate gifs
*/