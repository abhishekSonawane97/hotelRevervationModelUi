import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CovidReport from './screens/CovidReport';
import DeskReservation from './screens/DeskReservation';
import RoomBook from './screens/RoomBook';
import Chatbot from './components/Chatbot';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';


function App() {


  const [ rooms, setRooms ] = useState([]);
  const [ desks, setDesks ] = useState([]);
  const [ vaccinationDetails, setVaccinationDetails ] = useState([]);


    const getRooms = async()=>{
        try{
            const res = await fetch('/api/room/getRooms');
            const data = await res.json();
            // console.log(data);
            setRooms(data);
        }
        catch(err){
            console.log(err.message)
        }
    };

    const getDesks = async()=>{
        try{
            const res = await fetch('/api/desk/getDesks');
            const data = await res.json();
            // console.log(data);
            setDesks(data);
        }
        catch(err){
            console.log(err.message)
        }
    };

    const getVaccinationDetail = async()=>{
        try{
            const res = await fetch('/api/vaccination/getVaccinationDetail');
            const data = await res.json();
            console.log(data);
            setVaccinationDetails(data);
        }
        catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        getRooms();
        getDesks();
        getVaccinationDetail();
    }, []);



  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/covidReport" element={<CovidReport vaccinationDetails={vaccinationDetails} />} />
          <Route path="/deskReservation" element={<DeskReservation desks={desks} />} />
          <Route path="/roomBook" element={<RoomBook rooms={rooms} />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
 