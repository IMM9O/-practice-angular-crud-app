import { Directive, HostListener } from '@angular/core';

import { StoreService } from 'src/app/store/store.service';
import { ITodo } from 'src/models/ITodo';

@Directive({
  selector: '[appTodoAction]',
})
export class TodoActionDirective {
  constructor(private _storeService: StoreService) {}

  @HostListener('editNotify', ['$event'])
  onEditNotify($event: ITodo) {
    this._storeService.editTodo($event?.id, $event?.title);
  }
  @HostListener('checkedNotify', ['$event'])
  onCheckedNotify($event: ITodo) {
    console.log($event);
    this._storeService.setCompleted($event?.id, !$event?.completed);
  }

  @HostListener('deleteNotify', ['$event'])
  onDeleteNotify($event: ITodo) {
    this._storeService.removeTodo($event?.id);
  }
}
