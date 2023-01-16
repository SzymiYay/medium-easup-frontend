import React from "react";
import {Link} from "react-router-dom";

import NavbarBoard from "./NavbarBoard"
import useAxios from "../../hooks/useAxios";
import axios from "../../apis/easup";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import Section from "../BoardLogic/Section/Section";

import './Navbar.css';


function NavbarProject(props) {

    const [project, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/projects/${props.projectId}`,
        requestConfig: {}
    })

    function saveProjectId() {
        localStorage.setItem("projectId", JSON.stringify(props.id));
    }

  return (
          <div className='navbar-project-div'>
              <hr/>

              {loading && <LoadingIcon/>}

              {!loading && error && <h1>{error}</h1>}

              {!loading && !error && !project && <h1>Something went wrong</h1>}

              {!loading && !error && project &&
                <>
                    <li className='nav-text projects'>
                        <Link to='/project' onClick={saveProjectId}>
                            <h3>{project.name}</h3>
                        </Link>
                    </li>
                    {project.boards.map((item, index) => {
                        return (
                            <li key={index}  className='nav-text projects'>
                                <NavbarBoard boardId={item.id} boardName={item.name}/>
                            </li>
                        )
                    })}
                </>
              }
          </div>
  );
}

export default NavbarProject;