
const geoAPI = "https://api.mapbox.com/geocoding/v5/mapbox.places";

const mpKey = `pk.eyJ1IjoiY2FybG9ydHkiLCJhIjoiY2p5eGtsemNjMGRhZTNncWV6am5xYXN1ZCJ9.FmCOZr6penXoMtoJuThUog`;  // <== remember to pluck in your MapBox API Key

const mbToken = `.json?access_token=${mpKey}`

const iSSurl = 'http://api.open-notify.org/iss-pass.json?'

fetch(`${geoAPI}/New York${mbToken}`).then(resp => {
    if(resp.ok) {
        return resp.json();
    }
}).then(resp => {
    const [lon, lat] = resp.features[0].center;

		fetch(`${iSSurl}lat=${lat}&lon=${lon}`).then(res=>{
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
})
