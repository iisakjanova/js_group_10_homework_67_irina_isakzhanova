const initialState = {
    counter: '',
    total: '',
};

const reducer = (state = initialState, action) => {
    if (action.type === 'CONCAT_CHAR') {
        let newCounter = state.counter;
        let newPayload = action.payload;

        if (state.counter.length === 0 && isNaN(action.payload)) {
            newPayload = '';
        }

        if (isNaN(action.payload) && isNaN(state.counter[state.counter.length - 1])) {
            newCounter = state.counter.slice(0, state.counter.length - 1);
        }

        return {...state, counter: newCounter + newPayload};
    }

    if (action.type === 'CLEAR') {
        return {...state, counter: '', total: ''};
    }

    if (action.type === 'COUNT') {
        let newCounter = state.counter;

        if (isNaN(state.counter[state.counter.length - 1])) {
            newCounter = state.counter.slice(0, state.counter.length - 1);
        }

        const total = eval(newCounter);
        return {...state, counter: newCounter, total};
    }

    if (action.type === 'REMOVE_CHAR') {
        const newCounter = state.counter.slice(0, state.counter.length - 1);
        return {...state, counter: newCounter};
    }

    return state;
};

export default reducer;