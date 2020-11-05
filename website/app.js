const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = ',us&appid=4d6b29227ecea0d474660d645e97131a&units=imperial';

// GET Request.
document.getElementById('generate').addEventListener('click', performAction);
function performAction(e) {
  const zipcode = document.getElementById('zip').value;
  const d = new Date();
  let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
  const content = document.getElementById('feelings').value;
  //console.log(zipcode)
  getWeather(baseURL, zipcode, apiKey)

    .then(function (data) {
      //console.log(data)
      postData('/addWeather', { temp: data.main['temp'], date: newDate, content: content })
      updateUI()
    });
};

const getWeather = async (url) => {
  const zipcode = document.getElementById('zip').value;
  const res = await fetch(baseURL + zipcode + apiKey)
  //const res = await fetch(url)
  try {
    const data = await res.json();
    //console.log(data)
    //console.log(data.main['temp'])
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}


const postData = async (url = '', data = {}) => {
  //console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    //console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    console.log(allData.data[0]);
    document.getElementById('date').innerHTML = allData.data[0].date;
    document.getElementById('temp').innerHTML = allData.data[0].temp;
    document.getElementById('content').innerHTML = allData.data[0].content;

  } catch (error) {
    console.log("error", error);
  }
}