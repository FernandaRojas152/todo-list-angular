import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '../todo';
import { loadTodos } from '../state/actions/todos.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  todos= ["Estudiar", "Jugar"];

  constructor(private store: Store<ITodo>){

  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
    
  }

}
