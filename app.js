// API endpoints:
// Countries: 
// 1. https://restcountries.eu/rest/v2/all
// 2. https://restcountries.eu/rest/v2/name/${country}?fullText=true
// Weather: api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
// 

// Global variables:
// Creates a variable called countriesDiv that refers to the countries class.
const countriesDiv = document.querySelector(".countries");

// Creates a variable called button2 that refers to the button class.
const button = document.querySelector(".button");

// Creates a variable called button2 that refers to the button class.
const button2 = document.querySelector(".button2");



// Creates a variable called getData, that's assigned to an arrow function, that allows us to get data from an API (via promise... then/catch).
const getData = () => {
  axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      // Logs API data to browser console.
      const data = response.data;
      // console.log(data);

      // A for loop that goes through every index in the API data array.
      for (let i = 0; i < data.length; i++) {
        // Logs out all indexes in the API data array (250 total).
        console.log(data[i]);

        // Creates a variable and div element called countryDiv.
        const countryDiv = document.createElement("div");
        // Adds a class called country. 
        countryDiv.classList.add("country");
        // Appends the country class to the countries class.
        countriesDiv.append(countryDiv);

        // Creates a variable and h3 element called nameElement.
        const nameElement = document.createElement("h3");
        // Adds text to nameElement (country name). 
        nameElement.textContent = `Country: ${data[i].name}`;
        // Appends text (country name) to country class.
        countryDiv.append(nameElement);

        // Creates a variable and p element called capitalElement.
        const capitalElement = document.createElement("p");
        // Adds text to capitalElement (country capital).
        capitalElement.textContent = `Capital: ${data[i].capital}`;
        // Appends text (country capital) to country class.
        countryDiv.append(capitalElement);
      }
      // Not yet.
      return data;
    })
    .catch((error) => {
      // handle error
      console.error(error);
    })
    .finally(() => {
      // always executed
    })
};

// Need to invoke function in order to see data in console. Comment out when done.
// getData();


// Adds an event when the button 2 class (Random Capital) is clicked...
button2.addEventListener("click", () => {
  // ... which invokes the removeCountry() function.
  removeCountry();
  getData();
});

// Creates and defines the removeCountry() function.
function removeCountry() {
  // While the countries class has a child element...
  while (countriesDiv.lastChild) {
    // ... keep removing until there's no more children.
    countriesDiv.removeChild(countriesDiv.lastChild);
  }
}
