import { createAction, props } from "@ngrx/store";
import { ITodo } from "src/app/todo";

//loading
export const loadTodos= createAction('[Todo List] Load tasks');
export const loadedTodos= createAction('[Todo List Loaded Sucess', props<{todo: ITodo[]}>());

//todo actions
export const addTodo= createAction('[Todo List] Add Todo', props<{task: string}>());