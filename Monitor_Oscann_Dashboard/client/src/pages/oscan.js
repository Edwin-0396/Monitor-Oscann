import '../stylesheets/oscan.css';
import '../images/aura.png';
import React, { useEffect, useState } from 'react';
export function Oscan() {

  const URL = 'http://localhost:4600/api/getAll'
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
  //var obj = records[0];
  //var key = Object.keys(obj)[0];
  //var value = obj[key];

  //console.log(typeof(records[0]))
  //console.log(records[0].Distribuidores_hospitalarios[0].DH_name)
  //console.log("key = ", key) // bar
  //console.log("value = ", value) // baz
  //console.log(records.length)
  //console.log(Object.keys(records[0])[0])
  //let keys = Object.keys(records)
  //const loopsDistribuidor = records.map(items)
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
          {records.map((loop) => (
            <>
            <tr>
              <td>{loop.Distribuidores_hospitalarios[0].DH_name}</td>
              <td>RAM</td> 
              <td>30%</td>
            </tr>
            </>
          ))}
          </tbody>
        </table>
      </div>
    )
}
