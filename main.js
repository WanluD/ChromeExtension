// function assignValue() {
//   const inputElement = document.getElementById("places");
//   inputElement.addEventListener("input", function () {
//     const inputValue2 = inputElement.value;
//     //   console.log(inputValue2);
//     return inputValue2;
//   });
// }

// const city = document.getElementById("places");
// const myButton = document.getElementById("generate");
// myButton.addEventListener("click", function () {
//   const prefs = {
//     location : city.value,
//   }
//   chrome.runtime.sendMessage({ buttonClicked: true, prefs});
// });

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

/* BACK UP PLAN!!!!!!!!!!!!!!!!!**************/

//Add 3rd city...
const restaurants = {
  Baltimore: "https://bodhicorner.com/federal-hill/",
  Philadelphia: "https://dimsumgardenphilly.com/",
  "New York City": "https://www.difarapizzany.com/",
};

const town = document.getElementById("places");

const button = document.getElementById("generate");
button.addEventListener("click", function () {
  const restaurant = restaurants.Baltimore; //Needs to access the url
  const input = town.value;
  //console.log(restaurants[input]);
  window.open(restaurants[input], "_blank");
});
