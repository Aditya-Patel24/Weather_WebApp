export const fetchWeather = async (city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=21aeb8a610d740b5a7704900240304&q=${city}&aqi=yes&lang=en`);
    //https://www.weatherapi.com/api-explorer.aspx {api is from}
    const data = await response.json();
    return data;
  };