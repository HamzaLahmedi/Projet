import axios from "axios";
import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../types/types";


export const userRegister=(data,navigate)=>async(dispatch)=>{
    console.log(data)
    try {
        const res = await axios.post("http://localhost:5000/signup", data);
                dispatch({
            type:REGISTER,payload:res.data
        });
        navigate("/profile")
    } catch (error) {
        dispatch({
            type:FAIL,
        })
    }
}

// login action
export const userLogin=(data,navigate)=>async(dispatch)=>{
    // console.log(data)
    try {
        const res = await axios.post("http://localhost:5000/signin", data).then((res)=>
        dispatch({
            type:LOGIN,payload:res.data
            
        })
        
        )
           
        
        navigate("/profile")
    } catch (error) {
        dispatch({
            type:FAIL,
        })
    }
}


// logout
export const logout=()=>{
    return {
        type:LOGOUT,
    };
}


//get auth user
export const userCurrent=()=>async(dispatch)=>{
    const config={
       headers: {authorization:sessionStorage.getItem('token')}
    }
try {
    const res=await axios.get("http://localhost:5000/current",config).then((res)=>
    dispatch({type:CURRENT,payload:res.data})
    )
    
} catch (error) {
    dispatch({
        type:FAIL,
    }) 
}
}