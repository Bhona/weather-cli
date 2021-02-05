#!/usr/bin/env node
// console.log("Hello!");

const yargs = require('yargs');
// const axios = require('axios');
const weather = require('openweather-apis');

const options = yargs
.usage("Usage: -c <city>")
.option("c", {alias:"city", describe:"City name", type: "string", demandOption: false})
.argv;

const city = options.city ? options.city : 'Miami';

const greetting = `Hello, ${city}!`;
console.log(greetting);

weather.setLang('en');  
weather.setCity(`${city}`);
weather.setAPPID('05008d950a0652216170b875a4545719');

weather.getAllWeather(function(err, JSONObj){
    console.log(JSONObj);
});

