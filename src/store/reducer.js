const initialState = {
    counter: '',
    total: '',
};

const reducer = (state = initialState, action) => {
    const concatChar = (payload) => {
        let newCounter = state.counter;
        let newPayload = payload;
        const octalParams = new RegExp(/^0\d/) ;

        if (octalParams.test(state.counter + payload)) {
            newCounter = state.counter.replace(/0/g, '');
        }

        if (payload !== '.' && isNaN(state.counter[state.counter.length - 2]) && state.counter[state.counter.length - 1] === '0') {
            newCounter = state.counter.slice(0, state.counter.length - 1);
        }

        if (state.counter.length === 0 && isNaN(payload)) {
            newPayload = '';
        }

        if (isNaN(payload) && isNaN(state.counter[state.counter.length - 1])) {
            newCounter = state.counter.slice(0, state.counter.length - 1);
        }

        return {...state, counter: newCounter + newPayload};
    };

    const clearState = () => {
        return {...state, counter: '', total: ''};
    };

    const getTotal = () => {
        let newCounter = state.counter;

        if (isNaN(state.counter[state.counter.length - 1])) {
            newCounter = state.counter.slice(0, state.counter.length - 1);
        }

        const total = eval(newCounter);
        return {...state, counter: newCounter, total};
    };

    const removeChar = () => {
        const newCounter = state.counter.slice(0, state.counter.length - 1);
        return {...state, counter: newCounter};
    }

    switch (action.type) {
        case 'CONCAT_CHAR':
            return concatChar(action.payload);
        case 'CLEAR':
            return clearState();
        case 'COUNT':
            return getTotal();
        case 'REMOVE_CHAR':
            return removeChar();
        default:
            return state;
    }
};

export default reducer;