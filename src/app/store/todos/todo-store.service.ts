import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ITodo } from './../../../models/ITodo';
import { TodoClientService } from './todo-client.service';

@Injectable()
export class TodoStoreService {
  private readonly _todos = new BehaviorSubject<ITodo[]>([]);
  readonly todos$ = this._todos.asObservable();

  readonly completedTodos$ = this.todos$.pipe(
    map((todos) => todos.filter((todo) => todo.completed))
  );

  constructor(private _todoClient: TodoClientService) {}

  get todos(): ITodo[] {
    return this._todos.getValue();
  }
  set todos(val: ITodo[]) {
    this._todos.next(val);
  }

  addTodo(title: string) {
    const newTodo = { id: new Date().getTime(), title, completed: false };
    this._todoClient.addTodo(newTodo).subscribe((_) => {
      this.todos = [...this.todos, newTodo];
    });
  }
  addTodos() {
    this._todoClient.fetchTodos().subscribe((todos) => {
      this.todos = [...this.todos, ...todos];
    });
  }
  editTodo(id: number, title: string) {
    let todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      const index = this.todos.indexOf(todo);
      const updatedTodo = {
        ...todo,
        title,
      };
      this._todoClient.updateTodo(updatedTodo, id).subscribe(
        (_) => {
          this.todos[index] = updatedTodo;
          this.todos = [...this.todos];
        },
        (err) => {
          // do this because jsonplacholder doesn't acutely create resources
          this.todos[index] = updatedTodo;
          this.todos = [...this.todos];
        }
      );
    }
  }
  removeTodo(id: number) {
    this._todoClient.deleteTodo(id).subscribe((_) => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  setCompleted(id: number, isDone: boolean) {
    let todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      const index = this.todos.indexOf(todo);
      const updatedTodo = {
        ...todo,
        completed: isDone,
      };
      this._todoClient.updateTodo(updatedTodo, id).subscribe(
        (_) => {
          this.todos[index] = updatedTodo;
          this.todos = [...this.todos];
        },
        (err) => {
          // do this because jsonplacholder doesn't acutely create resources
          this.todos[index] = updatedTodo;
          this.todos = [...this.todos];
        }
      );
    }
  }
}
