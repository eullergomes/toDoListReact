import React from "react";
import { CgClose, CgInfo } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './Task.css'

const Task = ({ task, handleTaskClick, hundleTaskDeletion }) => {
    
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`); //push
    }
    
    return (
        <div 
            className="task-container"
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}    
        > 
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="bottons-container">
                <button 
                    className='remove-task-button'
                    onClick={() => hundleTaskDeletion(task.id)}
                > <CgClose/>
                </button>

                <button 
                    className='see-task-details-button'
                    onClick={() => handleTaskDetailsClick()}
                > <CgInfo/>
                </button>
            </div>
        </div>
    );
    
}
 
export default Task;