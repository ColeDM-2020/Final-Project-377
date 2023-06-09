function injectHTML(list){
  console.log('fired injectHTML')
  const target = document.querySelector('.stats_list');
  target.innerHTML = '';
  let str = `<table>
              <thead>
                <th>Stat Name</th>
                <th>Stat Value</th>
              </thead>`
  list.forEach((item) => {
    str += `<tr>
              <td>${item.displayName}</td>
              <td>${item.value}</td>
            </tr>`;
  })
  str += `</table>`;
  target.innerHTML = target.innerHTML + str;
  
}

let currentList = [];

async function mainEvent() { // the async keyword means we can make API requests
  const mainForm = document.querySelector('.main_form');
  const generalDataButton = document.querySelector('#general');
  const passingDataButton = document.querySelector('#passing');
  const rushingDataButton = document.querySelector('#rushing');
  const receivingDataButton = document.querySelector('#receiving');
  const defensiveDataButton = document.querySelector('#defensive');
  const defensiveInterceptionsDataButton = document.querySelector('#defensiveInterceptions');
  const scoringDataButton = document.querySelector('#scoring');

  // Basic GET request - this replaces the form Action
  const results = await fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/5526/statistics/0');

  // This changes the response from the GET into data we can use - an "object"
  const storedList = await results.json();

  console.log('Loading Data'); 

  localStorage.setItem('storedData', JSON.stringify(storedList));
  
  parsedData = storedList

  console.log(parsedData)

  dataDict = parsedData.splits.categories;
  console.log(dataDict);

  generalDataButton.addEventListener('click', (event) => {
    console.log('Generate General Stats');
    dataList = dataDict[0].stats;
    console.log(dataList);
    injectHTML(dataList);
  })

  passingDataButton.addEventListener('click', (event) => {
    console.log('Generate Passing Stats');
    dataList = dataDict[1].stats;
    console.log(dataList);
    injectHTML(dataList);
  })
  
  rushingDataButton.addEventListener('click', (event) => {
    console.log('Generate Rushing Stats');
    dataList = dataDict[2].stats;
    console.log(dataList);
    injectHTML(dataList);
  })

  receivingDataButton.addEventListener('click', (event) => {
    console.log('Generate Receiving Stats');
    dataList = dataDict[3].stats;
    console.log(dataList);
    injectHTML(dataList);
  })

  defensiveDataButton.addEventListener('click', (event) => {
    console.log('Generate Defensive Stats');
    dataList = dataDict[4].stats;
    console.log(dataList);
    injectHTML(dataList);
  })

  defensiveInterceptionsDataButton.addEventListener('click', (event) => {
    console.log('Generate Defensive Int Stats');
    dataList = dataDict[5].stats;
    console.log(dataList);
    injectHTML(dataList);
  })

  scoringDataButton.addEventListener('click', (event) => {
    console.log('Generate Scoring Stats');
    dataList = dataDict[6].stats;
    console.log(dataList);
    injectHTML(dataList);
  })

}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
