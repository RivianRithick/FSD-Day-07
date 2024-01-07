// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over each country using forEach
    data.forEach(country => {
      // Extract and print the name, capital, and flag
      let name = country.name.common; 
      let capital = country.capital;
      let flag = country.flags.png;

      // Print the details for each country
      console.log('Country Name:', name);
      console.log('Capital:', capital);
      console.log('Flag:', flag);
      console.log('-------------------------');
    });
  });

