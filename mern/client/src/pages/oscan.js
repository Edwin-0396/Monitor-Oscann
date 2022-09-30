import '../stylesheets/oscan.css';
import '../images/aura.png';
import React, { useEffect, useState } from 'react';
export function Oscan() {

  const URL = 'http://localhost:4500/api/getAll'
  const [records, setRecords] = useState([]);

  

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(URL);
 
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
 
      const records = await response.json();
      setRecords(records);
    }
 
    getRecords();
 
    return;
  }, [records.length]);

  const result = records.find(({ _id }) => _id === "62f0678e21ec806286173967");
  const result1 = records.find(({ _id }) => _id === "62fa33b539ee1cfcb82d0491");
  console.log('result',result)
    return (
      <div className='appContainer'>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Element</th>
              <th>Value</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            <>
            {result1 &&
            <tr>
              <td>ok</td>
              <td>RAM</td> 
              <td>30%</td>
            </tr>}
            {result1 &&
            <tr>
              <td>ok</td>
              <td>Network</td> 
              <td>Ok</td>
            </tr>}
            {result1 &&
            <tr>
              <td>ok</td>
              <td>CPU</td> 
              <td>20%</td>
            </tr>}
            {result1 &&
            <tr>
              <td>ok</td>
              <td>Drive(HD)</td> 
              <td>60%</td>
            </tr>}
            {result1 &&
            <tr>
              <td>ok</td>
              <td>Led Service</td> 
              <td>Fail</td>
              <td>(o)</td>
            </tr>}
            {result1 &&
            <tr>
              <td>ok</td>
              <td>Camera</td> 
              <td>Ok</td>
              <td>(o)</td>
            </tr>}
            
            </>
          </tbody>
        </table>
      </div>
    )
}
