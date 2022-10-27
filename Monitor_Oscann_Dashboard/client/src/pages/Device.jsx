import '../stylesheets/device.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {IoMdRefresh} from 'react-icons/io';
import {Alert} from 'reactstrap';


  const Device = () => {
    const {id, name, Hospital, DistribuidorHospital, nombre_distribuidor} = useParams()
    const [records, setRecords] = useState([]);
    const [responseStatus, setResponseStatus] = useState([]);
    const [Reboot, setReboot] = useState([]);
    const [ResponseReboot, setResponseReboot] = useState([]);
    const deviceAux = {
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
    const alertNotInfo = 'Not information';
    const alertBackUp = 'conected to Backup. the last update was : ' ;
    let reboots = 0;
    let flagReboot = 0;
    

    async function getReboot() {
      const responseReboot = await fetch(`http://localhost:4600/api/Reboot`);
        //setReboot(flagReboot);

        if (responseReboot.ok) {
          flagReboot = 1;
          reboots = await responseReboot.json();
          setResponseReboot(reboots);
          setReboot(flagReboot)
        }
    }
    console.log(Reboot)

    async function getRecords() {
      flagReboot = 0;
      setReboot(flagReboot)
      let flag = 0;
      let devices = 0;
      const response = await fetch(`http://localhost:4600/apis/getOne/${id}`);
       // Handle errors
      if (!response.ok) {
        flag = 1;
      }
      if (flag === 1) {
        const responseBackup = await fetch(`http://localhost:4600/api/getOne/${id}`);
        
        devices = await responseBackup.json();
  
        if (devices == null){
          devices = deviceAux;
         
        }
        setRecords(devices)
        setResponseStatus(flag)
      }
      if (flag === 0){
        
        devices = await response.json();
        if (devices === null){
          devices = deviceAux
        }
        setRecords(devices)
        setResponseStatus(flag)
      }
      
    }
    
    useEffect(() => {
      getRecords()
      // eslint-disable-next-line
    }, [id])

    return (
      <div className='appContainer'>
        <main className='DeviceMain'>
          <header>
            {responseStatus === 1 ?
              records.id_oscann === '-' ? <Alert color="danger">{alertNotInfo}</Alert>
              :<Alert color="warning">{alertBackUp + Date(records.updatedAt)}</Alert>
            :records.id_oscann === '-' ? <Alert>{alertNotInfo}</Alert>
            :''
            }
            {Reboot === 1 ? <Alert color="success">Service {ResponseReboot}</Alert>
            : ''
            }
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
              <td><IoMdRefresh onClick={getReboot} className='iconref'/></td>
            </tr>
            <tr className="table-active">
              <td>{records.camera_status}</td>
              <td>Camera Service (HD)</td> 
              <td>{records.camera_value}</td>
              <td><IoMdRefresh onClick={getReboot} className='iconref'/></td>
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
  export default Device