import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent {
  token: string = localStorage.getItem('token');

  constructor(
    private http: HttpService,
    public modalRef: MdbModalRef<NewTodoComponent>
  ) {}

  add(title: string, status: string) {
    this.http.addTodoWithoutList({ title, status }, this.token).subscribe({
      next: (res) => {
        console.log(res);
        this.modalRef.close(res);
      },
      error: (err) => {
        console.log(err);
        this.modalRef.close();
      },
    });
  }
}
