import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddBtnComponent } from './add-btn/add-btn.component';
import { ButtonComponent } from './button/button.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AddBtnComponent, ButtonComponent, TextInputComponent],
  exports: [AddBtnComponent, ButtonComponent, TextInputComponent],
})
export class UIKitModule {}
