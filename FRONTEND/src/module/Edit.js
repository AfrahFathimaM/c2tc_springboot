import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Edit() {
    let navigate = useNavigate();
    
      const [user, setUser] = useState({
        
          mall:"",
          name:"",
          password:"",
          phone:""
      });
    

    // const {id} = useParams();
    const {id,mall,name,password,phone} = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadDetails();
    }, []);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8089/admins/${id}`, user);
      alert("details updated")
      navigate("/Home");
    };
  
    const loadDetails = async () => {
      const result = await axios.get(`http://localhost:8089/admins/${id}`);
      setUser(result.data);
    };
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Edit Admin</h2>

        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
                    <label htmlFor="ID" className='form-label'>
                        ID
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='enter id'
                    name="id"
                    value={id}
                    onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="MALLNAME" className='form-label'>
                        MALLNAME
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='enter mallname'
                    name="mall"
                     value={mall}
                     onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="NAME" className='form-label'>
                        NAME
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='enter name'
                    name="name"
                     value={name}
                     onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="PASSWORD" className='form-label'>
                    PASSWORD
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='enter password'
                    name="password"
                     value={password}
                     onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="PHONE" className='form-label'>
                        PHONE
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='enter phone'
                    name="phone"
                     value={phone}
                     onChange={(e)=>onInputChange(e)}
                     />
            </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/Home">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  </div>
);
  
}
