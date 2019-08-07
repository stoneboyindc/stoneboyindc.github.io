'use strict'



/*function getLocation() { 
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  let url = "http://api.open-notify.org/iss-pass.json?lat=40.6892&lon=74.0445"

fetch(proxyUrl + url) .then(response => response.json()) .then(responseJson => console.log(responseJson)); }

$(getLocation)*/

const geoAPI = "https://api.mapbox.com/geocoding/v5/mapbox.places";

//const mpKey = `pk.eyJ1IjoiY2FybG9ydHkiLCJhIjoiY2p5eGtsemNjMGRhZTNncWV6am5xYXN1ZCJ9.FmCOZr6penXoMtoJuThUog`;  // <== remember to pluck in your MapBox API Key

//const mbToken = `.json?access_token=${mpKey}`


//const iSSurl = 'http://api.open-notify.org/iss-pass.json?'

let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const iSSurl = 'http://api.open-notify.org/iss-pass.json?'

function getLocation() {


	fetch(proxyUrl, url)
		.then(response => response.json())
		.then(responseJson => console.log(responseJson));


$(getLocation)


/*fetch(`${geoAPI}/New York${mbToken}`).then(resp => {
    if(resp.ok) {
        return resp.json();
    }
}).then(resp => {
    const [lon, lat] = resp.features[0].center;

		fetch(proxyUrl + `${iSSurl}lat=${lat}&lon=${lon}`).then(res=>{
		    if(res.ok) {
		        return res.json()
		    }
		}).then(res => {
		    console.log(res);
		    // do something with the response from ISS
		}).catch(errI => {
		    console.log('Something wrong with ISS', errI);
		})
    
}).catch(errM => {
    console.log('Something wrong with MapBox', errM);
})*/

/*function watchForm() {
	$("form").submit(event => {
		console.log("Calculating...");
		event.preventDefault();

		//getLocation();
	})/*

$(function () {
	console.log("Ready for your input");
	watchForm();
});*/
