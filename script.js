// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Load map tiles from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// API Key for OpenWeatherMap
const apiKey = 'fe530750fa025cb705608c5ae08c094b'; // Ganti dengan API Key dari OpenWeatherMap

// List of airports with their latitude and longitude
var airports = [
    { name: "Soekarno-Hatta International Airport", lat: -6.1256, lon: 106.6558 }, // Indonesia
    { name: "Changi Airport", lat: 1.3644, lon: 103.9915 }, // Singapore
    { name: "Los Angeles International Airport", lat: 33.9428, lon: -118.4085 }, // USA
    { name: "Heathrow Airport", lat: 51.4700, lon: -0.4543 }, // UK
    { name: "Tokyo Haneda Airport", lat: 35.5494, lon: 139.7798 }, // Japan
    { name: "Sydney Kingsford Smith Airport", lat: -33.9399, lon: 151.1753 }, // Australia
    { name: "Dubai International Airport", lat: 25.2532, lon: 55.3657 }, // UAE
    { name: "Charles de Gaulle Airport", lat: 49.0097, lon: 2.5479 }, // France
    { name: "Frankfurt Airport", lat: 50.0379, lon: 8.5622 }, // Germany
    { name: "Beijing Capital International Airport", lat: 40.0801, lon: 116.5846 }, // China
    { name: "JFK International Airport", lat: 40.6413, lon: -73.7781 }, // USA
    { name: "São Paulo-Guarulhos International Airport", lat: -23.4356, lon: -46.4731 }, // Brazil
    { name: "Cape Town International Airport", lat: -33.9648, lon: 18.6017 }, // South Africa
    { name: "Moscow Sheremetyevo International Airport", lat: 55.9726, lon: 37.4146 }, // Russia
    { name: "Indira Gandhi International Airport", lat: 28.5562, lon: 77.1000 }, // India
    { name: "Toronto Pearson International Airport", lat: 43.6777, lon: -79.6248 }, // Canada
    { name: "Mexico City International Airport", lat: 19.4361, lon: -99.0719 }, // Mexico
    { name: "Incheon International Airport", lat: 37.4602, lon: 126.4407 }, // South Korea
    { name: "King Khalid International Airport", lat: 24.9576, lon: 46.6985 }, // Saudi Arabia
    { name: "Istanbul Airport", lat: 41.2753, lon: 28.7520 }, // Turkey
    { name: "Kuala Lumpur International Airport", lat: 2.7456, lon: 101.7072 }, // Malaysia
    { name: "Narita International Airport", lat: 35.7719, lon: 140.3929 }, // Japan
    { name: "Hartsfield-Jackson Atlanta International Airport", lat: 33.6407, lon: -84.4277 }, // USA
    { name: "Amsterdam Schiphol Airport", lat: 52.3105, lon: 4.7683 }, // Netherlands
    { name: "Munich Airport", lat: 48.3538, lon: 11.7861 }, // Germany
    { name: "Hong Kong International Airport", lat: 22.3080, lon: 113.9185 }, // Hong Kong
    { name: "Zürich Airport", lat: 47.4647, lon: 8.5492 }, // Switzerland
    { name: "Brussels Airport", lat: 50.9010, lon: 4.4844 }, // Belgium
    { name: "Vienna International Airport", lat: 48.1103, lon: 16.5697 }, // Austria
    { name: "Madrid-Barajas Adolfo Suárez Airport", lat: 40.4983, lon: -3.5676 }, // Spain
    { name: "Lisbon Humberto Delgado Airport", lat: 38.7742, lon: -9.1342 }, // Portugal
    { name: "Rome Fiumicino Leonardo da Vinci Airport", lat: 41.8003, lon: 12.2389 }, // Italy
    { name: "Cairo International Airport", lat: 30.1219, lon: 31.4056 }, // Egypt
    { name: "Doha Hamad International Airport", lat: 25.2731, lon: 51.6085 }, // Qatar
    { name: "Buenos Aires Ministro Pistarini International Airport", lat: -34.8222, lon: -58.5358 }, // Argentina
    { name: "Santiago International Airport", lat: -33.3930, lon: -70.7858 }, // Chile
    { name: "Auckland Airport", lat: -37.0081, lon: 174.7917 }, // New Zealand
    { name: "Johannesburg OR Tambo International Airport", lat: -26.1337, lon: 28.2425 }, // South Africa
    { name: "Abu Dhabi International Airport", lat: 24.4567, lon: 54.6511 }, // UAE
    { name: "Athens Eleftherios Venizelos International Airport", lat: 37.9364, lon: 23.9445 }, // Greece
    { name: "Stockholm Arlanda Airport", lat: 59.6498, lon: 17.9238 }, // Sweden
    { name: "Oslo Gardermoen Airport", lat: 60.1939, lon: 11.1004 }, // Norway
    { name: "Helsinki-Vantaa Airport", lat: 60.3172, lon: 24.9633 }, // Finland
    { name: "Bangkok Suvarnabhumi Airport", lat: 13.6900, lon: 100.7501 }, // Thailand
    { name: "Bangalore Kempegowda International Airport", lat: 13.1986, lon: 77.7066 }, // India
    { name: "Lagos Murtala Muhammed International Airport", lat: 6.5771, lon: 3.3212 }, // Nigeria
    { name: "Bogotá El Dorado International Airport", lat: 4.7016, lon: -74.1469 }, // Colombia
    { name: "Lima Jorge Chávez International Airport", lat: -12.0219, lon: -77.1143 }, // Peru
    { name: "Los Angeles International Airport", lat: 33.9428, lon: -118.4085 }, // California
    { name: "JFK International Airport", lat: 40.6413, lon: -73.7781 }, // New York
    { name: "Hartsfield-Jackson Atlanta International Airport", lat: 33.6407, lon: -84.4277 }, // Georgia
    { name: "Chicago O'Hare International Airport", lat: 41.9742, lon: -87.9073 }, // Illinois
    { name: "Dallas/Fort Worth International Airport", lat: 32.8998, lon: -97.0403 }, // Texas
    { name: "Denver International Airport", lat: 39.8561, lon: -104.6737 }, // Colorado
    { name: "San Francisco International Airport", lat: 37.6213, lon: -122.3790 }, // California
    { name: "Seattle-Tacoma International Airport", lat: 47.4502, lon: -122.3088 }, // Washington
    { name: "Miami International Airport", lat: 25.7959, lon: -80.2870 }, // Florida
    { name: "Orlando International Airport", lat: 28.4312, lon: -81.3081 }, // Florida
    { name: "Las Vegas McCarran International Airport", lat: 36.0801, lon: -115.1522 }, // Nevada
    { name: "Phoenix Sky Harbor International Airport", lat: 33.4342, lon: -112.0116 }, // Arizona
    { name: "Boston Logan International Airport", lat: 42.3656, lon: -71.0096 }, // Massachusetts
    { name: "Houston George Bush Intercontinental Airport", lat: 29.9902, lon: -95.3368 }, // Texas
    { name: "Charlotte Douglas International Airport", lat: 35.2140, lon: -80.9431 }, // North Carolina
    { name: "Washington Dulles International Airport", lat: 38.9531, lon: -77.4565 }, // Virginia
    { name: "Minneapolis-Saint Paul International Airport", lat: 44.8848, lon: -93.2223 }, // Minnesota
    { name: "Philadelphia International Airport", lat: 39.8729, lon: -75.2433 }, // Pennsylvania
    { name: "Salt Lake City International Airport", lat: 40.7899, lon: -111.9791 }, // Utah
    { name: "San Diego International Airport", lat: 32.7338, lon: -117.1933 }, // California
    { name: "Tampa International Airport", lat: 27.9790, lon: -82.5350 }, // Florida
    { name: "Portland International Airport", lat: 45.5898, lon: -122.5951 }, // Oregon
    { name: "Detroit Metropolitan Wayne County Airport", lat: 42.2124, lon: -83.3534 }, // Michigan
    { name: "Baltimore/Washington International Thurgood Marshall Airport", lat: 39.1754, lon: -76.6684 }, // Maryland
    { name: "Austin-Bergstrom International Airport", lat: 30.1975, lon: -97.6664 }, // Texas
    { name: "Nashville International Airport", lat: 36.1245, lon: -86.6782 }, // Tennessee
    { name: "San Jose International Airport", lat: 37.3639, lon: -121.9289 }, // California
    { name: "Cleveland Hopkins International Airport", lat: 41.4117, lon: -81.8498 }, // Ohio
    { name: "Kansas City International Airport", lat: 39.2976, lon: -94.7139 }, // Missouri
    { name: "St. Louis Lambert International Airport", lat: 38.7487, lon: -90.3700 }, // Missouri
    { name: "Newark Liberty International Airport", lat: 40.6895, lon: -74.1745 }, // New Jersey
    { name: "John Wayne Airport", lat: 33.6757, lon: -117.8682 }, // California
    { name: "Indianapolis International Airport", lat: 39.7173, lon: -86.2944 }, // Indiana
    { name: "Fort Lauderdale-Hollywood International Airport", lat: 26.0726, lon: -80.1527 }, // Florida
    { name: "Honolulu Daniel K. Inouye International Airport", lat: 21.3245, lon: -157.9251 }, // Hawaii
    { name: "Louis Armstrong New Orleans International Airport", lat: 29.9934, lon: -90.2580 }, // Louisiana
    { name: "Pittsburgh International Airport", lat: 40.4914, lon: -80.2329 }, // Pennsylvania
    { name: "Sacramento International Airport", lat: 38.6951, lon: -121.5908 }, // California
    { name: "Raleigh-Durham International Airport", lat: 35.8801, lon: -78.7880 }, // North Carolina
    { name: "Palm Beach International Airport", lat: 26.6832, lon: -80.0956 }, // Florida
    { name: "Memphis International Airport", lat: 35.0424, lon: -89.9767 }, // Tennessee
    { name: "Milwaukee Mitchell International Airport", lat: 42.9476, lon: -87.8966 }, // Wisconsin
    { name: "Cincinnati/Northern Kentucky International Airport", lat: 39.0488, lon: -84.6678 }, // Kentucky
    { name: "Jacksonville International Airport", lat: 30.4941, lon: -81.6879 }, // Florida
    { name: "Buffalo Niagara International Airport", lat: 42.9405, lon: -78.7322 }, // New York
];

// Function to get weather data from OpenWeatherMap API
async function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Function to display airport markers and weather
airports.forEach(airport => {
    // Add marker for each airport
    var marker = L.marker([airport.lat, airport.lon]).addTo(map);

    // Get weather data for each airport
    getWeather(airport.lat, airport.lon).then(weather => {
        var weatherInfo = `
            <strong>${airport.name}</strong><br>
            Weather: ${weather.weather[0].description}<br>
            Temperature: ${weather.main.temp} °C<br>
            Humidity: ${weather.main.humidity} %<br>
            Wind Speed: ${weather.wind.speed} m/s<br>
            Visibility: ${(weather.visibility / 1000).toFixed(1)} km
        `;

        // Bind popup with weather info to marker
        marker.bindPopup(weatherInfo);
    }).catch(err => {
        console.error("Failed to fetch weather data: ", err);
        marker.bindPopup(`<strong>${airport.name}</strong><br>Weather data unavailable.`);
    });
});
