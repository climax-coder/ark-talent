'use client'

import React, { useEffect, useState } from 'react';
import { DualAxes } from '@ant-design/plots';
import getData from '@/utils/getData';

const DualAxesComponent = () => {

  const [data, setData] = useState<any[]>([]);
  const [dualAxesArray, setDualAxesArray] = useState<any[]>([]);
    

    
 
  useEffect( ()=>{
    (async()=>{
      const covidData = await getData();
        setData(covidData);
    })()
      
  },[])

  useEffect(() => {
    if(data && data.length !== 0){

      const transformedArray = []

      for (const item of data) {
        transformedArray.push({
          time: item.date,
          value: item.newVaccinesGivenByPublishDate,
          type: 'Vacines Given'
        });
        transformedArray.push({
          time: item.date,
          value: item.dailyCases,
          type: 'Daily Cases'
        });
        transformedArray.push({
          time: item.date,
          value: item.dailyDeaths,
          type: 'Daily Deaths'
        });
        
      }

      setDualAxesArray(transformedArray)      
    }
  }, [data])
    

  const config = {
    data: [dualAxesArray, []],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
        isGroup: true,
        seriesField: 'type',
      },
      {
        geometry: 'line',
        lineStyle: {
          lineWidth: 0,
        },
      },
    ],
  };

  return (
    <DualAxes {...config} />
  )
}

export { DualAxesComponent }