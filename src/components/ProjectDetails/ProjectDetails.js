import React from 'react';

import './ProjectDetails.css';
import useAxios from "../../hooks/useAxios";
import axios from "../../apis/easup";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {Link} from "react-router-dom";

const BoardIcon = (props) => {
    function saveBoardId(){
        localStorage.setItem("boardId", JSON.stringify(props.boardId));
    }

    return (
        <Link to='/board' onClick={saveBoardId}>
            <div className='board-icon'>
                <h1>{props.boardName}</h1>
                <p>{props.boardDescription}</p>
            </div>
        </Link>
    );
}

function ProjectDetails(props) {
    const [project, error, loading] = useAxios({
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