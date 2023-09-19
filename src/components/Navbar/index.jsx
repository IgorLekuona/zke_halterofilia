import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import LanguageSelect from '../LanguageSelectButtons';
import { I18nContext } from '../../i18n';
import { SidebarData } from './SidebarData';
import { SignUp } from '../SignUp';
import './style.css';

import halt_cl from './halt_club_logo.png';
import halt_cl_small from './zke_halt_logo.png';

export const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);

  const {translate} = React.useContext(I18nContext);

  const [prevWindowSize, setPrevWindowSize] = useState(window.innerWidth);

  const handleWindowResize = useCallback(() => {
    let windowsize = window.innerWidth;
    if (windowsize <= 630 && prevWindowSize > 630) {
      setPrevWindowSize(windowsize);
    } else if (windowsize > 630 && prevWindowSize <= 630) {
      setPrevWindowSize(windowsize);
    }
  });

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    }
  }, [handleWindowResize]);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' >
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to='/' className='navbar-img-container'>
            <img src={prevWindowSize > 630 ? halt_cl : halt_cl_small} className="navbar-img" alt="ZKE Halterofilia logo"/>   
          </Link>
          <div className="invisible-space"/>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items font-face-bago' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
              <Link to='/' className='menu-bars'>
                <IoIcons.IoIosHome />
              </Link>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    {item.icon}
                    <span>{translate(item.title)}</span>
                  </Link>
                </li>
              );
            })}
            <div className="final-div">
              <LanguageSelect/>
              <SignUp />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}