import React from 'react';
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Project() {
    return (
        <>
            <div className='in-navbar-layout-container'>
                <ProjectDetails/>
            </div>
        </>
    );
}

export default Project;