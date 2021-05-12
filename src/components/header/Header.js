import React from 'react';
import Logo from '../../asset/images/top-logo.png';
import Nav from 'react-bootstrap/Nav';
import HomeIcon from '@material-ui/icons/Home';
import { Icon } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import LaptopIcon from '@material-ui/icons/Laptop';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';

const Header = () =>{
    return (
       <header className="header">
         <div className="container">
            <a href="https://finalmundose.herokuapp.com/">
                <img src={Logo} alt="Landing Proyecto Final" className='logoHeader'/>
            </a>
            <Nav className='navbar'>
            
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#home"><Icon className='iconHeader'> 
              <HomeIcon />
            </Icon> Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#about"> <Icon><PeopleOutlineIcon/></Icon> About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#products"> <Icon><WorkOutlineIcon/></Icon> Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#services"> <Icon><LaptopIcon/></Icon> Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navbar-item" href="#contact" color="white"> <Icon><ContactMailOutlinedIcon/></Icon> Contact</Nav.Link>
              </Nav.Item>
            </Nav>
                   
         </div>
       </header>
    )


}

export default Header
