import React, { useState } from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
export default function Add() {
    let navigate=useNavigate()

    
    const[user,setUsers]=useState({
        id:"",
        mall:"",
        name:"",
        password:"",
        phone:""
    })
    const{id,mall,name,password,phone}=user;

    const onInputChange=(e)=>{
setUsers({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8089/admins",user)
    navigate("/Home")
    };
  return (
    <div className="container">
        <div className='row'>
            <div className="col-md-6 offset-md-3 border rounded p-8 mt-3 shadow">
                <h2 className="text-center m-4">Register Admin</h2>
                <form onSubmit={(e)=>onSubmit(e)}> 
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
                <div>
                    <button type="submit" className="btn btn-outline-primary">SUBMIT</button>
                    <Link className="btn btn-outline-danger mx-3" to="/Home">CANCEL</Link>
                </div>
                </form>
            </div>
        </div>
         </div>
  )
}
