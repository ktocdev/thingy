var map,
		myLatlng = new google.maps.LatLng(21.0333,105.8500);

function initialize() {
  var mapOptions = {
    zoom: 3,
    center: myLatlng,
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Vietnam'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
