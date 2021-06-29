## Fair Weather

Fair Weather: (URL goes here)


## Project Description

Allows the user to lookup local weather forecasts for all U.S. cities.


## API and Data Sample

API: [OpenWeather](https://openweathermap.org/current)
```
{
    "coord": {
        "lon": -73.9496,
        "lat": 40.6501
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.6,
        "feels_like": 296.83,
        "temp_min": 291.61,
        "temp_max": 300.39,
        "pressure": 1005,
        "humidity": 70
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.79,
        "deg": 50,
        "gust": 1.79
    },
    "rain": {
        "1h": 0.15
    },
    "clouds": {
        "all": 75
    },
    "dt": 1624373099,
    "sys": {
        "type": 2,
        "id": 2037026,
        "country": "US",
        "sunrise": 1624353915,
        "sunset": 1624408223
    },
    "timezone": -14400,
    "id": 5110302,
    "name": "Brooklyn",
    "cod": 200
}
```


## Wireframes

![P1 Wireframe](https://user-images.githubusercontent.com/66581031/122944389-c9fdf500-d345-11eb-95d7-bef75edb2d7f.png)


## MVP 

- Use axios to make a request to get current weather conditions.
- Add search bar and dropdown menu functionality.
- Dynamically render city name, temperature, weather description, and time zone.
- Clear search results on query.
- Style using Flexbox.
- Deploy site to a hosting service.


## PostMVP  

- Home page should pull users current location from browser.
- Add localstorage so user's data can be saved to their browser.
- Add animations for dynamically rendered content.
- Add a random location functionality.


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jun 21-22| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jun 23| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|Jun 23-4| Psuedocode / Code | Complete
|Jun 24| Initial Clickable Model | Complete
|Jun 25| MVP | Complete
|Jun 28| Presentations | Complete


## Priority Matrix

![P1 Priority Matrix](https://user-images.githubusercontent.com/66581031/122933019-3d9b0480-d33c-11eb-83d9-b1f82e854422.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Axios/API request functionality | H | 3 hr | 3 hr | 3 hr |
| Core application structure (HTML) | H | 3 hr | 3 hr | 3 hr |
| Core application structure (Javascript) | H | 3 hr | 3 hr | 3 hr |
| Core application structure (CSS) | H | 3 hr | 3 hr | 3 hr |
| Search bar functionality | H | 3 hr | 3 hr | 3 hr |
| Dropdown menu functionality | H | 3 hr | 3 hr | 3 hr |
| Dynamically render content | H | 3 hr | 3 hr | 3 hr |
| Clear search results on query | H | 3 hr | 3 hr | 3 hr |
| Initial clickable model | H | 3 hr | 3 hr | 3 hr |
| Style with Flexbot| H | 3 hr | 3 hr | 3 hr |
| Deploy site to a hosting service| H | 3 hr | 3 hr | 3 hr |
| Minimum viable product | H | 3 hr | 3 hr | 3 hr |
| Clean code | H | 3 hr | 3 hr | 3 hr |
| Total | H | 39 hrs| 39 hrs | 39 hrs |


## Code Snippet

The code snippet below takes the values of the text input box (type city) and dropdown menu (select state), then pulls the data from OpenWeather API when the submit button is clicked.

```
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
```


## Change Log

- Added icons from Font Awesome.
- Cleaned up code and added comments.
- Moved random location functionality to PostMVP.