import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
//thunk is middleware
import thunk from 'redux-thunk';
import './index.css';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/results';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer=combineReducers({
    ctrReducer:counterReducer,
    resReducer:resultReducer
})
//midalwere we just put applyMidelware in redux component
const logger=store=>{
    return next=>{
        return action=>{
            console.log('[Middleware] Dispaching',action);
            const result=next(action);
            console.log('[Middelware] next state',store.getState());
            return result;

        }
    }
};


//we must put compose in the component from redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//we can past a lot of middleware in applyMiddleware(logger,soemthig,fdff)
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
