import { combineReducers } from 'redux'
import fist from './main'
import {listReduce} from './disList';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    fist,listReduce
})
export default rootReducer