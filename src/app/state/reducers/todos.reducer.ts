import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { ITodo, todos } from "src/app/todo";
import { addTodo, loadTodos } from "../actions/todos.actions";
import { Todo } from "src/app/todo.model";

export interface TodoListState{
    todos: ITodo[];
}

export const initialState: TodoListState={
    todos: []
};


/* export const initialState:{
    loading: boolean,
    todos: ReadonlyArray<ITodo>
}= {loading: false, todos:[]} */

/* export const initialState: Todo[]= [
    new Todo('Go to the Groceries Store'),
]; */

export const todosReducer= createReducer(todos,
    on(loadTodos, (state)=> {
        return {...state, loading: true};
    }),
    on(addTodo, (state, task) => {
        return [...state, task];
    }),
);

export const todoSelector= createSelector(createFeatureSelector("todos"),(todos: ITodo[]) => todos);