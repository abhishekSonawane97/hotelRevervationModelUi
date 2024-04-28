import React, { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaVirusCovid } from "react-icons/fa6";
import { RiReservedFill } from "react-icons/ri";
import Chatbot from '../components/Chatbot';


const HomeScreen = () => {

  const [ helpInput, setHelpInput ] = useState('');
  const handleHelp = ()=>{
    setHelpInput("");
  }


  return (
    <div className="container pt-3 home">
      <div className="header mb-4">
        <h1 className="display-4">Office Bookings</h1>
        <p>Work space reservation, covid registration and room bookings</p>

        <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="How can we help ?" aria-label="Recipient's username" aria-describedby="button-addon2"
      onChange={(e)=> setHelpInput(e.target.value)} />
      <button className="btn btn-primary" type="button" id="button-addon2"
      onClick={handleHelp}>Submit</button>
    </div>
      </div>

      <div className="card-container">
          
          {/* card  */}
          <div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body">
      <p><FaCalendarAlt /></p>
        <h5 className="card-title">Desk Reservation</h5>
        <a href={'/deskReservation'} className="card-link">
        <p className="card-text">Reserve a desk here</p>
        </a>
      </div>
    </div>
          {/* card  */}
          <div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body">
        
        <p><FaVirusCovid /></p>
        <h5 className="card-title">Covid Test Reporting</h5>
        <a  href={'/covidReport'} className="card-link">
        <p className="card-text">Register your COVID information here</p>
        </a>
      </div>
    </div>
          {/* card  */}
          <div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body">
      <p><RiReservedFill /></p>
        <h5 className="card-title">Room Bookings</h5>
        <a  href={'/roomBook'}  className="card-link">
        <p className="card-text">Reserve a room here</p>
        </a>
      </div>
    </div>



        </div>
      {/* chatbot*/}
      <Chatbot />
      </div>
  )
}

export default HomeScreen
