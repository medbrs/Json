import axios from 'axios'
import { GET_USERS, GET_POSTS, GET_COMMENTS } from './actionstype'





export const getUsers = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        dispatch({
            type : GET_USERS,
            payload: res.data
        })
    })
}


export const getPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => {
        dispatch({
            type: GET_POSTS,
            payload: posts.data
        })
    })
}


export const getComments = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(comments => {
        dispatch({
            type : GET_COMMENTS,
            payload : comments.data
        })
    })
}