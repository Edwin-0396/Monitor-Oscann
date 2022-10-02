import '../stylesheets/oscan.css';
import '../images/aura.png';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {IoMdRefresh} from 'react-icons/io';


  const Oscann = () => {
    const {id} = useParams()
    const [records, setRecords] = useState([]);

    React.useEffect(() => {
      getRecords()
    }, [])

    async function getRecords() {
      const response = await fetch(`http://localhost:4600/api/getOne/${id}`);
      const oscanns = await response.json();
      setRecords(oscanns)
    }
    console.log(records)
    return (
      <div className='appContainer'>
        <main className='OscannMain'>
          <header>
          <h1>Panel Information / Action</h1>
          <p><b><pre>Oscann_1   {'>'}   Santa ana   {'>'}   eps_regional1   {'>'}   Colombia</pre></b></p>
        </header>
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
            <tr className='gray'>
              <td>OK</td>
              <td>Network</td> 
              <td>OK</td>
              <td></td>
            </tr>
            <tr>
              <td>OK</td>
              <td>RAM</td> 
              <td>30%</td>
              <td></td>
            </tr>
            <tr className='gray'>
              <td>OK</td>
              <td>CPU</td> 
              <td>29%</td>
              <td></td>
            </tr>
            <tr>
              <td>OK</td>
              <td>Drive (HD)</td> 
              <td>100%</td>
              <td></td>
            </tr>
            <tr className='gray'>
              <td>Stop</td>
              <td>Led Service</td> 
              <td>Fail</td>
              <td><IoMdRefresh className='iconref'/></td>
            </tr>
            <tr>
              <td>OK</td>
              <td>camera Service (HD)</td> 
              <td>OK</td>
              <td><IoMdRefresh className='iconref'/></td>
            </tr>
            </>
          </tbody>
        </table>
        <div className='Boton1'>
        <button>Refresh</button>
        </div>
        <div className='Boton2'>
        <button>VNC</button>
        </div>
        </main>
      </div>
    )
  }

  export default Oscann
