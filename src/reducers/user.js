import { FETCH_USER_PENDING ,FETCH_USER_FULFILLED,FETCH_USER_REJECTED} from "../constants"//index.js可省略
// import { FETCH_USER_SUCCESS ,FETCH_USER_REQUEST,FETCH_USER_ERROR} from "../constants"//index.js可省略
const initialState = {
    user:{},
    error:null,
    isFetching:false
}
const user = (state=initialState,action={})=>{
    switch(action.type){
        case FETCH_USER_PENDING:
        return {
            user:{},
            error:null,
            isFetching:true
        }
        case FETCH_USER_FULFILLED:
            return {
                user:action.payload.data.results["0"],
                error:null,
                isFetching:false
            }
        case FETCH_USER_REJECTED:
            return {
                user:{},
                error:action.payload.response.data,
                isFetching:false
            }
    
        default:return state;
        }
}
export default user;