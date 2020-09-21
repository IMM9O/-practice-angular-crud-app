import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBtnComponent {
  @Output() btnClicked = new EventEmitter<boolean>(false);

  onClick() {
    this.btnClicked.emit(true);
  }
}
