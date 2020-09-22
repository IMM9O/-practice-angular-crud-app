import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreService } from './store.service';
import { TodoStoreService } from './todos/todo-store.service';
import { TodoClientService } from './todos/todo-client.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [TodoClientService, TodoStoreService, StoreService],
})
export class StoreModule {}
