import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  usersUrl:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  // Get Users
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}`);
  }

  // Get Todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}`);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  editTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.patch<Todo>(url, todo, httpOptions);
  }

}
