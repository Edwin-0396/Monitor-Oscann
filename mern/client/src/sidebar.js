import React, { useState } from 'react';
import {CDBSidebarContent, CDBSidebarHeader} from 'cdbreact';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './stylesheets/sidebar.css';
import {IoMdDisc} from 'react-icons/io';
import { Link } from 'react-router-dom';

function Sidebar() {
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
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Aura</Link> 
                    </CDBSidebarHeader>
                    <CDBSidebarContent>
                        <Menu>
                            <div className='Menu'>
                                <SubMenu title="Distributor 1" icon= {<IoMdDisc className='myIcon' style={{color: 'red'}} />}>
                                    <SubMenu title="Hospital 1" icon= {<IoMdDisc  className='mySubIcon' style={{color: 'green'}} />}>
                                        <div><MenuItem><Link to='/oscan'>Oscan 1</Link></MenuItem></div>
                                        <MenuItem>Oscan 2 </MenuItem>
                                        <MenuItem>Oscan 3 <IoMdDisc className='mySubIcon' /></MenuItem>
                                    </SubMenu>
                                    <SubMenu title="Hospital 2" icon= {<IoMdDisc className='mySubIcon' style={{color: 'red'}} />} >
                                        <MenuItem>Oscan 1 <IoMdDisc className='mySubIcon' style={{color: 'red'}} /></MenuItem>
                                        <MenuItem>Oscan 2 <IoMdDisc className='mySubIcon' style={{color: 'red'}} /></MenuItem>
                                        <MenuItem>Oscan 3 <IoMdDisc className='mySubIcon' style={{color: 'red'}} /></MenuItem>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu title="Distributor 2" icon= {<IoMdDisc className='myIcon' style={{color: 'green'}} />} >
                                    <SubMenu title="Hospital 1" icon= {<IoMdDisc className='mySubIcon' style={{color: 'green'}} />} >
                                        <MenuItem>Oscan 1 </MenuItem>
                                        <MenuItem>Oscan 2 </MenuItem>
                                        <MenuItem>Oscan 3 </MenuItem>
                                    </SubMenu>
                                    <SubMenu title="Hospital 2">
                                        <MenuItem>Oscan 1 </MenuItem>
                                        <MenuItem>Oscan 2 </MenuItem>
                                        <MenuItem>Oscan 3 </MenuItem>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu title="Distributor 3" icon= {<IoMdDisc className='myIcon' style={{color: 'green'}} />} >
                                    <SubMenu title="Hospital 1">
                                        <MenuItem>Oscan 1 </MenuItem>
                                        <MenuItem>Oscan 2 </MenuItem>
                                        <MenuItem>Oscan 3 </MenuItem>
                                    </SubMenu>
                                    <SubMenu title="Hospital 2">
                                        <MenuItem>Oscan 1 </MenuItem>
                                        <MenuItem>Oscan 2 </MenuItem>
                                        <MenuItem>Oscan 3 </MenuItem>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu title="Distributor 4" icon= {<IoMdDisc className='myIcon' style={{color: 'green'}} />} >
                                    <SubMenu title="Hospital 1">
                                        <MenuItem>Oscan 1 </MenuItem>
                                        <MenuItem>Oscan 2 </MenuItem>
                                        <MenuItem>Oscan 3 </MenuItem>
                                    </SubMenu>
                                    <SubMenu title="Hospital 4">
                                        <MenuItem>Oscan 1 </MenuItem>
                                        <MenuItem>Oscan 2 </MenuItem>
                                        <MenuItem>Oscan 3 </MenuItem>
                                    </SubMenu>
                                </SubMenu>
                            </div>
                        </Menu>
                    </CDBSidebarContent>
                </div>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
