import React from "react";
import './Board.css'
import Section from "../Section/Section";
import useAxios from "../../../hooks/useAxios";
import axios from "../../../apis/easup";
import LoadingIcon from "../../LoadingIcon/LoadingIcon";


function Board(props) {
    const [board, error, loading, refetch] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: `/boards/${props.boardId}`,
        requestConfig: {}
    })

    return (
        <div>
            {loading && <LoadingIcon/>}

            {!loading && error && <h1>{error}</h1>}

            {!loading && !error && !board && <h1>Something went wrong</h1>}

            {!loading && !error && board &&
                <div className="board-component">
                    {board[0].sections.map((sectionItem, index) => {
                        return (
                            <div className="section-div">
                                <Section
                                    key={index}
                                    id={index}
                                    sectionId={sectionItem.id}
                                    title={sectionItem.name}
                                    description={sectionItem.description}
                                />
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default Board;