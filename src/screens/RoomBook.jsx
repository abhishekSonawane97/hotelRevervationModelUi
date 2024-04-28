import React, { useState } from 'react';



const RoomBook = ({ rooms }) => {

    // console.log('rooms : ', rooms);
    const [formData, setFormData] = useState({
        name: '',
        selectDate : 'YYYY-MM-DD',
        roomId: "",
      });
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        try{
          const res = await fetch('/api/room/roomBook',{
            method : 'POST',
            headers : { 'Content-Type' : 'application/json'},
            body : JSON.stringify({...formData})
          })
          const data = await res.json();
          // console.log('formData : ', formData);
          setFormData({
            name: '',
            selectDate : 'YYYY-MM-DD',
            roomId: "",
          });
        }
        catch(err){
          console.log(err.message);
        }
      };
    

  return (
    <div className="container pt-3">
    <div className="header">
      <h1 className="display-4">Book a Room</h1>
    </div>

    <div className="row">
      <div className="col-md-6 offset-md-3 pt-3">
        <form onSubmit={handleSubmit} id="room-booking-form" className="mb-5">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder='Please enter your name'
              required 
              value={formData.name}
              onChange={(e)=> setFormData({...formData, name :e.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Select Date:
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              required
              value={formData.date}
              min={new Date().toISOString().split("T")[0]} 
              onChange={(e) => setFormData({ ...formData, selectDate: e.target.value })}
            />
            
          </div>

          <div className="form-group">
            <label htmlFor="desk" className="form-label">
              Select Room:
            </label>
            <select className="form-select" aria-label="Default select example"
            value={formData.room} onChange={(e)=> setFormData({...formData, roomId: e.target.value})}>
              {
                rooms && rooms.map(room => (
                  room.isAvailable && <option key={room._id} value={room._id}>{ room.roomName }</option>
                ))
              }
                </select>
          </div>
          <button type="submit" className="btn btn-primary center">
            Confirm room booking
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default RoomBook
