import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  todosService: TodosService = inject(TodosService);
  todos: Todo[] = [];

  constructor() {
    this.todos = this.todosService.getTodos();
  }
}
