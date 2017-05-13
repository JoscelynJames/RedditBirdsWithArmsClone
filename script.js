$(document).ready(function() {
  $.get('https://www.reddit.com/r/birdswitharms.json', function(data) {
    var urls = [];
    var titles = [];
    var authors = [];
    var thumbnails = [];
    var ups = [];
    var childrenLength = data.data.children.length;

    for(var i = 0; i < childrenLength; i++) {
      urls.push(data.data.children[i].data.permalink);
      titles.push(data.data.children[i].data.title);
      authors.push(data.data.children[i].data.author);
      thumbnails.push(data.data.children[i].data.thumbnail);
    }

    for (var i = 1; i < thumbnails.length; i++) {
      $('ul').append(
       '<div class="row">  <div class="col s1">' + i +
       '.</div>     <div class="col s4">  <img class="reddit-img" src=' +
       " ' " +  thumbnails[i] + " ' " +
       '/>  </div>   <div class="col s3"> <a class="reddit-a" href= ' +
       " 'http://www.reddit.com" + urls[i] + " ' " +'>' +
       titles[i] + '</a> <span class="by-authors"> by ' + authors[i] + '<span/>  </div>  </div>'
      );
    }

    $('#poo').append(
      birdFacts[getRandomIntInclusive(0, birdFacts.length - 1)]
    );

  });
});

$('#fact-button').click(function() {
  location.reload();
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var birdFacts =[
  'The Ostrich is the largest bird in the world.' +
  'It also lays the largest eggs and has the fastest maximum running speed (97 kph).',

  'The Bee Hummingbird is the smallest living bird in the world, with a length of just 5 cm (2 in).',

  'Kiwis are an endangered, flightless bird that live in New Zealand. ' +
  'They lay the largest eggs relative to their body size of any bird in the world.',

  'The common phrase “eat like a bird” should mean something quite different! ' +
  'Many birds eat twice their weight in food each day. ' +
  'In fact, a bird requires more food in proportion to its size than a baby or a cat.',

  'Kiwi birds are blind, so they hunt by smell.',

  'Bobwhite quails are the best birds.',

  'Flamingos pair for a lifetime. Some stay with their mates for 50 years or more.',

  'The fastest flying bird in a dive is the Peregrine Falcon. ' +
  'It averages speeds of over 110 mph (180 kph)',

  'Cardinals sometimes cover themselves in crushed or living ants, smearing them over their feathers, or allowing living ants to crawl on them.',

  'Einstein, a brilliant African grey parrot at the Knoxville Zoo in Tennessee, can say around 200 words.',

  'Acorn woodpeckers store acorns by drilling holes in trees, fenceposts, utility poles, and buildings, and depositing their nuts there.',
];
