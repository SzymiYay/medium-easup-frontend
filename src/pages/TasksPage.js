import React from 'react';

import Tasks from "../components/Tasks/Tasks";
import Navbar from "../components/Navbar/Navbar";


function TasksPage() {
    return (
        <div className='tasks'>
            <Navbar/>
            <Tasks />
        </div>
    )
}

export default TasksPage;