import React, { useEffect }from 'react'
import { useNavigate } from 'react-router-dom';

function UserProtectedWraper({children}) {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if(!token){
            alert('Please login to access this page')
            navigate('/userLogin')
        }
    }, [token, navigate])
  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWraper