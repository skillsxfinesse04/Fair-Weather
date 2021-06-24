async function fetchData() {
  try {
    // Instead of US can I put ${state}, and create a variable that = all 50 states, then do something like ${state[i]}?
    const url = "http://api.openweathermap.org/data/2.5/weather?q=united+states+of+america&appid=1d015797722f985c58d03693976c4b24";
    const response = await axios(url);
    // Logs API data.
    console.log(response.data);
  } catch (error) {
    console.error(error);
  };
};
// Invoke function in order for it to work.
fetchData();