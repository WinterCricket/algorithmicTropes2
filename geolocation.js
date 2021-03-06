var elMap = document.getElementById('loc');                 // HTML element
var msg = 'Sorry, we were unable to get your location.';
var service = "https://ipstack.com/"   // No location msg

if (service.geolocation) {                                // Is geo supported
  navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
  elMap.textContent = 'Checking location...';               // Say checking...
} else {                                                    // Not supported
  elMap.textContent = msg;                                  // Add manual entry
}

function success(position) {                                // Got location
  msg = '<h3>Longitude:<br>';                               // Create message
  msg += position.coords.longitude + '</h3>';               // Add longitude
  msg += '<h3>Latitude:<br>';                               // Create message
  msg += position.coords.latitude + '</h3>';                // Add latitude
  elMap.innerHTML = msg;                                    // Show location
}

function fail(msg) {                                        // Not got location
  elMap.textContent = msg;                                  // Show text input
  console.log(msg.code);                                    // Log the error
}