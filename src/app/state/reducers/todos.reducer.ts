import { createReducer, on } from "@ngrx/store";
import { ITodo } from "src/app/todo";
import { addTodo, loadTodos } from "../actions/todos.actions";
import { Todo } from "src/app/todo.model";

/* export const initialState:{
    loading: boolean,
    todos: ReadonlyArray<ITodo>
}= {loading: false, todos:[]} */

export const initialState: Todo[]= [];

export const todosReducer= createReducer(initialState,
    on(loadTodos, (state)=> {
        return {...state, loading: true};
    }),
    on(addTodo, (state, {task})=> [...state, new Todo(task)]),
);