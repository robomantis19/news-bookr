
import { axiosWithAuth } from '../../helpers/axiosWithAuth'
import axios from 'axios'; 

import constants from '../constants.js'


export const setPocket = (input) => (dispatch) => { 
    console.log(constants.GET_POCKET_DEVELOPER)
    
    dispatch({ type: constants.GET_POCKET_DEVELOPER })
    
    
    axios.post(`https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/oauth/request`, input)
    .then( res => { 
        console.log(res.data)
        console.log(dispatch({ type: constants.GOT_POCKET_DATA, payload: `${res.data.slice(5)}`}))
    })
    .catch(err => { 
        console.log('pocket post for token error:', err); 
    })
}
