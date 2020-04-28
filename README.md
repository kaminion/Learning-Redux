# Vanila Redux

# redux 
createStore는 저장소를 만드는 함수임
매개변수로 reducer를 받음
reducer는 data를 수정하는 함수임

getState()하면 상태값을  받아올 수 있다

저장소에서 .dispatch ({type : }) reducer에 전달할 수 있다.


1. reducer에서는 데이터의 수정이 일어난다. (리턴하는것은 state)
2. dispatch로 reducer에 데이터를 전달할 수 있다. (action 객체타입으로 전달함)
3. subscribe()는 상태가 달라질 때 마다 등록된 함수를 콜백한다.


### Single source of truth & state read-only

store를 수정하는 법은 action을 보내는 것뿐
state를 절대 mutate를 하면 안됨, new state object를 리턴해야함
mutatet는 불변(immutable)객체가 아닌 가변객체를 의미함
같은 주소를 참조하는 객체가 아니여야함

*** 리액트에서 사용시에 React-redux를 인스톨 하여야함. ***
또한 메인에서
프로바이더로 감싸서 스토어연결해주어야함
```js
    ReactDom.render(<Provider store={store}><App/></Provider>)
```

React-Router-DOM에서 얻어가야할 훅들도 있다.
usePramas같은경우가 해당된다.

Optional 객체도 유용