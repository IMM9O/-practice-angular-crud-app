import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodosModule } from './todos/todos.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
