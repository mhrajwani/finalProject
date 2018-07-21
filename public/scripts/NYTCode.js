
function buildQueryURL() {
 
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  
  queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

  
  var searchTerm = $("#search-term").val()
  queryURL += "&q=" + searchTerm;

  
  var startYear = $("#start-year").val()

  if (parseInt(startYear)) {
    queryURL += "&begin_date=" + startYear + "0101";
  }

 
  var endYear = $("#end-year").val()

  if (parseInt(endYear)) {
    queryURL += "&end_date=" + endYear + "0101";
  }

  
  

  return queryURL;
}

function updatePage(NYTData) {
  
  var numArticles = 10;

  
  for (var i = 0; i < numArticles; i++) {

    
    var article = NYTData.response.docs[i];

    
    var articleCount = i + 1;

    
    var $articleWell = $("<article>");
    $articleWell.addClass("well");
    $articleWell.attr("id", "article-well-" + articleCount);

    
    $("#well-section").append($articleWell);

    
    var headline = article.headline;

    if (headline && headline.main) {
      console.log(headline.main);

      $articleWell.append(
        "<h3 class='articleHeadline'>" +
        "<span class='label label-primary'>" + articleCount + "</span>" +
        "<strong> " + headline.main + "</strong></h3>"
      );
    }

   
    var byline = article.byline;

    if (byline && byline.original) {
      console.log(byline.original);

      $articleWell.append("<h5>" + byline.original + "</h5>");
    }

    
    var section = article.section_name;
    console.log(article.section_name);
    if (section) {
      $articleWell.append("<h5>Section: " + section + "</h5>");
    }

    
    var pubDate = article.pub_date;
    console.log(article.pub_date);
    if (pubDate) {
      $articleWell.append("<h5>" + article.pub_date + "</h5>");
    }

    
    $articleWell.append(
      "<a href='" + article.web_url + "'>" + article.web_url + "</a>"
    );
    console.log(article.web_url);
  }
}


function clear() {
  $("#well-section").empty();
}


$("#run-search").on("click", function(event) {
  
  event.preventDefault();

 
  clear();

  
  var queryURL = buildQueryURL();

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});


$("#clear-all").on("click", clear);
