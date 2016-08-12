import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../component/Counter'
import * as ConterAction from '../actions/counter'

function mapStateToProps(state){
    return{
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ConterAction,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)