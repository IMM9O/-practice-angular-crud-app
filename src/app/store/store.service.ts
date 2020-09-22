import { Injectable } from '@angular/core';

import { TodoStoreService } from './todos/todo-store.service';
import { TodoClientService } from './todos/todo-client.service';

@Injectable()
export class StoreService {
  constructor(private _todoStore: TodoStoreService) {
    this._todoStore.addTodos();
  }

  get todos$() {
    return this._todoStore.todos$;
  }

  addTodo(title: string) {
    this._todoStore.addTodo(title);
  }
  editTodo(id: number, title: string) {
    this._todoStore.editTodo(id, title);
  }
  removeTodo(id: number) {
    this._todoStore.removeTodo(id);
  }
  setCompleted(id: number, isDone: boolean) {
    this._todoStore.setCompleted(id, isDone);
  }
}
