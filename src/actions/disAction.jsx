import fetch from 'isomorphic-fetch'

export const REQUEST_POST='REQUEST_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_LIST = 'SELECT_LIST'
export const REQUEST_GET = 'REQUEST_GET'
export const RECEIVE_GET = 'RECEIVE_GET'

export function selectList(state){
    return {state,type:SELECT_LIST}
}

function requestPost(state) {
    return {state,type:REQUEST_POST}
}

function requestGet(state) {
    return {state,type:REQUEST_GET}
}

function receiveGet(state) {
    let list=state.list;
    delete state.list;
    let page=state
    return {
        type:RECEIVE_GET,
        list,
        page
    }
}

function fetchList(state){
    return dispatch =>{
        dispatch(requestGet(state));
        return fetch(state.url)
            .then(resp=>resp.json())
            .then(json=>dispatch(receiveGet(json)))
    }
}

export function fetchListIfNeed(state){
    return (dispatch)=>{
        return dispatch(fetchList(state))
    }
}