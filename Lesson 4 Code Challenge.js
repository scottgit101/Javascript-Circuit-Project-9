function initMap() {

  navigator.geolocation.getCurrentPosition(function(position) {
  
    var userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      center: userLocation,
      zoom: 10,
      scrollwheel: false
    });

    
    var marker = new google.maps.Marker({
      position: userLocation,
      map: map,
      title: 'User Location'
    });

  });
}

initMap();