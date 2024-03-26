import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, Signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  titleInput = new FormControl();

  onUpdate(todo: Todo): void {
    this.todoService.updateTodo(todo);
  }

  onUpdateWithTitle(todo: Todo) {
    const updatedTodo: Todo = {
      ...todo,
      isUpdate: !todo.isUpdate,
    }
    this.todoService.updateTodo(updatedTodo);
  }

  onUpdateTitleChange(event: KeyboardEvent, todo: Todo) {
    if (event.key === 'Enter') {
      const value = this.titleInput.value;
      const updatedTodo: Todo = {
        ...todo,
        title: value ?? '',
        isUpdate: false,
      }
      this.todoService.updateTodo(updatedTodo);
      this.titleInput.reset()
    }
  }

  onDelete(id: string) {
    this.todoService.deleteTodo(id);
  }
}
