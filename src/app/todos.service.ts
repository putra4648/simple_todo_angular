import { Injectable, computed, signal } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos = signal<Todo[]>([]);

  constructor(private client: HttpClient) { }

  getTodos() {
    this.client.get("https://jsonplaceholder.typicode.com/todos").subscribe((data) => {
      this.todos.set(data as Todo[])
    })
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
        return { ...d, completed: !d.completed };
      } else {
        return d;
      }
    });
    this.todos.set(newArr);
  }

  deleteTodo() {
    const newArr = this.todos().filter((d) => !d.completed);
    this.todos.set(newArr);
  }
}
