import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() addNotify = new EventEmitter<string>(null);
  @Output() finishedNotify = new EventEmitter<boolean>(false);

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.addNotify.emit(this.form.value.title);
      this.onFinished();
    }
  }

  onFinished() {
    this.finishedNotify.emit(true);
  }
}
