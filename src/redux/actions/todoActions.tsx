import { apiDeleteTodo, apiGetTodo, apiPostAddTodo, apiUpdateTodo } from "../../util/api";
import { Dispatch } from 'redux';

export const STORE_TODO = 'STORE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const GET_TODO = 'GET_TODO';

export const addTodo = (formData: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await apiPostAddTodo(formData);

            if (res.status === 201) {
                dispatch({
                    type: ADD_TODO,
                    payload: res.data,
                });
            } else {
                console.error('Failed to add todo');
            }
        } catch (error) {
            console.error(error);
        }
    };
};

export const deleteTodo = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await apiDeleteTodo(id);

            if (res.status === 200) {
                dispatch({
                    type: DELETE_TODO,
                    payload: id,
                });
            } else {
                console.error('Failed to delete todo');
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export const getTodo = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await apiGetTodo(id);

            if (res.status === 200) {
                dispatch({
                    type: GET_TODO,
                    payload: res.data
                });

                return res.data;
            } else {
                console.error('Failed to get todo');
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export const updateTodo = (id: string, formData: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await apiUpdateTodo(id, formData);

            if (res.status === 200) {
                dispatch({
                    type: UPDATE_TODO,
                    payload: {
                        id, data: res.data
                    },
                });
            } else {
                console.error('Failed to update todo');
            }
        } catch (error) {
            console.log(error);
        }
    }
}