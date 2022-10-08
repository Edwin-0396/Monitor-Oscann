import '../stylesheets/oscan.css';
import '../images/aura.png';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {IoMdRefresh} from 'react-icons/io';


  const Oscann = () => {
    const {id, name, Hospital, DistribuidorHospital, nombre_distribuidor} = useParams()
    const [records, setRecords] = useState([]);

    React.useEffect(() => {
      getRecords()
    }, [id])

    async function getRecords() {
      const response = await fetch(`http://localhost:4500/api/getOne/${id}`);
      const oscanns = await response.json();
      setRecords(oscanns)
    }

    console.log(id)
    return (
      <div className='appContainer'>
        <main className='OscannMain'>
          <header>
          <h3>Panel Information / Action</h3> {console.log(nombre_distribuidor)}
          <p><b>{nombre_distribuidor}&emsp;{">"}&emsp;{DistribuidorHospital}&emsp;{">"}&emsp;{Hospital}&emsp;{">"}&emsp;{name}</b></p>
        </header>
        <div className='tablesize'>
        <table class="table table-dark table-hover table-striped">
          <thead >
            <tr class="table-dark">
              <th>Status</th>
              <th>Element</th>
              <th>Value</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody >
            <>
            <tr className='gray' class="table-active">
              <td>{records.network_status}</td>
              <td>Network</td> 
              <td>{records.network_value}</td>
              <td></td>
            </tr>
            <tr class="table-active">
              <td>{records.ram_status}</td>
              <td>RAM</td> 
              <td>{records.ram_value}</td>
              <td></td>
            </tr>
            <tr className='gray' class="table-active">
              <td>{records.cpu_status}</td>
              <td>CPU</td> 
              <td>{records.cpu_value}</td>
              <td></td>
            </tr>
            <tr class="table-active">
              <td>{records.drive_status}</td>
              <td>Drive (HD)</td> 
              <td>{records.drive_value}</td>
              <td></td>
            </tr>
            <tr className='gray' class="table-active">
              <td>{records.ledservice_status}</td>
              <td>Led Service</td> 
              <td>{records.ledservice_value}</td>
              <td><IoMdRefresh className='iconref'/></td>
            </tr>
            <tr class="table-active">
              <td>{records.camera_status}</td>
              <td>camera Service (HD)</td> 
              <td>{records.camera_value}</td>
              <td><IoMdRefresh className='iconref' /></td>
            </tr>
            </>
          </tbody>
        </table></div>
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
