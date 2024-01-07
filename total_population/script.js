// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Calculate total population using reduce
    let totalPopulation = data.reduce((accumulator, country) => {
      if (country.population && typeof country.population === 'number') {
        return accumulator + country.population;
      }
      return accumulator; 
    }, 0);
    
    // Display the total population
    console.log('Total population of all countries:', totalPopulation);
  });
