import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { ITodo } from 'src/models/ITodo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input() todo: ITodo;
  @Output() checkedNotify = new EventEmitter<ITodo>(null);
  @Output() deleteNotify = new EventEmitter<ITodo>(null);

  getStyle() {
    if (this.todo && this.todo.completed) {
      return {
        color: 'var(--text-muted)',
      };
    }
  }

  checkedAction() {
    this.checkedNotify.emit(this.todo);
  }

  deleteAction() {
    this.deleteNotify.emit(this.todo);
  }
}
