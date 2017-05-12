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
      $('ul').append(
       '<div class="row">   <div class="col s1">' + i +
       '.</div>     <div class="col s3">  <img class="reddit-img" src=' +
       " ' " +  thumbnails[i] + " ' " +
       '/>  </div>   <div class="col s6"> <a class="reddit-a" href= ' +
       " 'http://www.reddit.com" + urls[i] + " ' " +'>' +
       titles[i] + '</a> <span class="by-authors"> by ' + authors[i] + '<span/>  </div>  </div>'
      );
    }

  });
});
