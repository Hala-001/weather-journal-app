async function getUserAsync() {
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = ',us&appid=4d6b29227ecea0d474660d645e97131a&units=imperial';

const d = new Date();
const newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click',fetchURL);

const content = document.getElementById('feelings').value;

function fetchURL(e){

const Zipcode = document.getElementById('zip').value;

    const URL = baseURL + Zipcode + apiKey;

    fetch(URL)
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    
    .catch(err => console.log('Request Failed', err)); // Catch errors    
    };
    
    }
   getUserAsync()
   

   

