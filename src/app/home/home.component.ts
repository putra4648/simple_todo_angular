import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private todoService: TodosService) { }
  todos: Signal<Todo[]> = this.todoService.getTodos();


  onSelect(id: string): void {
    this.todoService.updateTodo(id);
  }
}
