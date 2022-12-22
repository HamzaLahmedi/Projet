import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Load from '../components/Load'

function PrivateRoute({children}) {
    const {auth,loading}=useSelector(state=>state.authReducer)
    const token=sessionStorage.getItem('token')
  return (
    <>
{
loading ? <Load  type="spokes" color="black"/> : token ? children : <Navigate to='/login' /> 



}



    </>
  )
}

export default PrivateRoute
