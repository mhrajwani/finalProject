var counter = 0;
function changeBG(){
    var imgs = [
       
        "url(https://images.unsplash.com/photo-1515180711443-f8685c6d6a74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af2cb334cc0aa6cf0ba21ff3a3064393&auto=format&fit=crop&w=500&q=60)",
        "url(https://images.unsplash.com/photo-1525676468128-74d16a180753?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53e847de7adf02c03c237b5ab32555e7&auto=format&fit=crop&w=500&q=60)",
        "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ef06f88dab75b74252e22465ad9c99d&auto=format&fit=crop&w=1050&q=80)",
        "url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2059a86937844c84267d5126e5b36aa3&auto=format&fit=crop&w=1050&q=80)",
        "url(https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73b33630d7fcde23a18e2e1a2aa1caed&auto=format&fit=crop&w=1050&q=80)"
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 4000);
