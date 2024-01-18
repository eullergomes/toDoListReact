import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Button from './Button';
import './TeskDetails.css'

const Taskdetails = () => {
  const params = useParams();
  const navegate = useNavigate();
  
  const handleBackButtonClick = () => {
    navegate(-1); //back a page
  }

  return ( 
    <>
      <div className="back-button-container">
        <Button
          onClick={handleBackButtonClick}
        >Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat eius distinctio minima similique sit. Quas alias aspernatur nemo! Ea doloribus exercitationem, recusandae quam consectetur reprehenderit facilis nemo impedit? Mollitia, illum.</p>
      </div>
    </>
   );
}
 
export default Taskdetails;