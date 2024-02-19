import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: Todo[] = [
    {
      id: 'test',
      name: 'Test',
      description: `Laboris reprehenderit quis eiusmod pariatur commodo. Exercitation aliqua consequat adipisicing exercitation amet mollit proident nisi in mollit. Cupidatat do ullamco consectetur veniam ea elit voluptate aliqua sit elit. In laborum eiusmod esse cillum dolor anim enim nostrud laborum cupidatat minim.

Consectetur anim consequat ut amet anim ad do nostrud ut amet ea consequat officia exercitation. Tempor quis deserunt velit enim qui aliqua culpa est enim. Amet veniam occaecat do dolore commodo laborum dolor aliquip irure fugiat sunt. Qui duis sunt minim deserunt.

Sunt cillum commodo velit proident ullamco est enim. Lorem irure nostrud tempor voluptate anim ipsum ullamco irure exercitation. Officia aliquip ipsum commodo nostrud ad Lorem id. Nostrud enim officia fugiat non fugiat labore proident sunt consectetur sit. Culpa proident esse culpa ad. Lorem ipsum mollit voluptate ullamco ut elit reprehenderit cupidatat consequat ullamco laboris aliqua consectetur. Deserunt proident incididunt id nostrud exercitation Lorem.`,
    },
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}
