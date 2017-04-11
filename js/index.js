//http://quotes.stormconsultancy.co.uk/api
// var count = 1;
// var newquote = '';
// var newauthor = '';
//var data = {};


function getquote(){
  // var ourRequest = new XMLHttpRequest(); 
  // //check to see if responding
  // ourRequest.onreadystatechange = function() {
  //   if (ourRequest.readyState === 4) {
  //     if (ourRequest.status === 200 || ourRequest.status === 304) {
  //       // Success! Do stuff with data.
  //       console.log(ourRequest.responseText); 
  //     }
  //   }
  // };
// $.ajaxPrefilter( function (options) {
//   if (options.crossDomain && jQuery.support.cors) {
//    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:')
   
//    //var surl = 'http://quotes.stormconsultancy.co.uk/quotes/' + count + '.json';
//  }
// });   
  
var count = Math.floor((Math.random() * 43) + 1);
  
  $.getJSON('http://quotes.stormconsultancy.co.uk/quotes/' + count + '.json/', function(rtn){
      var data = rtn;
      var newquote = '"' + data.quote + '" ';
      var newauthor = "~" + data.author;
     
      write(newquote, newauthor);
      
      var newURL = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent(newquote + newauthor);
      
      $("#twit").on("click", tweet(newURL));
   });     
}

function write(q, a){

  $('#quote').fadeOut(700, function(){
    $('#quote').text(q);
    $('#quote').fadeIn(700);
  });
  $('#author').fadeOut(700, function(){
    $('#author').text(a);
    $('#author').fadeIn(700);
  });
  
  
   
}

function tweet(URL){
    $('#tweet').attr('href', URL);
    openURL(URL);
}

$(document).ready(function(){

   console.log("Begin")
  //start with random quote
  
    getquote();
  
   $("#btn").on("click", getquote);
});