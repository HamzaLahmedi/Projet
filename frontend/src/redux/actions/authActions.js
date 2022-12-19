import axios from "axios";
import { FAIL, REGISTER } from "../types/types";


export const userRegister=(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("/api/auth/signup", data);
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