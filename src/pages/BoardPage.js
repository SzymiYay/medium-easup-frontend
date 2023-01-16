import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Board from "../components/BoardLogic/Board/Board";

import '../App.css'

function BoardPage() {
    return (
        <div className='board'>
            <Navbar/>
            <Board />
            <Footer />
        </div>
    );
}

export default BoardPage;





