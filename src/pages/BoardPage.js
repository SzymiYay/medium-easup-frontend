import React from "react";
import Footer from "../components/Footer/Footer";
import Board from "../components/BoardLogic/Board/Board";

import '../App.css'

function BoardPage() {
    return (
        <div className='in-navbar-layout-container'>
            <Board />
            <Footer />
        </div>
    );
}

export default BoardPage;





