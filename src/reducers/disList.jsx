import {REQUEST_POST,SELECT_LIST,REQUEST_GET,RECEIVE_GET} from '../actions/disAction'

const start={
    baseUrl:'/api/',
    data:null
}

const listReduce=(state={def:start},action)=>{
    switch(action.type){
        case REQUEST_GET:
            return Object.assign({},state,action);
        case RECEIVE_GET:
            return Object.assign({},state,action);
        default:
            return state;
    }
}

export {listReduce}