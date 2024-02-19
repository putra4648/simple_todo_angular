import { Injectable, computed, signal } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos = signal<Todo[]>([]);

  constructor() {}

  getTodos() {
    return computed(() => this.todos());
  }

  addTodo(todo: Todo): void {
    this.todos.update((data) => {
      data.push(todo);
      return data;
    });
  }

  updateTodo(id: string) {
    const newArr = this.todos().map((d) => {
      if (d.id === id) {
        return { ...d, isSelected: !d.isSelected };
      } else {
        return d;
      }
    });
    this.todos.set(newArr);
  }

  deleteTodo() {
    const newArr = this.todos().filter((d) => !d.isSelected);
    this.todos.set(newArr);
  }
}
