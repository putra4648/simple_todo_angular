import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private todosService: TodosService, private router: Router) { }

  deleteTodo() {
    const url = this.router.url;
    if (url != '/') {
      alert(
        `Delete not working in this '${url}' URL \nOnly working in Home page`
      );
    } else {
      this.todosService.deleteTodo();
    }
  }
}
