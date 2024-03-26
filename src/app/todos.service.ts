import { Injectable, computed, signal } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos = signal<Todo[]>([]);

  constructor(private client: HttpClient) {
    this.client.get("https://jsonplaceholder.typicode.com/todos").subscribe((data) => {
      this.todos.set((data as Todo[]))
    })
  }

  getTodos() {
    return computed(() => this.todos());
  }

  addTodo(todo: Todo): void {
    this.todos.update((data) => {
      data.push(todo);
      return data;
    });
  }

  updateTodo(todo: Todo) {
    const newArr = this.todos().map((d) => {
      if (d.id === todo.id) {
        return { ...d, completed: !d.completed, isUpdate: todo.isUpdate, title: todo.title };
      } else {
        return d;
      }
    });
    console.log(`Update todo ${todo.id}`, newArr.filter(d => d.id === todo.id))
    this.todos.set(newArr);

  }


  deleteTodo(id: string) {
    const newArr = this.todos().filter((d) => d.id !== id);
    this.todos.set(newArr);
  }
}
