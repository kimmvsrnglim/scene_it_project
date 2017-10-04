$(function() {
    // X listen for when the form submits
    // X when it submits get the value of the search box
    // X use $.get() to hit up the OMDb API
    // X empty the current cards on the website for the new search results
    // X loop over results
    // X for each result, generate card HTML, injecting movie info into the card
    // X add the card to the screen 

    function renderMovies(movies) { 
        $('.card-columns').empty();

        movies.forEach(function(movie) {
            var newCard = $('<div class="card"></div>');
            var newImage = $('<img class="card-img-top"/>');
            var newCardBody = $('<div class="card-body"></div>');
            var newCardTitle = $('<h4 class="card-title"></h4>');
            var newBadgeYear = $('<span class="badge badge-secondary float-right"></span>');
            var newAnchor = $('<a href="#" class="btn btn-primary">Add!</a>');

            if (movie.Poster == "N/A") { 
                newImage.attr('src',"no_image.png");
            } else { 
                newImage.attr('src', movie.Poster);
            }

            newCardTitle.text(movie.Title);
            newBadgeYear.text(movie.Year);

            newCardTitle.append(newBadgeYear);
            newCardBody.append(newCardTitle, newAnchor);
            newCard.append(newImage, newCardBody);

            $('.card-columns').append(newCard);
        });

    };

    $("form").submit(function(e) {
        e.preventDefault();  
        var search = $(".form-control.input-md").val();
        var url = "http://www.omdbapi.com/?apikey=3430a78&s=" + search;
        $.get(url, function(data) {
            renderMovies(data.Search); 
        });
        
    });

});
