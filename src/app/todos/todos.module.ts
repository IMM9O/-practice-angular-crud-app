import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDayComponent } from './todo-day/todo-day.component';

import { UIKitModule } from 'src/app/uikit/uikit.module';
import { StoreModule } from 'src/app/store/store.module';
import { TodoActionDirective } from './todo-action.directive';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDayComponent,
    TodoActionDirective,
  ],
  imports: [CommonModule, UIKitModule, StoreModule],
  exports: [TodoListComponent],
})
export class TodosModule {}
