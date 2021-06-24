
// API Endpoint:  api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}&units=imperial
// API Key: 1d015797722f985c58d03693976c4b24




// Global variables:
// Creates a variable called statesDiv that refers to the state class.
// const stateDiv = document.querySelector(".states");
// Creates a variable called button that refers to the button class.
// const button = document.querySelector(".button");
// ...
// const dataContainer = document.querySelector("state-#data");




const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const cityTextInput = document.querySelector('#city-search').value
  console.log(cityTextInput)
  const stateOptionInput = document.querySelector('#select-state').value
  console.log(stateOptionInput)
  fetchData(cityTextInput, stateOptionInput)
})
// Try/catch & async/await function for each state (50 total).
async function fetchData(city, state) {
  try {
    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=1d015797722f985c58d03693976c4b24`
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=1d015797722f985c58d03693976c4b24&units=imperial`
    const response = await axios(url);
    console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
// Create dynamic HTML.
function showStateData(data) {
  const dataContainer = document.querySelector("#state-data");
  console.log(data);
  let stateData = `<h1>${data.name}</h1> <h3>Temperature: ${data.main.temp}</h3> <h3>Weather description: ${data.weather[0].description}</h3> <h3>Timezone: ${data.timezone}</h3>`
  dataContainer.insertAdjacentHTML("beforeend", stateData);
  return stateData;
};
// Remove previous state data.
function removeState(elementToRemove) {
  while (elementToRemove.lastChild) {
    elementToRemove.removeChild(elementToRemove.lastChild);
  }
};
// Global variables for dropdown menu.
const selectTag = document.querySelector("#select-state");
const dataContainer2 = document.querySelector("#data-container");