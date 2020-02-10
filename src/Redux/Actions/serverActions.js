import { axiosWithAuth } from '../../helpers/axiosWithAuth';
import {constants} from '../constants'

export const Login = (userId) => { 
    return {type: constants.USER_LOGIN, payload: userId}
}

export const storeHits = (hits) => { 
    return {type: constants.PAGE_HITS, payload: hits}
}