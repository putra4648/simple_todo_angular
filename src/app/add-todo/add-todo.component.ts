import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.todoService = inject(TodosService);
  }
  todoService: TodosService;
  todoForm = this.formBuilder.group({
    name: '',
    description: '',
  });

  onSubmit(): void {
    this.todoService.addTodo({
      id: this.todoForm.value.name || '',
      name: this.todoForm.value.name || '',
      description: this.todoForm.value.description || '',
    });

    this.todoForm.reset();
    this.router.navigateByUrl('/');
  }
}
