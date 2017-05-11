$(document).ready(function() {

  $.get('https://www.reddit.com/r/birdswitharms.json', function(data) {
    console.log(data);
    var urls = [];
    var titles = [];
    var authors = [];
    var thumbnails = [];
    var ups = []

    var childrenLength = data.data.children.length;

    for(var i = 0; i < childrenLength; i++) {
      urls.push(data.data.children[i].data.permalink);
      titles.push(data.data.children[i].data.title);
      authors.push(data.data.children[i].data.author);
      thumbnails.push(data.data.children[i].data.thumbnail);
    }
    for(var i = 1; i < thumbnails.length; i++) {
      $('ul').eq(i).append(
       '<div class="row"> <div class="col s1">' + i +
       '.</div><div class="col s1"><img class="reddit-img" src=' + " ' " +  thumbnails[i] + " ' " +
       '/></div><div class="col s1"> <a class="reddit-a" href= ' +
       " 'http://www.reddit.com" + urls[i] + " ' " +'></div><div class="col s1">' +
       titles[i] + '</a> <span class="by-authors"> by ' + authors[i] + '<span/></div>'
      );

    }

//       for (var i = 1; i < titles.length; i++) {
//         $("ul").append("<li></li>", titles[i])
// }
    /*
      1. create another for loop that goes through any of the arrays length (because
      they're all the same length)

      2. Inside that for loop append a <li> to <ul>
      3. Then append the content you want inside the <li>
      4. Style it
    */
  });
});
