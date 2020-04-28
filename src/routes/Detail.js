import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function Details({toDo})
{
    // react-hook, props.match.params
    //const id = useParams();
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>created at : {toDo?.id}</h5>
        </>
    );
}

function mapStateToProps(state, ownProps)
{
    const {match: {params: {id} }} = ownProps;
    console.log(id);
    return {toDo : state.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Details);

