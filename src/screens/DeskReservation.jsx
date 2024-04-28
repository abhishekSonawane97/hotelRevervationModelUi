import React, { useState } from 'react'

const DeskReservation = ({ desks }) => {

  const [formData, setFormData] = useState({
    name: '',
    selectDate : 'YYYY-MM-DD',
    deskId: "",
  });
    
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await fetch('/api/desk/deskBook',{
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify({...formData})
      })
      const data = await res.json();
      // console.log('formData : ', formData);
      setFormData({
        name: '',
        selectDate : 'YYYY-MM-DD',
        deskId: "",
      });
    }
    catch(err){
      console.log(err.message);
    }
  };


  return (
    <div className="container pt-3">
      <div className="header">
        <h1 className="display-4">Make a Desk Reservation</h1>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <form onSubmit={handleSubmit} id="desk-booking-form" className="mb-5">
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
              value={formData.selectDate}
              min={new Date().toISOString().split("T")[0]} 
              onChange={(e) => setFormData({ ...formData, selectDate: e.target.value })}
            />
            </div>

            <div className="form-group">
              <label htmlFor="desk" className="form-label">
                Select Desk:
              </label>
              <select className="form-select" aria-label="Default select example"
            value={formData.desk} 
            onChange={(e)=> setFormData({...formData, deskId: e.target.value})} >
              {
                 desks && desks.map(desk => (
                  desk.isAvailable && <option key={desk._id} value={desk._id}>{ desk.deskName }</option>
                ))
              }
                </select>
            </div>

            <button type="submit" className="btn btn-primary center">
              Confirm desk booking
            </button>
          </form>
        </div>
      </div>
      </div>
  )
}

export default DeskReservation



