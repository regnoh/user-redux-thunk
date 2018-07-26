import { FETCH_USER_SUCCESS ,FETCH_USER_REQUEST,FETCH_USER_ERROR} from "../constants"//index.js可省略
const initialState = {
    user:{},
    error:null,
    isFetching:false
}
const user = (state=initialState,action={})=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
        return {
            user:{},
            error:null,
            isFetching:true
        }
        case FETCH_USER_SUCCESS:
            return {
                user:action.user,
                error:null,
                isFetching:false
            }
        case FETCH_USER_ERROR:
            return {
                user:{},
                error:action.error,
                isFetching:false
            }
    
        default:return state;
        }
}
export default user;