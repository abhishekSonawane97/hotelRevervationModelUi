import React, { useState } from 'react'

const CovidReport = ({ vaccinationDetails }) => {

  const [formData, setFormData] = useState({
    name: '',
    testDate : 'YYYY-MM-DD',
    isVaccinated : false,
    status: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await fetch('/api/vaccination/createVaccination',{
        method : 'POST',
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify({...formData})
      })
      const data = await res.json();
      setFormData({
        name: '',
        testDate : 'YYYY-MM-DD',
        isVaccinated:false,
        status: "",
      });
    }
    catch(err){
      console.log(err.message);
    }
  };


  return (
    <div className="container pt-3">
      <div className="header">
        <h1 className="display-4">Covid Test Report</h1>
      </div> 
      <div className="row">
        <div className="col-md-6 offset-md-3 pt-3">
          <form id="registration-form"  onSubmit={handleSubmit} className="mb-5">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" className="form-control" 
              id="name"
              name="name"
              placeholder='Please enter your name'
              required
              value={formData.name}
              onChange={(e)=> setFormData({...formData, name :e.target.value})}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date_test_taken" className="form-label">Date Test Taken:</label>
              <input type="date" className="form-control" id="date_test_taken"
              name="testDate"
              required
              placeholder='DD-MM-YYYY'
              value={formData.testDate}
              onChange={(e) => setFormData({ ...formData, testDate: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="vaccination_status" className="form-check-label">Vaccinated ?</label>
              <input type="checkbox" className="form-check-input" id="vaccination_status"
              checked={formData.isVaccinated}
              onClick={(e) => setFormData({ ...formData, isVaccinated: true })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="test_result" className="form-label">Test Result:</label>
              <select className="form-select" aria-label="Default select example"
              onChange={(e)=> setFormData({...formData, status: e.target.value})}
              >
                <option value="">Select Status</option>
                <option value="negative">Negative</option>
                <option value="positive">Positive</option>
                </select>

              
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <h1></h1>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="custom-heading">Submitted Records:</h1>
          <h1></h1>
          <h1></h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date Test Taken</th>
                <th>Vaccination Status</th>
                <th>Test Result</th>
              </tr>
            </thead>
            <tbody id="registrations">
            
            {
              vaccinationDetails && vaccinationDetails.map(ele => (
                <tr key={ele._id}>
                  <td>{ele.name}</td>
                  <td>{ele.testDate}</td>
                  <td>{ele.isVaccinated? 'YES' : 'NO'}</td>
                  <td>{ele.status}</td>
                </tr>
              ))
            }
          </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CovidReport
