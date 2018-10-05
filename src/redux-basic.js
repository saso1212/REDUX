const redux=require('redux');
const createStore=redux.createStore;
const initialState={
    counter:0
}
//Reducer
const rootReducer=(state=initialState,action)=>{
    if(action.type==="INC_COUNT"){
       return{
           ...state,
           counter:state.counter+1
       }
    };
    if(action.type==='ADD_COUNT'){
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
    //if ther is no if true return state
    return state;
}

//Store
const store=createStore(rootReducer);
console.log(store.getState());
//Subsriction
store.subscribe(()=>{
    console.log('[Subscription]',store.getState());
})

//Action
store.dispatch({type:"INC_COUNT"});
store.dispatch({type:"ADD_COUNT",value:10});
console.log(store.getState());



