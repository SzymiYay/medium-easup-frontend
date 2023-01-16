import React, {useState} from "react";
import './Section.css'
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import useAxios from "../../../hooks/useAxios";
import axios from "../../../apis/easup";
import Task from "../Task/Task";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
// import CreateArea from "../../CreateArea/CreateArea"

// sectionId, sectionTitle, sectionDescription
function Section(props) {
    const [section, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/sections/${props.sectionId}`,
        requestConfig: {}
    })

    // function addTask(newTask) {
    //
    // }

    return (
        <div className='section-component'>

            {loading && <LoadingIcon/>}

            {!loading && error && <h1>{error}</h1>}

            {!loading && !error && !section && <h1>Something went wrong</h1>}

            {!loading && !error && section &&
            <>
                <h2 className="section-title">{section.name}</h2>
                {/*<CreateArea onAdd={}/>*/}
                <ul className='section-tasks-list'>
                    {section.tasks.map((taskItem, index) => {
                        return (
                            <Task
                                key={index}
                                id={index}
                                taskId={taskItem.id}
                                title={taskItem.title}
                                content={taskItem.content}
                            />
                        );
                    })}

                </ul>
            </>
            }
        </div>
    );
}

export default Section;