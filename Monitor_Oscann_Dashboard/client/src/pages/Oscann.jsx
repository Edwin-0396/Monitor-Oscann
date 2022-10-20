import '../stylesheets/oscan.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {IoMdRefresh} from 'react-icons/io';
import { Link } from 'react-router-dom';


  const Oscann = () => {
    const {id, name, Hospital, DistribuidorHospital, nombre_distribuidor} = useParams()
    const [records, setRecords] = useState([]);
    const oscannAux = {
      "id_oscann": '-',
      "network_status": "-",
      "network_value": "-",
      "ram_status": "-",
      "ram_value": "-",
      "cpu_status": "-",
      "cpu_value": "-",
      "drive_status": "-",
      "drive_value": "-",
      "ledservice_status": "-",
      "ledservice_value": "-",
      "camera_status": "-",
      "camera_value": "-"
    }

    async function getRecords() {
      let flag = 0;
      const response = await fetch(`http://localhost:4600/apis/getOne/${id}`);
       // Handle errors
      if (!response.ok) {
        flag = 1;
      }
      if (flag === 1) {
        const responseBackup = await fetch(`http://localhost:4600/api/getOne/${id}`);
        
        let oscanns = await responseBackup.json();
  
        if (oscanns == null){
          oscanns = oscannAux;
          window.alert('Not information, current date : ' + Date());
        }
        else{
          window.alert('conected to Backup. the last update was : ' + Date(oscanns.updatedAt));
        }
        setRecords(oscanns)
      }
      if (flag === 0){
        const oscanns = await response.json();
        setRecords(oscanns)
      }
    }

    useEffect(() => {
      getRecords()
      // eslint-disable-next-line
    }, [id])

    return (
      <div className='appContainer'>
        <main className='OscannMain'>
          <header>
          <h3>Panel Information / Action</h3>
          <p><b>{nombre_distribuidor}&emsp;{">"}&emsp;{DistribuidorHospital}&emsp;{">"}&emsp;{Hospital}&emsp;{">"}&emsp;{name}</b></p>
        </header>
        <div className='tablesize'>
        <table className="table table-dark table-hover table-striped">
          <thead >
            <tr className="table-dark">
              <th>Status</th>
              <th>Element</th>
              <th>Value</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody >
            <>
            <tr className="table-active gray">
              <td>{records.network_status}</td>
              <td>Network</td>
              <td>{records.network_value}</td>
              <td></td>
            </tr>
            <tr className="table-active">
              <td>{records.ram_status}</td>
              <td>RAM</td> 
              <td>{records.ram_value}</td>
              <td></td>
            </tr>
            <tr className="table-active gray">
              <td>{records.cpu_status}</td>
              <td>CPU</td> 
              <td>{records.cpu_value}</td>
              <td></td>
            </tr>
            <tr className="table-active">
              <td>{records.drive_status}</td>
              <td>Drive (HD)</td> 
              <td>{records.drive_value}</td>
              <td></td>
            </tr>
            <tr className="table-active gray">
              <td>{records.ledservice_status}</td>
              <td>Led Service</td> 
              <td>{records.ledservice_value}</td>
              <td><IoMdRefresh className='iconref'/></td>
            </tr>
            <tr className="table-active">
              <td>{records.camera_status}</td>
              <td>Camera Service (HD)</td> 
              <td>{records.camera_value}</td>
              <td><IoMdRefresh className='iconref' /></td>
            </tr>
            </>
          </tbody>
        </table></div>
        <div className='Boton1'>
        <button onClick={getRecords}>Refresh</button>
        </div>
        <div className='Boton2'>
        <a href="http://localhost:8080/"><button>VNC</button></a>
        </div>
        </main>
      </div>
    )
  }
  export default Oscann