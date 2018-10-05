import React, { Component } from 'react';
import {connect} from 'react-redux';

import {increment,decrement,add_5,substrac_5,store,delete_result} from '../../store/actions/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//import * as actionType from '../../store/actions/actions';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
            return;
        }
    }

    render () {
            // let resultState=this.props.res;
            // let result=resultState.map(val,index=>{
            //     <ul>
            //         <li id="">val</li>
            //     </ul>
            // })
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncerementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstarcCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)} style={{padding:"5px 10px"}}>STORE RESULTS</button>
                <ul style={{margin:"auto"}}>
                {this.props.res.map(result=>(
                   <li key={result.id} style={{listStyleType:"none"}} onClick={()=>this.props.onDeleteResult(result.id)}>{result.value}</li>)
                  
                )}
                </ul>
            </div>
        );
    }
}
//we define witch slice of state is neede fror this Component and witch 
//functions from the store/reducer to despatch

const mapStoreToProp=state=>{
    return{
        ctr:state.ctrReducer.counter,
        res:state.resReducer.result
    }
}
const mapDispatchToProp=dispatch=>{
    return{
       
        onIncerementCounter: ()=>dispatch(increment()),
        onDecrementCounter: ()=>dispatch(decrement()),
        onAddCounter: ()=>dispatch(add_5(5)),
        onSubstarcCounter: ()=>dispatch(substrac_5(5)),
        onStoreResult:(result)=>dispatch(store(result)),
        onDeleteResult:(id)=>dispatch(delete_result(id))
    }
}
//this mena give me the counter state withh ctr propps
export default connect(mapStoreToProp,mapDispatchToProp)(Counter);