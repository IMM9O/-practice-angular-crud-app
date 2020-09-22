import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ITodo } from 'src/models/ITodo';
import { StoreService } from 'src/app/store/store.service';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  constructor(public storeService: StoreService) {}

  addTodoEvent() {
    // this.storeService.addTodo('Hello rxjs!');
    // TODO: show add todo form
    // TODO: submit the form to call addTodo
  }

  TrackByFunction(index, todo: ITodo) {
    return todo.id;
  }
}
