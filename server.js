/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Navya Student ID: 145966222 Date: 2.2.2024
*
*  Online (Cyclic) Link: 
*
********************************************************************************/

const unCountryData = require("./modules/unCountries");

const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;


    app.get('/', (req, res) => {
      res.send(`Assignment 2: Navya - 145966222`); 
    });


    app.get('/un/countries', (req, res) => {
      unCountryData.getAllCountries()
        .then(countries => res.send(countries))
        .catch(err => res.send(err));
    });



    app.get('/un/countries/code-demo', (req, res) => {
      const countryCode = 'in';   
      unCountryData.getCountryByCode(countryCode)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    });


    app.get('/un/countries/region-demo', (req, res) => {
      const regionName = 'asia'; 
      unCountryData.getCountriesByRegion(regionName)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    });


    unCountryData.initialize()
  .then(() => {
    app.listen(HTTP_PORT, () => console.log(`Server listening on: ${HTTP_PORT}`));
     })

  .catch(err => console.log("Error ", err));
