import { GET_USERS, GET_POSTS, GET_COMMENTS } from "../actions/actionstype"





const rootReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload
        case GET_POSTS:
            return action.payload
            case GET_COMMENTS:
                return action.payload
        default:
            return state;
    }
}




export default rootReducer;