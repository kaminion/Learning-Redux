import React, { useState } from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../Store';
import ToDo from '../components/ToDo';

// dispath는 prop와 별개의 객체로 컴포넌트에 전달된다.
function Home({toDos, addToDo})
{
    const [text, setText] = useState("");
    
    function onChange(e)
    {
        setText(e.target.value);
    }

    function onSubmit(e)
    {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return <>
        <h1>To do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>Add</button>
        </form>
        <ul>{toDos.map( toDo => <ToDo {...toDo}> </ToDo>)}</ul>
    </>
}

// 이 컴포넌트의 프롭스와 스토어에서 가져온 스테이트를 가져올 수 있다.
// 컴포넌트의 props에 전달해준다
function mapStateToProps(state, props)
{
    return { toDos : state };
    
}
// 두번째 인자로 props가 옴
function mapDispatchToProps(dispatch)
{
    return {
        addToDo : (text) => dispatch(actionCreators.addToDo(text))
    };
}

// mapStateToProps라고 명명해주어야 오류가 안남, 두번째 인자로는 dispatch props를 가짐, 필요없으면 null 주고 디스패치만 줘도됨
export default connect(mapStateToProps, mapDispatchToProps)(Home);