// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Use the filter method to get countries from Asia continent/region
    let asiaCountries = data.filter(country => {
      return country.region === 'Asia';
    });

    // Extract country names from the filtered countries
    let asiaCountryNames = asiaCountries.map(country => {
      return country.name.common;
    });

    // Display the list of countries from Asia continent/region
    console.log('Countries from Asia continent/region:', asiaCountryNames);
  })
