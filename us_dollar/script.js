// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries that use US dollars as currency
    let usDollarCountries = data.filter(country => {
      return country.currencies && country.currencies.USD;
    });

    // Extract country names from the filtered countries
    let usDollarCountryNames = usDollarCountries.map(country => {
      return country.name.common;
    });

    // Display the list of countries using US dollars as currency
    console.log('Countries that use US dollars as currency:', usDollarCountryNames);
  });
