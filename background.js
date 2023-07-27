chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.buttonClicked) {
    // Your code to be executed when the button is clicked goes here
    let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Philadelphia&key=AIzaSyCyFKAPE1Jc9klMKeKKVeiGmWlgYPLaKdc`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => console.log(data));
  }
});
