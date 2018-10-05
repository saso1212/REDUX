import * as actionType from './actions/actions';
const initialState={
    result:[]
}

const reducer=(state=initialState,action)=>{
    if(action.type===actionType.INCREMENT){
        return{
            ...state,
            counter:state.counter +1
        }
    }
    if(action.type===actionType.DECREMENT){
        return{
            ...state,
            counter:state.counter -1
        }
    }
    if(action.type===actionType.ADD_5){
        return{
            ...state,
            counter:state.counter + action.value
        }
    }
    if(action.type===actionType.SUBSTRAC_5){
        return{
            ...state,
            counter:state.counter -action.value
        }
    }
    if(action.type===actionType.STORE){
    return{
        ...state,
        result:state.result.concat({id:new Date(),value:state.counter})
           }
    }
    if(action.type===actionType.DELETE_RESULT){
        const resultArray=state.result.filter(result=>result.id !== action.resultId)
    return{
        ...state,
        result:resultArray
          }
    }
       
    return state;
}

export default reducer;