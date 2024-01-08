const btn = document.getElementById("btn");
const country_container = document.getElementById("country-container");
const map = document.getElementById("map");



function geo() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed" 
            width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>`;
            getLocation(lat,long);
    });
    
  }
}

const getLocation =async (lat,long) =>{
    try{
        let url = `https://api.positionstack.com/v1/reverse?access_key=61decdb3d0d721770038e15bc5d62203&query=${lat},${long}`
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        const country = data.data[0];
        console.log()
        console.log(country);
        country_container.innerHTML = `
        <div class="content">
    <h2>Continent :&nbsp;  </h2>
    <h2>${country.continent}</h2>
  </div>
  <div class="region">
    <h2>Country :&nbsp;  </h2>
    <h2>${country.country}</h2>
  </div>
  <div class="street">
    <h2>Region :&nbsp;  </h2>
    <h2>${country.region}</h2>
  </div>
  <div class="Address">
    <h2>District :&nbsp;  </h2>
    <h2>${country.county}</h2>
  </div>
        `

    }catch(err){
        console.log(err);
    }

}


btn.addEventListener("click",geo);


