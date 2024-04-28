import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [ userData, setUserData ]= useState({
        username : "",
        email : "",
        password : ""
    });
    // const [ error, setError ] = useState('');
    const [ showError, setShowError ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const { username, email, password } = userData;
        try{
            setShowError(false);
            if(!username, !password, !email){
                setShowError(true);
                return;
            }
            const res = await fetch(`/api/auth/signup`,{
                method : 'POST',
                headers : { 'Content-Type' : 'application/json' },
                body : JSON.stringify({...userData}) });

                const data = await res.json();
                if(!res.ok){
                    console.log(data.message)
                }
                if(res.ok){
                    console.log('signup success')
                    setUserData({
                        username : "",
                        email : "",
                        password : ""
                    });
                    navigate('/')
                }
        }
        catch(err){
            console.log(err.message);
        }
    };
    
  return (
    <>
      <div className="container">
      <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" onChange={(e)=> setUserData({...userData, username : e.target.value})} />
        {
            showError? (
                <p className='text-red'>Username is required</p>
            ) : (
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            )
        }
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" onChange={(e)=> setUserData({...userData, email : e.target.value})} />
        {
            showError? (
                <p className='text-red'>email is required</p>
            ) : (
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            )
        }
        
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" onChange={(e)=> setUserData({...userData, password : e.target.value})}/>
        {
            showError? (
                <p className='text-red'>password is required</p>
            ) : (
                <div id="emailHelp" className="form-text">We'll never share your password with anyone else.</div>
            )
        }
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
    </div>

    </>
  )
}

export default Signup
