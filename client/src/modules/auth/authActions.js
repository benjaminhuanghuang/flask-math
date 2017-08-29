import axios from "axios";
import { BrowserHistory } from 'react-history';

// Export Constants
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';


const ROOT_URL = 'http://localhost:5090';

export function siginUser_old_style({ email, password }) {
    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/api/login`, {email, password})
            .then(response => {
                // If request is good...
                // - Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});
                // - Save the JWT token
                localStorage.setItem('react-math-token', response.data.token);
                browserHistory.push('/');
            })
            .catch(err => {
                // If request is bad...
                // - Show an error to the user
                console.log(err);
                dispatch(authError('Bad Login Info'));
            });
    }
}

export const loginUser = ({ username, password , callback}) => async dispatch => {
    try {
        const res = await axios.post(`/api/login`, {username, password});
        // - Update state to indicate user is authenticated
        dispatch({type: AUTH_USER});
        // - Save the JWT token
        localStorage.setItem('react-math-token', res.data.token);
        callback();
    }
    catch (err) {
        console.log(err);
        dispatch(authError('Bad Login Info'));
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

