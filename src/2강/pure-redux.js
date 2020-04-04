import {createStore} from 'redux';
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementsByTagName("span")[0];

const ADD = "ADD";
const MINUS = "MINUS";

const handleAdd = () => {
    countStore.dispatch({type : ADD});
};

const handleMinus = () => {
    countStore.dispatch({type : MINUS});
};

const reducer = (state = 0, action)=>{
    // 스위치 케이스문으로 바뀜
    // if(action.type === "ADD"){
    //     return ++state;
    // }else if(action.type === "MINUS")
    // {
    //     return --state;
    // }
    // else{
    //     return state;
    // }
    switch(action.type)
    {
        case ADD: return ++state;
        case MINUS: return --state;
        default:
            return state;
    }

};
const countStore = createStore(reducer);

countStore.subscribe(() => {
    number.innerText = countStore.getState();
})


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

