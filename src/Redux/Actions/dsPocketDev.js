import axios from 'axios'
import constants from '../constants'

export const setPocket = () => { 
    dispatchEvent({type: constants.GET_POCKET_DEVELOPER})
}