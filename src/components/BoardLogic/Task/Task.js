import React, {useEffect, useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './Task.css'
import useAxios from "../../../hooks/useAxios";
import axios from "../../../apis/easup";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import useAxiosFunction from "../../../hooks/useAxiosFunction";

function Task(props) {
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

    const [task, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/tasks/${props.taskId}`,
        requestConfig: {}
    })

    const [,,,axiosFetch] = useAxiosFunction();

    const deleteTask = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'delete',
            url: `/tasks/${props.taskId}`,
            requestConfig : {}
        });
        props.sectionRefetch();
    }

    return (
        <div className="task">
            {loading && <LoadingIcon/>}

            {!loading && error && <h1>{error}</h1>}

            {!loading && !error && !task && <h1>Something went wrong</h1>}

            {!loading && !error && task &&
                <>
                    <h1>{task.name}</h1>
                    <p>{task.description}</p>
                    <div className='task-buttons'>
                        <button>
                            <ArrowCircleLeftIcon/>
                        </button>
                        <button>
                            <ArrowCircleRightIcon/>
                        </button>
                        <button onClick={deleteTask}>
                            <DeleteIcon/>
                        </button>
                    </div>
                </>
            }
        </div>
    );
}

export default Task;