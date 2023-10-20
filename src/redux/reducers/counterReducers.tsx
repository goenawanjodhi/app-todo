import { INCREMENT, DECREMENT, CLEAR } from "../actions/counterActions";

const initialState = {
    count: 0,
    testCount: 0
}

const counterReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case CLEAR:
            return { ...state, count: 0 };
        default:
            return state;
    }
}

export default counterReducers