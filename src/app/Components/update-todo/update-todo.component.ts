import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent {
  token: string = localStorage.getItem('token');
  id: string;

  constructor(
    private http: HttpService,
    public modalRef: MdbModalRef<UpdateTodoComponent>
  ) { }

  update(title: string, status: string) {
    this.http.updateTodoById(this.id, { title, status }, this.token).subscribe({
      next: (res) => {
        console.log('updated todo', res);
        this.modalRef.close(res);
      },
      error: (err) => {
        console.log(err);
        this.modalRef.close();
      },
    });
  }
}
