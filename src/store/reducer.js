const initialState = {
    counter: '',
    total: '',
};

const reducer = (state = initialState, action) => {
    if (action.type === 'CONCAT_CHAR') {
        return {...state, counter: state.counter + action.payload};
    }

    if (action.type === 'CLEAR') {
        return {...state, counter: '', total: ''};
    }

    if (action.type === 'COUNT') {
        const total = eval(state.counter);
        return {...state, total};
    }

    if (action.type === 'REMOVE_CHAR') {
        const newCounter = state.counter.slice(0, state.counter.length - 1);
        return {...state, counter: newCounter};
    }

    return state;
};

export default reducer;