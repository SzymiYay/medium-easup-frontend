import React, {useEffect, useState} from "react";
import './Board.css'
import Section from "../Section/Section";
import useAxios from "../../../hooks/useAxios";
import axios from "../../../apis/easup";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";
import useAxiosFunction from "../../../hooks/useAxiosFunction";
import DeleteIcon from "@mui/icons-material/Delete";
import {Link} from "react-router-dom";
import CreateTask from "../CreateTask/CreateTask";
import Task from "../Task/Task";


function Board() {

    const [board, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/boards/${localStorage.getItem("boardId")}`,
        requestConfig: {}
    }, [])

    const [time, setTime] = useState(Date.now());

    // useEffect( () => {
    //     const interval = setInterval(() => {
    //         setTime(Date.now());
    //         refetch();
    //     }, 5000);
    //       return () => {
    //           refetch();
    //         clearInterval(interval)
    //     };
    //   }, []
    // );

    const AddNewSectionIcon = (props) => {
        const [,,,axiosFetch] = useAxiosFunction();

        const createNewSection = () => {
            axiosFetch({
                axiosInstance: axios,
                method: 'post',
                url: '/sections',
                requestConfig : {
                    boardId: localStorage.getItem("boardId"),
                    name: document.getElementById('board-name').value,
                    description: 'Board description'
                }
            });
            refetch();
        }
        return (
          <>
              <div className='create-section-div'>
                  <form className="create-section-form">
                      <input
                        placeholder="Board name"
                        id="board-name"
                      />
                  </form>
              </div>
              <a onClick={createNewSection}>
                  <div className='add-section-component'>
                      <h1>+</h1>
                  </div>
              </a>
          </>


        );
    }

    const DeleteSectionIcon = (props) => {
        const [,,,axiosFetch] = useAxiosFunction();

        const deleteSection = () => {
            axiosFetch({
                axiosInstance: axios,
                method: 'delete',
                url: `/sections/${props.sectionId}`,
                requestConfig : {}
            });
            refetch();
        }

        return (
          <div className='section-delete-div' onClick={deleteSection}>
              <DeleteIcon fontSize='large' className='delete-section-icon'/>
          </div>
        );
    }




    return (
        <>
            {loading && <LoadingIcon/>}

            {!loading && error && <h1>{error}</h1>}

            {!loading && !error && !board && <h1>Something went wrong</h1>}

            {!loading && !error && board &&
                <div className="board-component">
                    {board.sections.map((sectionItem, index) => {
                        return (
                            <div className="section-div">
                                <Section
                                    key={index}
                                    id={index}
                                    sectionId={sectionItem.id}
                                    title={sectionItem.name}
                                    description={sectionItem.description}
                                />
                                <DeleteSectionIcon sectionId={sectionItem.id}/>
                            </div>
                        )
                    })}
                    <div className="section-div">
                        <AddNewSectionIcon/>
                    </div>

                </div>
            }
        </>
    );
}

export default Board;