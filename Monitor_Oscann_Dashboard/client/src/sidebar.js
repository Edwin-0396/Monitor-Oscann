import React, { useEffect, useState } from 'react';
import {CDBSidebarContent, CDBSidebarHeader} from 'cdbreact';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './stylesheets/sidebar.css';
import { IoMdDisc } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Sidebar() {
    
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
    const [isOpen, setIsOpen] = useState()
        if (!isOpen) {
            return (
                <i className="fa fa-bars fa-large" style={{ margin: 30, cursor: 'pointer', color: 'black' }} onClick={function () {
                    setIsOpen(true)
                }}></i>
            )
        }
    return (
        <div>
            <ProSidebar>
                <div className='ProSidebar'>
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" onClick={function () {
                        setIsOpen()
                    }}></i>}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Oscann</Link> 
                    </CDBSidebarHeader>
                    <CDBSidebarContent>
                        <Menu>
                            {records.map((loop) => (
                            <div className='Menu'>
                                <SubMenu title={loop.nombre_distribuidor} icon= {<IoMdDisc className='myIcon' style={{color: 'red'}} />}>
                                {loop.Distribuidores_hospitalarios.map((loop1) => (
                                    <SubMenu title={loop1.DH_name} icon= {<IoMdDisc  className='mySubIcon' style={{color: 'green'}} />}>
                                        {loop1.Hospitales.map((loop2) => (
                                        <SubMenu title={loop2.hospital_name} icon= {<IoMdDisc  className='mySubIcon' style={{color: 'green'}} />}>
                                            {loop2.Oscann.map((loop3) => (
                                                <div ><MenuItem icon= {<IoMdDisc className='iconoOscanns' style={{color: 'red'}} />}><Link to={`/Oscann/${loop3.ID}`}>{loop3.NAME} </Link></MenuItem></div>
                                            ))}
                                        </SubMenu>
                                        ))}    
                                    </SubMenu>
                                    ))}
                                </SubMenu>
                            </div>
                            ))}
                        </Menu>
                    </CDBSidebarContent>
                </div>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
