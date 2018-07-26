import { INCREMENT, DECREMENT } from "../constants"//index.js可省略
import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_ERROR } from "../constants"//index.js可省略
import axios from 'axios';
export const increment = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: INCREMENT
            })
        }, 2000)

    }

}
export const decrement = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: DECREMENT
            })
        }, 2000)

    }

}

export const fetch_user_request = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetch_user = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }

}
export const fetch_user_error = (error) => {
    return {
        type: FETCH_USER_ERROR,
        error
    }
}
export const add_random_user = () => {
    return dispatch => {
        dispatch(fetch_user_request())
        axios.get("https://randomuser.me/api/")
            .then(res => {
                dispatch(fetch_user(res.data.results[0]))//results是Array
            })
            .catch(error => {
                //console.dir(error)
                dispatch(fetch_user_error(error.response.data))
            })
    }

}

// export const decrement = () => {
//     return {
//         type: DECREMENT
//     }
// };