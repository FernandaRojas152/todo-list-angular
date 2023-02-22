import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '../todo';
import { todoSelector } from '../state/reducers/todos.reducer';
import { Observable, Subject, map, of, takeUntil, tap } from 'rxjs';
import { loadTodos } from '../state/actions/todos.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  todos$: Observable<ITodo[]>= of();

  constructor(private store: Store<ITodo>){

  }

  ngOnInit(): void {
    this.loadTodos();
    
  }

  loadTodos(){
    this.todos$= this.store.select(todoSelector).pipe(
      map(state => Object.values(state))
    );

    this.store.dispatch(loadTodos())
  }

}
