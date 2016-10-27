$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

<script>
// Provide your access token
L.mapbox.accessToken = 'pk.eyJ1IjoiZGFyaWFyYWR1IiwiYSI6ImNpb2pycTNrYzAwOGd2Z2x4dW52YjUzZGIifQ.YH5q0pGmhgap2clPh5PcCg';
// Create a map in the div #map
L.mapbox.map('map', 'dariaradu.086a09n9');

var layer = L.mapbox.tileLayer('dariaradu.086a09n9');
layer.on('ready', function() {
  // the layer has been fully loaded now, and you can
  // call .getTileJSON and investigate its properties
});



$("#inPlus").click(function change(){
    document.getElementById('inPlus').innerHTML = 'Fred Flinstone';
});

$("#locked").click(function change(){
    document.getElementById('locked').innerHTML = 'Fred Flinstone';
});