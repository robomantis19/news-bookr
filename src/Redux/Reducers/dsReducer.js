import {constants} from '../constants'

const initialState = {
    isFetchingPocketDeveloper: false, 
    isFetchingPocketDeveloperError: null,
    pocket_token: null
}

export const dsReducer = (state=initialState, {type, payload}) => { 
    switch(type){
        case constants.GET_POCKET_DEVELOPER: 
            return { 
                ...state, 
                isFetchingPocketDeveloper: true
            }
        case constants.GOT_POCKET_DATA:
            return {
                ...state, 
                pocket_token: payload, 
                isFetchingPocketDeveloper: false
            }
        default: 
            return state
    }
}
export default constants;
