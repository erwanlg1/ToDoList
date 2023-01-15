import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from 'src/app/model/model';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss'],
})
export class AddtodoComponent {
  todos!: Todo[];
  todoTitle!: String;
  idForTodo!: number;

  private TODO_URL = 'http://localhost:3000/todo/';

  constructor(private http: HttpClient) {}

  addTodo(): void {
    console.log('click');
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.http
      .post(this.TODO_URL, {
        title: this.todoTitle,
        completed: false,
      })
      .subscribe((response: any) => {
        this.todos.push({
          id: response.id,
          title: this.todoTitle,
          completed: false,
        });
      });
    this.todoTitle = '';
  }
}
