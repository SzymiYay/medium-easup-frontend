import React, {useEffect, useState} from "react";
import './Section.css'
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import useAxios from "../../../hooks/useAxios";
import axios from "../../../apis/easup";
import Task from "../Task/Task";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import CreateTask from "../CreateTask/CreateTask";
import useAxiosFunction from "../../../hooks/useAxiosFunction";


function Section(props) {
    const [time, setTime] = useState(Date.now());
    useEffect( () => {
          const interval = setInterval(() => {
              setTime(Date.now());
              refetch();
          }, 2000);
          return () => {
              refetch();
              clearInterval(interval)
          };
      }, []
    );

    const [section, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/sections/${props.sectionId}`,
        requestConfig: {}
    })

    const [,,,axiosFetch] = useAxiosFunction();
    const createNewTask = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'post',
            url: '/tasks',
            requestConfig : {
                sectionId: props.sectionId.toString(),
                name: document.getElementById("task-name").value,
                description: document.getElementById("task-description").value,
                deadline: '2023-12-12'
            }
        });
        refetch();
    }

    return (
        <div className='section-component'>

            {loading && <LoadingIcon/>}

            {!loading && error && <h1>{error}</h1>}

            {!loading && !error && !section && <h1>Something went wrong</h1>}

            {!loading && !error && section &&
            <>
                <h2 className="section-title">{section.name}</h2>
                <CreateTask onAdd={createNewTask}/>
                <ul className='section-tasks-list'>
                    {section.tasks.map((taskItem, index) => {
                        return (
                            <Task sectionRefetch={refetch}
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