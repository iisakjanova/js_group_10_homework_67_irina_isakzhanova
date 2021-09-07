const initialState = {
    counter: '',
    total: '',
};

const reducer = (state = initialState, action) => {
    if (action.type === 'STRING_CONCAT') {
        return {...state, counter: state.counter + action.payload};
    }

    if (action.type === 'CLEAR') {
        return {...state, counter: '', total: ''};
    }

    if (action.type === 'COUNT') {
        const total = eval(state.counter);
        return {...state, total};
    }

    return state;
};

export default reducer;