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
  addMode: boolean = false;
  constructor(public storeService: StoreService) {}

  addTodoEvent(title: string) {
    this.storeService.addTodo(title);
  }

  TrackByFunction(index, todo: ITodo) {
    return todo.id;
  }
}
