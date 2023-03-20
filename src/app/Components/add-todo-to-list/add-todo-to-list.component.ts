import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-add-todo-to-list',
  templateUrl: './add-todo-to-list.component.html',
  styleUrls: ['./add-todo-to-list.component.css'],
})
export class AddTodoToListComponent {
  token: string = localStorage.getItem('token');
  listId: string;

  constructor(
    private http: HttpService,
    public modalRef: MdbModalRef<AddTodoToListComponent>
  ) {}

  ngOnInit(): void {}

  add(title: string, status: string) {
    this.http
      .addTodoToList(this.listId, { title, status }, this.token)
      .subscribe({
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
