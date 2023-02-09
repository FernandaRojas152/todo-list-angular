import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../todo';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: ITodo;

  todos= ["Estudiar", "Jugar"];

  constructor(private store: Store){

  }

  ngOnInit() {
    console.log(this.todo);
  }
}
