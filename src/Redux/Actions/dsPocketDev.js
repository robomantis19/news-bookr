
import { axiosWithAuth } from '../../helpers/axiosWithAuth'
import axios from 'axios'; 
// import { GET_POCKET_DEVELOPER } from '../constants'
import { constants } from '../constants.js'
// import { constants from '../Reducers/dsReducer.js';
const { GET_POCKET_DEVELOPER } = constants;

export const setPocket = (input) => (dispatch) => { 
    console.log(constants.GET_POCKET_DEVELOPER)
    
    dispatch({ type: GET_POCKET_DEVELOPER })
    
    
    axios.post(`https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/oauth/request`, input)
    .then( res => { 
        console.log(res, 'get response')
        dispatch({ type: constants.GOT_POCKET_DATA, payload: res.data})
    })
    .catch(err => { 
        console.log('pocket post for token error:', err); 
    })
}
