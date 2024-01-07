// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Use the filter method to get countries with population less than 200,000
    let countries = data.filter(country => {
      return country.population && country.population < 200000;
    });

    // Extract country names from the filtered countries
    let countryNames = countries.map(country => {
      return country.name.common;
    });

    // Display the list of countries with population less than 200,000
    console.log('Countries with population less than 200,000:', countryNames);
  });
