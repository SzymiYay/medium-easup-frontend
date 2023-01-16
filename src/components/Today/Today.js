import React from "react";
import useAxios from "../../hooks/useAxios";
import axios from "../../apis/easup";
import Task from "../BoardLogic/Task/Task";
import './Today.css'
import LoadingIcon from "../LoadingIcon/LoadingIcon";

function Today() {

    const [tasks, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/users/1/tasks`,
        requestConfig: {}
    })

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    today = `${mm}-${dd}-${yyyy}`;

    return (
        <>
        {loading && <LoadingIcon/>}

        {!loading && error && <h1>{error}</h1>}

        {!loading && !error && !tasks && <h1>Something went wrong</h1>}

        {!loading && !error && tasks &&
            <div className="all-tasks">
                {tasks.map((taskItem, index) => {
                    if (Date.parse(taskItem.deadline) < Date.parse(today)) {
                        return (
                            <div className="task-item">
                                <h1>{taskItem.name}</h1>
                                <p>{taskItem.description} </p>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>}
        </>

    );
}

export default Today;