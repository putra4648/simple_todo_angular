import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  constructor(
    private todoService: TodosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  todoForm = this.formBuilder.group({
    name: '',
    description: '',
  });

  onSubmit(): void {
    let message = [];
    let hashError = false;

    if (!this.todoForm.get('name')?.valid) {
      message.push('Name is empty');
    }

    if (!this.todoForm.get('description')?.valid) {
      message.push('description is empty');
    }

    if (message.length > 0) {
      alert(message.join('\n'));
    } else {
      const id = this.todoForm.value.name! + Math.floor(Math.random() * 10);
      this.todoService.addTodo({
        id: id,
        title: this.todoForm.value.name || '',
        completed: false,
      });
      this.todoForm.reset();
      this.router.navigateByUrl('/');
    }
  }
}
