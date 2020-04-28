import React from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../Store';
import { Link } from 'react-router-dom';

function ToDo({text, onBtnClick, id})
{
    return <li>
                <Link to={`/${id}`}>
                    {text} <button onClick={onBtnClick}>DEL</button>
                </Link>
            </li>
}

function mapDispatchProps(dispatch, ownProps)
{
    // 여기서 text와 id는 ownProps에 있음
    console.log(ownProps)
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchProps)(ToDo);