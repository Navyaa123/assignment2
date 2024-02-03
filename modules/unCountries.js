const countryData = require("../data/countryData");

const regionData = require("../data/regionData");

let countries = [];

function initialize() {
  
  
  return new Promise((resolve) => {
    countries = [];
    countryData.forEach((country) =>
     {
      const regionId = country.regionId;

      const region = regionData.find((region) => region.id === regionId);

      const countryWithRegion = { ...country, region };

      countries.push(countryWithRegion);

    });

   resolve(countries);

  });
}

function getAllCountries() {

  return new Promise((resolve) => {
    resolve(countries);
  });
}

function getCountryByCode(countryCode) {

  return new Promise((resolve, reject) => {
    const country = countries.find(

      (c) => c.a2code.toLowerCase() === countryCode.toLowerCase()
    );
    if (country) {
      resolve(country);
    } else {

      reject('Unable to find the requested country.');
    }
  });
}

function getCountriesByRegion(region) {
  return new Promise((resolve, reject) => {
    
    const matchingCountries = countries.filter((country) =>
      country.region.name.toLowerCase().includes(region.toLowerCase())
    );

    if (matchingCountries.length > 0) {
      resolve(matchingCountries);
    } 
    else {
      reject('Unable to find countries in the requested region.');
    }
  });
}

module.exports = {
  initialize,
  getAllCountries,
  getCountryByCode,
  getCountriesByRegion,
};



