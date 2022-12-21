import axios from 'axios'
import { GET_CONTACTS } from '../types/contactTypes'


export const getContacts=()=>async(dispatch)=>{
    
try {
    
    const res=await axios.get('http://localhost:5000/allUsers')
    console.log(res.data)
    dispatch({type:GET_CONTACTS,payload:res.data})
} catch (error) {
    console.log(error)
}
}