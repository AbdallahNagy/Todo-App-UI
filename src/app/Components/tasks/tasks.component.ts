import { Component, Input } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';
import { UpdateTodoComponent } from '../update-todo/update-todo.component';
import { NewTodoComponent } from '../new-todo/new-todo.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  token: string = localStorage.getItem('token');
  modalRefToUpdateTodo: MdbModalRef<UpdateTodoComponent> | null = null;
  modalRefToAddTodo: MdbModalRef<NewTodoComponent> | null = null;
  @Input() todos: any;

  constructor(
    private http: HttpService,
    private modalService: MdbModalService
  ) {}

  showAllTodos(): void {
    this.http.getAllTodos(this.token).subscribe({
      next: (res) => {
        console.log(res);
        this.todos = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteTodo(id: string): void {
    this.http.deleteTodo(id, this.token).subscribe({
      next: (res: any) => {
        console.log(res);
        this.todos = this.todos.filter((task: any) => task._id !== res._id);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // for updating a todo
  openModalToUpdateTodo(id: string) {
    this.modalRefToUpdateTodo = this.modalService.open(UpdateTodoComponent, {
      data: { id },
    });
    this.modalRefToUpdateTodo.onClose.subscribe((updatedTodo: any) => {
      if (!updatedTodo) return;
      this.todos = this.todos.map((todo: any) =>
        todo._id == updatedTodo._id ? { ...updatedTodo } : { ...todo }
      );
    });
  }

  openModalToAddTodo() {
    this.modalRefToUpdateTodo = this.modalService.open(NewTodoComponent);
  }

}
