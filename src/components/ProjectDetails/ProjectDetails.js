import React from 'react';

import './ProjectDetails.css';
import useAxios from "../../hooks/useAxios";
import useAxiosFunction from "../../hooks/useAxiosFunction";
import axios from "../../apis/easup";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import DeleteIcon from '@mui/icons-material/Delete';




function ProjectDetails(props) {
  const BoardIcon = (props) => {
    const [,,,axiosFetch] = useAxiosFunction();

    const deleteBoard = () => {
      axiosFetch({
        axiosInstance: axios,
        method: 'delete',
        url: `/boards/${props.boardId}`,
        requestConfig : {}
      });
      refetch();
    }


    function saveBoardId(){
      localStorage.setItem("boardId", JSON.stringify(props.boardId));
    }

    return (
      <div className='board-icon'>
        <DeleteIcon fontSize='large' className='delete-icon' onClick={deleteBoard}/>
        <Link to='/app/board' onClick={saveBoardId}>
          <h1>{props.boardName}</h1>
          <p>{props.boardDescription}</p>
        </Link>
      </div>
    );
  }

  const AddNewBoardIcon = (props) => {
    const [,,,axiosFetch] = useAxiosFunction();

    const createNewBoard = () => {
      axiosFetch({
        axiosInstance: axios,
        method: 'post',
        url: '/boards',
        requestConfig : {
          projectId: localStorage.getItem("projectId"),
          name: 'new board',
        }
      });
      refetch();
    }
    return (
      <a className='add-new-board-a' onClick={createNewBoard}>
        <div className='board-icon'>
          <h1>+</h1>
        </div>
      </a>
    );
  }

    const [project, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/projects/${localStorage.getItem("projectId")}`,
        requestConfig: {}
    })

    function Name(props) {
        return <h1 className = "card-name">{project.name}</h1>
    }

    function Description(props) {
        return <p className = "card-description">{project.description}</p>
    }

    function Details(props) {
        return <p className = "card-details">{project.details}</p>
    }

    function Boards(props) {
        return <div className='project-details-boards'>
            {project.boards.map((boardItem, index) => {
                return (
                    <BoardIcon
                        key={index}
                        id={index}
                        boardId={boardItem.id}
                        boardName={boardItem.name}
                        boardDescription={boardItem.description}
                    />
                );
            })}
            <AddNewBoardIcon/>
        </div>
    }

    return (
        <div className="board-card-div">
            {loading && <LoadingIcon/>}

            {!loading && error && <h1>{error}</h1>}

            {!loading && !error && !project && <h1>Something went wrong</h1>}

            {!loading && !error && project &&
                <div className="project-card">
                    <Name className="project-name" />
                    <Description className="project-description" />
                    <Details className="project-details" />
                    <hr />
                    <Boards />
                </div>
            }
        </div>
    )
}

export default ProjectDetails;