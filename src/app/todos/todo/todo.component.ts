import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ITodo } from 'src/models/ITodo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  @Input() form: FormGroup;

  @Output() checkedNotify = new EventEmitter<ITodo>(null);
  @Output() deleteNotify = new EventEmitter<ITodo>(null);
  @Output() editNotify = new EventEmitter<ITodo>(null);

  showAction = false;
  editMode = false;
  todoTitle: FormControl;

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.todo?.title || null, [Validators.required]),
    });
  }

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

  editAction() {
    if (this.form.valid) {
      this.editMode = false;
      this.editNotify.emit({
        ...this.todo,
        title: this.form.value.title,
      });
    }
  }
}
