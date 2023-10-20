import { ADD_TODO, DELETE_TODO, UPDATE_TODO, STORE_TODO } from "../actions/todoActions";

const initialState = {
    todos: []
};

const todoReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case STORE_TODO:
            return {
                ...state,
                todos: action.payload
            }
            break;

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
            break;

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo: any) => todo.id !== action.payload)
            };
            break;

        case UPDATE_TODO:
            const index = state.todos.findIndex((todo: any) => todo._id === action.payload.id);

            if (index !== -1) {
                const updatedTodos: any[] = [...state.todos];
                updatedTodos[index] = { ...updatedTodos[index], ...action.payload.data };

                return {
                    ...state,
                    todos: updatedTodos,
                };
            } else {
                return state;
            }

        default:
            return state;
    }
}

export default todoReducers;
