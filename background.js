import fetchLocations from "/api/fetchLocations.js"

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.buttonClicked) {
    //fetchLocations();
    //console.log(message.prefs.location); //prefs.location is the value of input
    // let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Philadelphia&key=AIzaSyCyFKAPE1Jc9klMKeKKVeiGmWlgYPLaKdc`;
    // fetch(url)
    //   .then((data) => data.json())
    //   .then((data) => console.log(data));
  }
});
