import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-todo-day',
  templateUrl: './todo-day.component.html',
  styleUrls: ['./todo-day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDayComponent {
  @Input() dayTimestamp: number = new Date().getTime();
}
