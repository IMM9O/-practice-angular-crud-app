import { Injectable } from '@angular/core';

import { ITodo } from 'src/models/ITodo';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  todos: ITodo[] = [
    {
      id: 1,
      task: 'Buy new sweatshirt',
      isDone: true,
    },
    {
      id: 2,
      task: 'Begin promotional phase',
      isDone: true,
    },
    {
      id: 3,
      task: 'Read an article',
      isDone: false,
    },
    {
      id: 4,
      task: 'Try not to fall asleep',
      isDone: false,
    },
    {
      id: 5,
      task: 'Watch Sherlock',
      isDone: false,
    },
    {
      id: 6,
      task: 'Begin QA for the product',
      isDone: false,
    },
    {
      id: 7,
      task: 'Go for a walk',
      isDone: false,
    },
  ];
  constructor() {}
}
