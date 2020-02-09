import { combineReducers } from 'redux';
import { serverReducer } from './serverReducer'
import { dsReducer } from './dsReducer'

export const reducer = combineReducers({serverReducer: serverReducer, dsReducer: dsReducer})