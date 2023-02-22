import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TODOS } from './mock-todos';
import { ITodo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }

  getTodos():Observable<ITodo[]>{
    return of(TODOS)

  }
}
