document.querySelector("#btn-search").addEventListener("click", function () {
    fetch("http://localhost:3000/trips")
        .then(response => response.json())
        .then(data => {
            if (data.trip) {
                for (let i = 0; i < data.trip.length; i++) {
                }
            }
        })
})

