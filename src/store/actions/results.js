import * as acttionTypes from './actionTypes';

const SaveResult=(result)=>{
    return{
        type:acttionTypes.STORE,
        res:result
    }
}

export const store=(result)=>{
    return dispatch=>{
        setTimeout(()=>{
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