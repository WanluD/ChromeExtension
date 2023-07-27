const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Philadelphia&key=AIzaSyCyFKAPE1Jc9klMKeKKVeiGmWlgYPLaKdc`

export default function fetchLocations() {
    fetch (url)
        .then (response => response.json())
        .then (data => {
            console.log(data);
        })
        .catch(error => console.log(error))
}