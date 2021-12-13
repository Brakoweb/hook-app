
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter(element => element.id !== action.payload);

        case 'done':
            return state.map(element => 
                (element.id === action.payload) 
                    ? {...element, done: !element.done }
                    : element);
    
        default:
            return state;
    }
}

export default todoReducer;