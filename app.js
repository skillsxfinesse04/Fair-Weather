// 1. Can all the API link be put into an array and called using ${}? How would this work for states like New York (new+york)?
// 2. States won't append to text input or dropdown list. 
// 3. The last state (Wyoming) appears over and over. I tried commenting out fetchData() but that didn't do anything.
// 4. For the dropdown menu is it possible to put the values in there predefined (write out each state), and then have an API link associated with each value?
// 5. The state data appears on page load and won't clear.




// API Endpoint (Weather):  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// API Key (Weather): 1d015797722f985c58d03693976c4b24




// Global variables:
// Creates a variable called citiesDiv that refers to the state class.
const stateDiv = document.querySelector(".cities");

// Creates a variable called button that refers to the button class.
const button = document.querySelector(".button");

// ...
const dataContainer = document.querySelector("state-#data");




// Try/catch & async/await function for each state (50 total).
async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=alabama&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=alaska&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=arizona&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=arkansas&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=california&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=colorado&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=connecticut&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=delaware&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=florida&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=georgia&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=hawaii&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=idaho&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=indiana&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=iowa&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=kansas&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=kentucky&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=louisiana&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=kansas&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=kentucky&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=louisiana&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();



async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=maine&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=maryland&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=massachusetts&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=michigan&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=minnesota&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=mississippi&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=missouri&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=montana&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=nebraska&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=nevada&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=new+hampshire&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=new+jersey&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=new+mexico&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=new+york&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=north+carolina&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=north+dakota&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=ohio&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=oklahoma&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=oregon&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=pennsylvania&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=rhode+island&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=south+carolina&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=south+dakota&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=tennessee&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=texas&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=utah&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=vermont&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=virginia&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=washington&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=west+virginia&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=wisconsin&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();


async function fetchData() {
  try {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=wyoming&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios(url);
    // console.log(response.data);
    showStateData(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
fetchData();




// Create dynamic HTML.
function showStateData(data) {
  const dataContainer = document.querySelector("#state-data");
  console.log(data);
  let stateData = `<h1>${data.name}</h1> <h3>Temperature: ${data.main.temp}</h3> <h3>Weather description: ${data.weather[0].description}</h3> <h3>Timezone: ${data.timezone}</h3>`

  dataContainer.insertAdjacentHTML("beforeend", stateData);
  return stateData;
};




// Dynamically search state using HTML form with eventHandler.
const form = document.querySelector("#state-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector("state-search").value;
  // console.log(inputValue);

  // Remove elements.
  removeState(dataContainer);

  // API call.
  fetchData(inputValue);

  // Reset text input to an empty string.
  document.querySelector("#state-search").value = "";
});




// Remove previous state data.
function removeState(elementToRemove) {
  while (elementToRemove.lastChild) {
    elementToRemove.removeChild(elementToRemove.lastChild);
  }
};








// Global variables for dropdown menu.
const selectTag = document.querySelector("#select-state");

const dataContainer2 = document.querySelector("#data-container");



// For dynamic drop down list
const getStateList = async () => {
  try {
    const getStateUrl = "http://api.openweathermap.org/data/2.5/weather?q=california&appid=1d015797722f985c58d03693976c4b24"
    const response = await axios.get(getStateURL);
    // console.log(response.data);
    const stateList = Object.keys(response.data);
    setOptions(stateList);
  } catch (error) {
    console.error(error);
  }
};
getStateList();




// Create form option tags from the states list.
function setOptions(list) {
  // console.log(list);
  list.forEach((state) => {
    // console.log(state);
    let optionTag = document.createElement("option");
    optionTag.textContent = breed;
    selectTag.append(optionTag);
  });
};




// Select the option tag value.
function getValue(e) {
  e.preventDefault();
  let optionValue = selectTag.value;
  // console.log(optionValue);
  getBreedImage(optionValue);
  return optionValue;
};




// Set up event handler to capture option value.
form.addEventListener("submit", getValue);




// Remove old image from the DOM.
function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }
};