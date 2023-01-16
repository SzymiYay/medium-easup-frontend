import React from 'react';
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Project() {
    return (
        <>
            <Navbar/>
            <div className='project'>
                <ProjectDetails/>
            </div>
            <Footer/>
        </>
    );
}

export default Project;