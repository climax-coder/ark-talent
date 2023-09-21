
import axios from 'axios';

const sendRequest = (encodedParams : string)=> {
    return new Promise((resolve, reject) => { 

        axios.get('https://api.coronavirus.data.gov.uk/v1/data?' + encodedParams)
        .then(response => {
            resolve(response.data.data[0]);  
        })
        .catch(error => {
            reject(error);
        });
    
     })
}



const getData = async () => {

    const dates = ["2021-01-11","2021-12-26",'2022-05-25',"2022-07-27","2023-03-30"]

    const data = []
    const
        AreaType = "nation",
        AreaName = "england";

    for (const date of dates) {
        const filters = [
          `areaType=${ AreaType }`,
          `areaName=${ AreaName }`,
          `date=${date}`,
        ],
        structure = {
            date: "date",
            name: "areaName",
            code: "areaCode",
            "newVaccinesGivenByPublishDate" : "newVaccinesGivenByPublishDate",
            "dailyCases": "newCasesByPublishDate",
            "dailyDeaths": "newDeaths28DaysByPublishDate",
            "cumVaccinesGivenByPublishDate": "cumVaccinesGivenByPublishDate"
        };
      
        const apiParams = `filters=${ filters.join(";") }&structure=${ JSON.stringify(structure) }`,
        encodedParams = encodeURI(apiParams);
        const recievedData = await sendRequest(encodedParams);
        data.push(recievedData)
        
      }

    return data;



  }


export default getData