import {  GET_CONTACTS } from "../types/contactTypes";
import { UPDATEPROFILE } from "../types/types";

const initState={
    contacts:[],
    contact:null,
    loading:true,
    
}

function contactReducer(state= initState,{type,payload}){
switch(type){
    case GET_CONTACTS:
        return {
            ...state,contacts:payload.users,loading:false
        }
        case UPDATEPROFILE:
        return {
            ...state,contact:payload.user,loading:false
        }
        default:
            return state;
}
}
export default contactReducer;
