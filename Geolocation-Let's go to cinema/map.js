
var mymap = L.map('mymap').setView([37.9800,23.7328], 15);

var asty = L.marker([37.9797,23.7323]).addTo(mymap);
asty.bindPopup("Παίζει Μπεργκμαν, ποιος θέλει;");

var idealcine = L.marker([37.98228,23.73145]).addTo(mymap);
idealcine.bindPopup("Είναι κλειστό!:-(");

var operacine = L.marker([37.9821,23.73348]).addTo(mymap);
operacine.bindPopup("Έχει αμερικάνικη κωμωδία.");

var circle = L.circle([37.9800, 23.7320], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.4,
    radius: 500
}).addTo(mymap);

circle.bindPopup("Ας μην επεκταθούμε περισσότερο.");


// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("Πατήσατε στο χάρτη στις συντεταγμένες " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);

var whereWeAre = navigator.geolocation.getCurrentPosition(function(data){
    L.marker([ data.coords.latitude, data.coords.longitude ]).addTo(mymap);
 });



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZXBpY3VydXMtZ2FyZGVuIiwiYSI6ImNqeGN4enRjeTA3dHgzenF3Y2k0cnY1NmYifQ.UXZGboH0mh06ibQBKDLjMQ'
}).addTo(mymap)





