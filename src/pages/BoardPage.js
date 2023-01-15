import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Board from "../components/BoardLogic/Board/Board";

function BoardPage() {
    return (
        <div className='board'>
            <Navbar/>
            {/*TODO: ustawic boardID w navbar po wyborze boardu*/}
            {/*<Board boardId={localStorage.getItem("boardId")}/>*/}
            <Board boardId={1}/>
            <Footer />
        </div>
    );
}

export default BoardPage;





