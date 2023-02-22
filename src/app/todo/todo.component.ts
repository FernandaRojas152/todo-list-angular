import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '../todo';
import { loadTodos } from '../state/actions/todos.actions';
import { TodoService } from '../todo.service';
import { map,tap } from 'rxjs/operators';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  constructor(private store: Store<ITodo>, private todoService: TodoService){

  }

  ngOnInit(): void {
    
  }

}
