import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from "react-router-dom";
export default function Home() {
    const [users,setUsers]=useState([])

    const{ id }= useParams();
    useEffect(()=>{
   loadDetails();
    },[]);
const loadDetails=async()=>{
  
  const result=await axios.get('http://localhost:8089/admins');
  
  setUsers(result.data)
  };
 const deleteDetails =async (id)=>{
  await axios.delete(`http://localhost:8089/admins/${id}`);
  loadDetails();
 };

  return (
    <div className="container">
<div className='py-4'>
<table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">mallname</th>
      <th scope="col">admin name</th>
      <th scope="col">password</th>
      <th scope="col">phone</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
{
  users.map((user,index)=>(
    <tr>
      <th scope="row" key={index}>{index+1}</th>
    
      <td>{user.mall}</td>
      <td>{user.name}</td>
      <td>{user.password}</td>
      <td>{user.phone}</td>
<td>
  <button className="btn btn-primary mx-3">view</button>
  <Link className="btn btn-outline-primary mx-3" to={`/Edit/${user.id}`}>Edit</Link>
  <button className="btn btn-primary mx-3" onClick={()=>deleteDetails(user.id)}>delete</button>
</td>

    </tr>
  ))
}
  </tbody>
</table>
</div>
    </div>
  )
}
