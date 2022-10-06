import React, { useEffect, useState } from 'react';
import { CDBSidebarContent, CDBSidebarHeader } from 'cdbreact';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './stylesheets/sidebar.css';
import { IoMdDisc } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Sidebar() {

    const URL = 'http://localhost:4500/api/getAll'
    const [records, setRecords] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

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
                            <div className="searchContainer">
                                <input
                                    placeholder="Search..."
                                    onChange={event => { setSearchTerm(event.target.value) }}
                                />

                            </div>
                            <div className='mennu2'>
                                {records.filter((loop) => {
                                    if (searchTerm == ""){
                                        return loop
                                    }else if (loop.nombre_distribuidor.toLowerCase().includes(searchTerm.toLowerCase())){
                                        return loop
                                    }
                                }).map((loop) => (
                                    <div className='Menu'>
                                        <SubMenu className='nameDis' title={loop.nombre_distribuidor} icon={<IoMdDisc className='myIcon' style={{ color: 'red' }} />}>
                                            {loop.Distribuidores_hospitalarios.map((loop1) => (
                                                <SubMenu title={loop1.DH_name} icon={<IoMdDisc className='mySubIcon1' style={{ color: 'green' }} />}>
                                                    {loop1.Hospitales.map((loop2) => (
                                                        <SubMenu title={loop2.hospital_name} icon={<IoMdDisc className='mySubIcon2' style={{ color: 'green' }} />}  >
                                                            {loop2.Oscann.map((loop3) => (
                                                                <div className='Hola' >{console.log(loop3.id)}<MenuItem icon={<IoMdDisc className='iconoOscanns' style={{ color: 'red' }} />}><div className='namesOscann'><Link to={`/Oscann/${loop3.id_oscann}/${loop3.NAME}/${loop2.hospital_name}/${loop1.DH_name}/${loop.nombre_distribuidor}`} style={{ color: 'inherit' }}>{loop3.NAME} </Link></div></MenuItem></div>
                                                            ))}
                                                        </SubMenu>
                                                    ))}
                                                </SubMenu>
                                            ))}
                                        </SubMenu>
                                    </div>
                                ))}
                            </div>
                        </Menu>
                    </CDBSidebarContent>
                </div>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
