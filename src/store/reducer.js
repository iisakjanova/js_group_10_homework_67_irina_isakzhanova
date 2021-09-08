const initialState = {
    counter: '',
    total: '',
};

const reducer = (state = initialState, action) => {
    const counter = state.counter;

    const concatChar = (payload) => {
        let newCounter = counter;
        let newPayload = payload;
        const octalParams = new RegExp(/^0\d/) ;

// Check for '0' in the start of string
        if (octalParams.test(counter + payload)) {
            newCounter = counter.replace(/0/g, '');
        }

// Check for '0' after '+', '-', '/', '*', considering fraction numbers and actions with '0' as an argument
        if (
            payload !== '.' &&
            !isNaN(payload) &&
            isNaN(counter[counter.length - 2]) &&
            counter[counter.length - 1] === '0'
        ) {
            newCounter = counter.slice(0, counter.length - 1);
        }

// Check for '+', '-', '/', '*' in the start of the string
        if (counter.length === 0 && isNaN(payload)) {
            newPayload = '';
        }

// Check for dubble of '+', '-', '/', '*'
        if (isNaN(payload) && isNaN(counter[counter.length - 1])) {
            newCounter = counter.slice(0, counter.length - 1);
        }

        return {...state, counter: newCounter + newPayload};
    };

    const clearState = () => {
        return {...state, counter: '', total: ''};
    };

    const getTotal = () => {
        let newCounter = counter;

// Check for '+', '-', '/', '*' in the end of the string
        if (isNaN(counter[counter.length - 1])) {
            newCounter = counter.slice(0, counter.length - 1);
        }

        const total = eval(newCounter);
        return {...state, counter: newCounter, total};
    };

    const removeChar = () => {
        const newCounter = counter.slice(0, counter.length - 1);
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