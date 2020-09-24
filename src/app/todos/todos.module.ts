import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDayComponent } from './todo-day/todo-day.component';

import { UIKitModule } from 'src/app/uikit/uikit.module';
import { StoreModule } from 'src/app/store/store.module';
import { TodoActionDirective } from './todo-action.directive';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDayComponent,
    TodoActionDirective,
    TodoFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, UIKitModule, StoreModule],
  exports: [TodoListComponent],
})
export class TodosModule {}
