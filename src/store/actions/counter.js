import * as actionTypes from './actionTypes';


export const increment=()=>{
    return{
        type:actionTypes.INCREMENT
    }
}
export const decrement=()=>{
    return{
        type:actionTypes.DECREMENT
    }
}
export const add_5=(value)=>{
    return{
        type:actionTypes.ADD_5,
        value:value
    }
}
export const substrac_5=(value)=>{
    return{
        type:actionTypes.SUBSTRAC_5,
        value:value
    }
}