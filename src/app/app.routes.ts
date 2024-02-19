import { Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: AddTodoComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
