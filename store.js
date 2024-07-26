class Store {
    constructor(reducer) {
        this.state = { count: 0 };
        this.reducer = reducer;
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener());
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return { count: state.count + 1 };
        case 'SUBTRACT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

// Create a store with the reducer
const store = new Store(reducer);

// Subscribe to state changes
store.subscribe(() => console.log('New State:', store.getState()));

// Initial state verification
console.log('Initial State:', store.getState());

// Scenario 2: Incrementing the Counter
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });

// Scenario 3: Decrementing the Counter
store.dispatch({ type: 'SUBTRACT' });

// Scenario 4: Resetting the Counter
store.dispatch({ type: 'RESET' });
