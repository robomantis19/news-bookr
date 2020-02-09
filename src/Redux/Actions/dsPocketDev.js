
import constants from '../constants'
import { axiosWithAuth } from '../../helpers/axiosWithAuth'

export const setPocket = (input) => dispatch => { 
    //dispatch({type: constants.GET_POCKET_DEVELOPER})
    axiosWithAuth().post(`https://getpocket.com/v3/oauth/request`, input)
    .then( res => { 
        console.log(res, 'get response')
        // dispatchEvent({ type: GOT_POCKET_DATA, payload: res})
    })
    .catch(err => { 
        console.log('pocket post for token error:', err); 
    })
}
