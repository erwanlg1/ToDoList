import { Component } from '@angular/core';
import { Todo } from 'src/app/model/model';
import { TodoService } from 'src/app/services/todo.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  todos!: Todo[];
  todoTitle!: String;

  private TODO_URL = 'http://localhost:3000/todo/';
  constructor(private todoService: TodoService, private http: HttpClient) {
    this.todoService.getTodo().subscribe((todos) => (this.todos = todos));
  }

  ngOnInit() {}


///////////////////TEST//////////////////////////
  checkTodo(id: number): void {
    console.log('check');
    const checkedTodo = (<HTMLInputElement>event?.target).checked;

    this.http
      .patch(this.TODO_URL + id, {
        completed: checkedTodo,
      })
      .subscribe(() => {
        this.todos.forEach((todo) => (todo.completed = checkedTodo));
      });
  }
 ///////////////////TEST////////////////////////// 


 
  deleteTodo(id: number): void {
    this.http.delete(this.TODO_URL + id).subscribe((response: any) => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });

    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
