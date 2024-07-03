
document.querySelector("#btn-search").addEventListener("click", function () {
    const departure = document.querySelector("#departure").value;
    const arrival = document.querySelector("#arrival").value;
    const date = document.querySelector("#date").value
    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
        .then(response => response.json())
        .then(data => {
            if (data.trips) {
                const rightSide = document.querySelector("#right-side")
                rightSide.innerHTML = ""
                for (let i = 0; i < data.trips.length; i++) {
                    const depart = data.trips[i].departure
                    const arrivee = data.trips[i].arrival
                    const hour = new Date(data.trips[i].date).getHours()
                    const minute = new Date(data.trips[i].date).getMinutes()
                    
                }
            }
            if (data.result) {
                for (let i =0; i < data.trips.length; i++) {
                    const depart = data.trips[i].departure
                    const arrivee = data.trips[i].arrival
                    const hour = new Date(data.trips[i].date).getHours()
                    const minute = new Date(data.trips[i].date).getMinutes()
                    document.querySelector("#right-side").innerHTML += `
                    <div id="triplist"> 
                    <h3>${departure} > ${arrival} <span class="time">${hour} ${minute}</span></h3>
                    <button class="bookingButton">Book</button>
                    </div>
                    `
                }
            }
        })
})
                
