import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { StoreService } from 'src/app/store/store.service';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {}

  get todos() {
    return this.storeService.todos;
  }
}
