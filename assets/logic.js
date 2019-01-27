//set array for initial giphy themes.
var picThemes = ["summer daze", "whitewater kayaking", "surf bum", "log home", "backcountry camping"];


//$(document).$(document).ready(function () {

function displayGiphies() {

    var api = "http://api.giphy.com/v1/gifs/search?q=";
    var viewerChoice = $(this).attr("data-name");
    viewerInput = viewerChoice.replace(/ /g, "+");
    var limit = '&limit=50';
    var key = "&api_key=N7IJvMUDuL34fiIiCeJbuHKUMZ7Soltm";
    var queryURL = api + viewerInput + key + limit;
    //http://api.giphy.com/v1/gifs/search?q=bruce+willis&api_key=N7IJvMUDuL34fiIiCeJbuHKUMZ7Soltm      
    $.ajax({
    url: queryURL,
    method: "GET"
    
    }).then(function(response) {
        var imageUrl = response.data;
        for(var i=0; i<imageUrl.length;i++){
        var imageNum = [Math.floor(imageUrl.length * Math.random()/2)];
        var imageResult = $("<img>");
        
        imageResult.attr("src", imageUrl[imageNum].images.fixed_height.url);
        imageResult.addClass("images");
        
        $("#images").prepend(imageResult);
        
        }
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
    //console.log(picThemes);
    if(theme === ""){
        alert("Please input a valid search term!")
        picThemes.pop(theme);
    }
    
//render list of themes.
    renderButtons();
});
    $(document).on("click", ".theme", displayGiphies);
    renderButtons();


//});
