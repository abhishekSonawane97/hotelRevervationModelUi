import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a href={'/'} className='nav-link'>Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href={'/deskReservation'} className='nav-link'>Make a Desk Reservation</a>
          </li>
          <li className="nav-item">
            <a href={'/covidReport'} className='nav-link'>Covid Test Reporting</a>
          </li>
          <li className="nav-item">
            <a href={'/roomBook'} className='nav-link'>Room Bookings</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  )
}

export default Navbar


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           Home
//         </Link>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/deskReservation">
//                 Make a Desk Reservation
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/covidReport">
//                 Covid Test Reporting
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/roomBook">
//                 Room Bookings
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
