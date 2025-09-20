import React, {useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Viewit() {
    const[user, setUser]=useState({
        id:"",
        mall:"",
        name:"",
        password:"",
        phone:"",
    });
    const {id}=useParams();
    useEffect(()=>{
        loadDetails();
      
    },[]);

    const loadDetails=async()=>{
        const result=await axios.get(`http://localhost:8089/admins/${id}`);
        setUser(result.data);
    };
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">User Details</h2>

        <div className="card">
          <div className="card-header">
            Details of user id : {user.id}
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>ID</b>
                {user.id}
              </li>
              <li className="list-group-item">
                <b>MallName</b>
                {user.mall}
              </li>
              <li className="list-group-item">
                <b>Admin NAme</b>
                {user.name}
              </li>
              <li className="list-group-item">
                <b>password</b>
                {user.password}
              </li>
              <li className="list-group-item">
                <b>phone</b>
                {user.phone}
              </li>
            </ul>
          </div>
        </div>
        <Link className="btn btn-primary my-2" to={"/Home"}>
          Back to Home
        </Link>
      </div>
    </div>
  </div>
  );
}
