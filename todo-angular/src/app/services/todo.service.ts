import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos!: Todo[];

  private API_URL = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }
}
