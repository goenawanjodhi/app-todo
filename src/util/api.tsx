import instance from "./axios";

export const apiGetAllTodos = () => {
    return instance.get('/api/todo/');
}

export const apiGetTodo = (id: string) => {
    return instance.get(`/api/todo/${id}`);
}

export const apiPostAddTodo = (data: any) => {
    return instance.post('/api/todo/', data);
}

export const apiDeleteTodo = (id: string) => {
    return instance.delete(`/api/todo/${id}`);
}

export const apiUpdateTodo = (id: string, data: any) => {
    return instance.put(`/api/todo/${id}`, data)
}