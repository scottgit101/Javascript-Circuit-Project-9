var config = {
  apiKey: "AIzaSyC0D9YD9P2MHebt2EbXxqldb9Z8kFMCklY",
  authDomain: "restaurant-site.firebaseapp.com",
  databaseURL: "https://restaurant-site.firebaseio.com",
  storageBucket: "restaurant-site.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();


var reservationData = {};

$('.reservation-day li').on('click', function() {
  reservationData.day = $(this).text();
});


$('.reservation-form').on('submit', function(event) {
  event.preventDefault();

  reservationData.name = $('.reservation-name').val();


  var reservationsReference = database.ref('reservations');

  reservationsReference.push(reservationData);
});


function getReservations() {


  database.ref('reservations').on('value', function(results) {

    
    var allReservations = results.val();

   
    $('.reservations').empty();

   
    for (var reservation in allReservations) {

      
      var context = {
        name: allReservations[reservation].name,
        day: allReservations[reservation].day,
        reservationId: reservation
      };


     
      var source = $("#reservation-template").html();

     
      var template = Handlebars.compile(source);

      
      var reservationListItem = template(context);

      
      $('.reservations').append(reservationListItem);

    }

  });

}


getReservations();
