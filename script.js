fetch("http://localhost:3000/Trips")
.then(response => response.json())
	.then(data => {
        if (data.trip) {
        for (let i = 0; i < data.trip.length; i++) {
            document.querySelector("#search-btn").innerHTML += ``
        }
        }
    })
