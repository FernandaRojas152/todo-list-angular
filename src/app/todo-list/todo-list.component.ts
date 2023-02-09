import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '../todo';
import { todoSelector } from '../state/reducers/todos.reducer';
import { Observable, Subject, map, of, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy{
  todos$: Observable<ITodo[]>= of();
  destroy$: Subject<Boolean> = new Subject();

  constructor(private store: Store){

  }

  ngOnInit(): void {
    this.loadTodos();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  loadTodos(){
    this.todos$= this.store.select(todoSelector).pipe(
      takeUntil(this.destroy$),
      map(state => Object.values(state))
    );

  }

}
