import React, {useState} from "react";
import {Link} from "react-router-dom";

import NavbarBoard from "./NavbarBoard"
import useAxios from "../../hooks/useAxios";
import axios from "../../apis/easup";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import Section from "../BoardLogic/Section/Section";

import './Navbar.css';


function NavbarProject(props) {

    let [isExpanded, setExpanded] = useState(false);

    function reduce(event) {
      setExpanded(false);
      event.preventDefault();
    }

    function expand() {
      setExpanded(true);
    }

    const [project, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/projects/${props.projectId}`,
        requestConfig: {}
    })

    function saveProjectId() {
        localStorage.setItem("projectId", JSON.stringify(props.projectId));
        expand();
    }

  return (
          <div className='navbar-project-div'>
              <hr/>

              {loading && <LoadingIcon/>}

              {!loading && error && <h1>{error}</h1>}

              {!loading && !error && !project && <h1>Something went wrong</h1>}

              {!loading && !error && project &&
                <>
                    <div className='nav-text projects'>
                        <Link to='/app/project' onClick={saveProjectId}>
                            <h3>{project.name}</h3>
                        </Link>
                    </div>
                    {isExpanded && project.boards.map((item, index) => {
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