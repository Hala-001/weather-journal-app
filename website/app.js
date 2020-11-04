// const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID='
// const apiKey = '4d6b29227ecea0d474660d645e97131a';

// GET Request.
// fetch(baseURL+apiKey)
// // Handle success
// .then(response => response.json())  // convert to json
// .then(json => console.log(json))    //print data to console
// .catch(err => console.log('Request Failed', err)); // Catch errors

// GET Request.
async function getUserAsync() {
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
  const apiKey = '4d6b29227ecea0d474660d645e97131a';
  // let response = await fetch(baseURL+apiKey);
  // let data = await response.json()
  // console.log(data)

  //Create an event listener for the element with the id: generate

  document.getElementById('generate').addEventListener('click', callback);
  function callback() {
    const zipcode = document.getElementById('zip').value;

    const d = new Date();
    let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
    const date = document.getElementById('date').value;
    document.getElementById('date').innerHTML=newDate;
    
    const content = document.getElementById('feelings').value;
    document.getElementById('content').innerHTML=content;

    
    
    const tempDiv = document.getElementById('temp');
    
    //postData('/', { temperature: 'X', date: newDate, user_response:content  })
    
   
    fetch(baseURL + zipcode + ',us&appid=' + apiKey)
      .then(response => response.json())  // convert to json
      .then(json => console.log(json))    //print data to console
      .catch(err => console.log('Request Failed', err)); // Catch errors


    fetch(baseURL + zipcode + ',us&appid=' + apiKey)
      .then(response => response.json())  // convert to json
      //.then(json => console.log(json.main['temp']))    //print data to console
      .then(json =>  tempDiv.innerHTML = json.main['temp'])
      .then(json => postData('/', { temperature: json.main['temp'], date: newDate, user_response:content  }))
      
      .catch(err => console.log('Request Failed', err)); // Catch errors

      
  }

}
getUserAsync()


/* Global Variables */
// Create a new date instance dynamically with JS
// const d = new Date();
// let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
// console.log(newDate);

const postData = async (url = '', projectData = {}) => {
  console.log(projectData)

  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData), // body data type must match "Content-Type" header        
  });

  try {
    const newData = await response.json();
    return newData
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }

}

postData('/', { temperature: 'X', date: 'Y', user_response: 'Z' })


// add these values with a key to projectData.




// postData['userresponse:'] = 'Z';
// console.log(postData['userresponse:'])


