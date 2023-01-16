import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import useAxios from "../../hooks/useAxios";
import axios from "../../apis/easup";
import NavbarProject from "./NavbarProject"
import LoadingIcon from "../LoadingIcon/LoadingIcon";

function Navbar() {

  const [organization, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: `/organizations/${localStorage.getItem("organizationId")}`,
    requestConfig: {}
  })

  return (
        <div className='nav-menu'>
          <IconContext.Provider value={{ color: 'var(--text-color)' }}>
          <ul className='nav-menu-items'>
            <li>
              <h1 className="navbar-organization-name"><a href="/organization" className='navbar-organization-name'>{organization.name}</a></h1>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}

            {loading && <LoadingIcon/>}

            {!loading && error && <h1>{error}</h1>}

            {!loading && !error && !organization && <h1>Something went wrong</h1>}

            {!loading && !error && organization &&
                <>
                  {organization.projects.map((item, index) => {
                    return (
                        // <li key={index}>

                          <NavbarProject projectId={item.id}/>

                        // </li>
                    )
                  })}
                </>
            }
          </ul>
          </IconContext.Provider>

          <div className='easup-mark'>
            <h1 className='navbar-organization-name'>easup</h1>
          </div>
        </div>
  );
}

export default Navbar;