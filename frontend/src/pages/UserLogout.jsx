import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UserLogout() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    useEffect (() => {
        axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/users/logout`,
          {
            withCredentials: true,
            headers: {
              Authorization: token ? `Bearer ${token}` : ''
            }
          }
        )
        .then((res) => {
            localStorage.removeItem('token');
            navigate('/userLogin')
        })
        .catch((err) => {
            console.log(err);
        })
    },[navigate]);
    
  return (
    <div>UserLogout</div>
  )
}

export default UserLogout