import * as acttionTypes from './actionTypes';

const SaveResult=(result)=>{
    const updatedResult=result*2;
    return{
        type:acttionTypes.STORE,
        res:updatedResult
    }
}

export const store=(result)=>{
    return (dispatch,getState)=>{
        setTimeout(()=>{
            const oldCounter=getState().ctrReducer.counter;
            console.log(oldCounter);
            dispatch(SaveResult(result))
        },2000);
    }
};

const DeleteResult=(id)=>{
    return{
        type:acttionTypes.DELETE_RESULT,
        resultId:id
    }
}
export const delete_result=(id)=>{
   return dispatch=>{
       setTimeout(()=>{
           dispatch(DeleteResult(id))
       },500)
   }
}