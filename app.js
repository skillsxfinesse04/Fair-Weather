
// API Endpoint:  api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}&units=imperial
// API Key: 1d015797722f985c58d03693976c4b24




// Global variables:
const dataContainer = document.querySelector("#city-data");




// Pulls API data and logs errors.
async function fetchData(city, state) {
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=1d015797722f985c58d03693976c4b24&units=imperial`;
    const response = await axios(url);
    // console.log(response.data);
    // Removes the previous data container before creating a new one.
    removeElement(dataContainer);
    showCityData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};




// Creates a variable that targets the form element.
const form = document.querySelector('form');

// When the submit button is clicked...
form.addEventListener('submit', (e) => {
  // Prevents page from reloading when submit is clicked.
  e.preventDefault();
  // Takes value from text input box.
  const cityTextInput = document.querySelector('#city-search').value;
  // console.log(cityTextInput);
  // Takes value from from dropdown menu.
  const stateOptionInput = document.querySelector('#select-state').value;
  // console.log(stateOptionInput);
  // Pulls data from API using the values from cityTextInput and stateOptionInput as parameters.
  fetchData(cityTextInput, stateOptionInput);
});




// Creates a data container to store data pulled from step above (Dynamic HTML).
function showCityData(data) {
  const dataContainer = document.querySelector("#city-data");
  // console.log(data);
  let cityData = `<h1>${data.name}</h1> <h3>Temperature: ${data.main.temp}</h3> <h3>Weather description: ${data.weather[0].description}</h3> <h3>Timezone: ${data.timezone}</h3>`;
  dataContainer.insertAdjacentHTML("beforeend", cityData)
  return cityData;
};




// Removes previous city data.
function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }
};