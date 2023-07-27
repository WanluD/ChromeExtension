// function assignValue() {
//   const inputElement = document.getElementById("places");
//   inputElement.addEventListener("input", function () {
//     const inputValue2 = inputElement.value;
//     //   console.log(inputValue2);
//     return inputValue2;
//   });
// }

const myButton = document.getElementById("generate");
myButton.addEventListener("click", function () {
  chrome.runtime.sendMessage({ buttonClicked: true });
});

// function getPlace() {
//   let inputValue = assignValue();

//   let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Philadelphia&key=AIzaSyCyFKAPE1Jc9klMKeKKVeiGmWlgYPLaKdc`;
//   fetch(url)
//     .then((data) => data.json())
//     .then((data) => console.log(data));
// }

// const value = function test() {
//   const city = document.getElementById("places");
//   const inputValue = city.value;

//   console.log(inputValue2);
// };
// function getPlaceId() {
//     const input = document.getElementById('places')
//     const autocomplete = new google.maps.places.Autocomplete(input);

// }

// function getPlaceId2() {
//   const input = document.getElementById("autocomplete");
//   const autocomplete = new google.maps.places.Autocomplete(input);

//   autocomplete.addListener("place_changed", function () {
//     const place = autocomplete.getPlace();
//     const placeId = place.place_id;
//     console.log("Place ID:", placeId);
//   });
// }

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=AIzaSyCyFKAPE1Jc9klMKeKKVeiGmWlgYPLaKdc',
//   headers: { }
// };
// url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20${inputValue2}&key=AIzaSyCyFKAPE1Jc9klMKeKKVeiGmWlgYPLaKdc`;
// fetch(url)
//   .then((data) => data.json())
//   .then((data) => console.log(data));

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

//{
/* <input type="text" id="autocomplete">
<button onclick="getPlaceId()">Get Place ID</button>

<script>
  function getPlaceId() {
    const input = document.getElementById('autocomplete');
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function() {
      const place = autocomplete.getPlace();
      const placeId = place.place_id;
      console.log('Place ID:', placeId);
    });
  }
</script> */
//}
