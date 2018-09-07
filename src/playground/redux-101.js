import {createStore} from 'redux';

//Action generators

const add = ({a,b},c) => {
    return a+b+c;
};

const incrementCount = ({incrementBy = 1}={}) =>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1}={}) =>({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () =>({
    type: 'RESET'    
});

const setCount = ({count})=>({
    type: 'SET',
    count
});

//reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state={count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':            
            return{
                count: state.count+action.incrementBy
            };
        case 'DECREMENT':        
            return{
                count: state.count-action.decrementBy
            };
        case 'RESET':
            return{
                count: 0
            };
        case 'SET':
            return{
                count: action.count
            };
        default:
            return state;
    }    
};

const store = createStore();

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: -101}));