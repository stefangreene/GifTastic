//set array for initial giphy themes.
var picThemes = ["summer daze", "whitewater kayaking", "surf bum", "log home", "backcountry camping"];


function displayGiphies() {

    var api = "http://api.giphy.com/v1/gifs/search?q=";
    var viewerChoice = $(this).attr("data-name");
    viewerInput = viewerChoice.replace(/ /g, "+");
    var limit = '&limit=2';
    var key = "&api_key=N7IJvMUDuL34fiIiCeJbuHKUMZ7Soltm";
    var queryURL = api + viewerInput + key + limit;
    //http://api.giphy.com/v1/gifs/search?q=bruce+willis&api_key=N7IJvMUDuL34fiIiCeJbuHKUMZ7Soltm      
    $.ajax({
    url: queryURL,
    method: "GET"
    
    }).then(function(response) {
        $("#theme-view2").text(JSON.stringify(response));
        console.log("var queryURL: " + queryURL);
        //console.log("var userInput: " + viewerInput);
        var imageUrl = response.data.image_original_url;
        console.log("ImageURL: " + imageUrl);
        var gifDiv = $("<img>");
        gifDiv.attr("src", imageUrl);
        gifDiv.attr("alt", viewerChoice + " image");

        $("#images").prepend(gifDiv);
 
    });
}

function renderButtons() {

    $("#theme-view").empty(); //delete content.
      for(var i=0; i<picThemes.length; i++){
          var a = $("<button>");
          a.addClass("theme");
          a.attr("data-name", picThemes[i]);
          a.text(picThemes[i]);
          $("#theme-view").append(a);  // Loop through the array of themes, generate buttons. 
      }
  }

  $("#add-theme").on("click", function(event) {
    event.preventDefault();
    var theme = $("#theme-input").val().trim();
    picThemes.push(theme);
    console.log(picThemes);
    
//render list of themes.
    renderButtons();
});
    $(document).on("click", ".theme", displayGiphies);
    renderButtons();
