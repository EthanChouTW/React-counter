import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Show from '../components/Show';
import Btn from '../components/Btn';

import * as counterAction from '../action/counterAction';


class Panel extends React.Component {
    constructor() {
        super();
    }

    render() {

        //const actions = this.props.actions 以下為sugar
        const { number, actions } = this.props;

        return (
            <div >
                <Show num={number}></Show>
                <Btn increment={actions.incrementAction} decrement={actions.decrementAction}></Btn>
            </div>
        )
    }
}

// 去抓store裡的reducers
const mapStateToProps = (state) => {
    return {
        number: state.counterReducer
    }
}

//把我們做的action跟dispatch綁定，傳成Props
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(counterAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);