import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDayComponent } from './todo-day/todo-day.component';

@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoDayComponent],
  imports: [CommonModule],
  exports: [TodoListComponent],
})
export class TodosModule {}
