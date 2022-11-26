//import {Axios} from "axios";

const axios = require("axios");

const URL = "https://restcountries.com/v3.1/all";

axios.get(URL).then(function (response) {

    let CountryList=response.data;
    let StatusCode=response.status;
    //let StatusMsg=response.message;

    console.log(CountryList);
    console.log(StatusCode);

}).catch(function (error) {
    console.log("Error");
})
