import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { IAppState } from '../state/reducers/app.reducer';
import  * as actions from '../state/actions/todos.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  txtInput: FormControl;

  constructor(private store: Store<IAppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  addTodo(){
    if(this.txtInput.invalid){return ;}
    
    /* this.store.dispatch(actions.addTodo({task: this.txtInput.value}) ); */
  }

}
