import {
  Component,
  ChangeDetectionStrategy,
  DoCheck,
  Input,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements DoCheck {
  /**
   * 'fieldId' is a unique field identification
   * Example: 'email', 'password'
   *    ---REQUIRED PROPERTY---
   */
  @Input() showError = true;
  @Input() fieldId: string;
  @Input() filedType = 'text'; // default value is string
  @Input() filedLabel: string;

  /**
   * 'control' is a reactive form validator/value controller
   *    ---REQUIRED PROPERTY---
   */
  @Input() control: AbstractControl;

  private _validationErrors = new BehaviorSubject<object>(null);
  public validationErrors$ = this._validationErrors.asObservable();

  ngDoCheck() {
    console.log(this.control);
    if (this.control && this.control.touched && this.control.invalid) {
      this._validationErrors.next(this.control['errors']);
    } else {
      this._validationErrors.next(null);
    }
  }
}
