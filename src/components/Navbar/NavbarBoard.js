import React from "react";
import {Link, useNavigate} from "react-router-dom";

import './Navbar.css';
import useAxios from "../../hooks/useAxios";
import axios from "../../apis/easup";

function NavbarBoard(props) {
    const navigate = useNavigate();

    function saveBoardId(){
        localStorage.setItem("boardId", JSON.stringify(props.boardId));
    }

    return (
        <Link to='/app/board' onClick={saveBoardId}>
            <div className='navbar-board-div'>
                <p className='board-text'>{props.boardName}</p>
            </div>
        </Link>

    );
}

export default NavbarBoard;