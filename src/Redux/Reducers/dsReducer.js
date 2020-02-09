import constants from '../constants'

const initialState = {
    isFetchingPocketDeveloper: false, 
    isFetchingPocketDeveloperError: null, 
}

export const dsReducer = (state = initialState, {type, payload}) => { 
    switch(type){
        case constants.GET_POCKET_DEVELOPER: 
            return { 
                state, 
                isFetchingPocketDeveloper: true
            }
        default: 
            return state
    }
}

