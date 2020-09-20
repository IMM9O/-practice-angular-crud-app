import { Injectable } from '@angular/core';

import { ITodo } from 'src/models/ITodo';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  todos: ITodo[] = [
    {
      id: 5,
      task: 'watch movie',
      isDone: false,
    },
    {
      id: 6,
      task: 'Lorem, ipsum dolor.',
      isDone: false,
    },
    {
      id: 7,
      task: 'Lorem, ipsum dolor. Lorem, dolor.',
      isDone: false,
    },
    {
      id: 8,
      task: 'Lorem, dolor.',
      isDone: false,
    },
    {
      id: 9,
      task: 'Lorem, ipsum Lorem',
      isDone: false,
    },
    {
      id: 10,
      task: 'Lorem, ipsum Lorem, ipsum dolor.',
      isDone: false,
    },
    {
      id: 11,
      task: 'Lorem, ipsum dolor.Lorem, ipsum dolor.',
      isDone: false,
    },
    {
      id: 12,
      task: 'Drink coffey',
      isDone: false,
    },
  ];
  constructor() {}
}
