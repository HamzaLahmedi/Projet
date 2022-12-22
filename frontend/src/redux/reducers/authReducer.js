import { CURRENT,FAIL, LOGOUT, REGISTER ,LOGIN} from "../types/types";


const initState = {
    auth:false,
    user:null,
    loading:true
};

const authReducer = (state = initState ,{type,payload})=>{
    switch(type){
        case REGISTER:
            case LOGIN:
            sessionStorage.setItem('token',payload.token)
            return {...state,user:payload.user,auth:true,loading:false}
            case CURRENT:
                return { ...state, user: payload, auth: true, loading: false };
          
            case FAIL:
                case LOGOUT:
                sessionStorage.removeItem('token');
                return {...state,user:null,auth:false,loading:false}
            default:
                return state
    }
}
export default authReducer;