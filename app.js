$(document).ready(() => {
  var displayWikipediaData = function(event) {
    event.preventDefault();
    var $linksElement = $("#links");
    $linksElement.empty();
    var searchString = $("#searchString").val();
    var wikipediaUrl =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      searchString +
      "&format=json&callback=?";

    $.ajax({
      url: wikipediaUrl,
      dataType: "jsonp",
      jsonp: "callback",
      success: function(res) {
        var linkLists = res[1];
        linkLists.forEach(function(item) {
          var url = "https://en.wikipedia.org/wiki/" + item;
          $linksElement.append(
            '<li><a href="' + url + '">' + item + "</a></li>"
          );
          return url;
        });
      }
    });
  };

  $("#submitButton").on("click", displayWikipediaData);
});