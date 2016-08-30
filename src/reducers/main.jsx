import Tool from '../lib/Tool/Tool';

const start = {
    loadMsg: '正在加载中...',
    name: 'AceApi',
    loadState: 0, //0 正在加载中, 1加载失败，2加载成功
    title: '正在加载中...',
    list: null,
    page:null,
    baseUrl:'/api/'
}

const mainList = (state = {def: start}, action) => {
    if (state._ID && state._ID !== action._ID) {
        return state;
    }
    switch (action.type) {
        case 'GET_DATA_START':
            return Tool.merged(state, action.state);
        case 'GET_DATA_SUCCESS':
            return Tool.merged(state, action.state);
        case 'GET_DATA_ERROR':
            return Tool.merged(state, action.state);
        default:
            return Tool.merged(state, {
                _ID: 'mainList',
                def: {
                    page: 1,
                    limit: 10
                }
            });
    }
}

export default mainList;