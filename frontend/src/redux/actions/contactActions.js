import axios from 'axios'
import {  GET_CONTACTS } from '../types/contactTypes'
import { UPDATEPROFILE } from '../types/types'
import { logout } from './authActions'


export const getContacts=()=>async(dispatch)=>{
    
try {
    
    const res=await axios.get('http://localhost:5000/allUsers')
    console.log(res.data)
    dispatch({type:GET_CONTACTS,payload:res.data})
} catch (error) {
    console.log(error)
}
}


// delete profile
export const deleteProfile=(id)=>async(dispatch)=>{
    try {
    await axios.delete(`http://localhost:5000/deleteUser/${id}`)
    dispatch(logout())
    } catch (error) {
        console.log(error)
    }


}
// update profile
export const updateProfile = (id, newData) => async (dispatch) => {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    try {
      const res = await axios.put(
        `http://localhost:5000/updateUser/${id}`,
        newData,
        config
      );
      window.location.reload()
      dispatch({ type: UPDATEPROFILE, payload: res.data.updateProfile });
    } catch (error) {
      console.log("Error");
    }
  };
