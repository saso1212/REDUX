import * as actionType from '../actions/actionTypes';
const initialState={
    result:[]
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionType.STORE:
        return{
            ...state,
            result:state.result.concat({id:new Date(),value:action.res})
        }
        case actionType.DELETE_RESULT:
        const resultArray=state.result.filter(result=>result.id !== action.resultId)
        return{
            ...state,
            result:resultArray
              }
        default:
        return state;
    }
}


export default reducer;