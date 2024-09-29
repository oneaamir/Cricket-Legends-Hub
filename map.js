// Array to store player data with locations
const players = [
    {
        name: 'Sachin Tendulkar',
        country: 'India',
        hometown: [19.0760, 72.8777], 
    },
    {
        name: 'Brian Lara',
        country: 'Trinidad and Tobago',
        hometown: [10.6918, -61.2225], 
    },
    {
        name: 'Ricky Ponting',
        country: 'Australia',
        hometown: [-42.8821, 147.3272], 
    },
    {
        name: 'Sir Don Bradman',
        country: 'Australia',
        hometown: [-34.881, 138.6007], 
    },
    {
        name: 'Jacques Kallis',
        country: 'South Africa',
        hometown: [-33.9249, 18.4241], 
    },
    {
        name: 'Virat Kohli',
        country: 'India',
        hometown: [28.6139, 77.2090], 
    }
];


const map = L.map('map').setView([20, 0], 2); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


players.forEach(player => {
    const marker = L.marker(player.hometown).addTo(map);
    marker.bindPopup(`<b>${player.name}</b><br>Country: ${player.country}`).openPopup();
});
