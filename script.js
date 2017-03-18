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
      ups.push(data.data.children[i].data.ups)
    }
      for(var i = 1; i < thumbnails.length; i++) {
        $("ul").append(
          '<li class="reddit-li"><div class="thumb-ups">   +    '  +  ups[i] + "    -   </div> <div>"   +   i   +
          '.</div class="numbers"> <img class="reddit-img" src=' + " ' " +  thumbnails[i] + " ' " +
          '/><a class="reddit-a" href= ' + " 'http://www.reddit.com" + urls[i] + " ' " +
          '>' + titles[i] + '</a> <span class="by-authors"> by ' + authors[i] + '<span/> </li>'
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
