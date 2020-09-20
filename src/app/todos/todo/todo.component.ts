import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ITodo } from 'src/models/ITodo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input() todo: ITodo;
}
