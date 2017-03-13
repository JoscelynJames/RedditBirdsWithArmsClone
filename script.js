$(document).ready(function() {

  $.get('https://www.reddit.com/r/birdswitharms.json', function(data) {
    console.log(data);
    var urls = [];
    var titles = [];
    var authors = [];
    var thumbnails = [];

    var childrenLength = data.data.children.length;

    for(var i = 0; i < childrenLength; i++) {
      urls.push(data.data.children[i].data.url);
      titles.push(data.data.children[i].data.title);
      authors.push(data.data.children[i].data.author);
      thumbnails.push(data.data.children[i].data.thumbnail);
    }
      for(var i = 0; i < thumbnails.length; i++) {
        $("ul").append( "<li><img src= thumbnails[i]/></li>", thumbnails[i]);

      }


    /*
      1. create another for loop that goes through any of the arrays length (because
      they're all the same length)

      2. Inside that for loop append a <li> to <ul>
      3. Then append the content you want inside the <li>
      4. Style it
    */
  });
});
