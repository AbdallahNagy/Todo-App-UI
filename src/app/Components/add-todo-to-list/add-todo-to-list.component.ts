import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';
import { NotificationService } from 'src/app/Services/notification.service';

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
    public modalRef: MdbModalRef<AddTodoToListComponent>,
    private notify: NotificationService
  ) {}

  add(title: string, status: string, due: string) {
    const dateDue = this.notify.prepareDueDate(due);
    this.notify.sendNotification(title, dateDue);

    this.http
      .addTodoToList(this.listId, { title, status , dateDue}, this.token)
      .subscribe({
        next: (res) => {
          this.modalRef.close(res);
        },
        error: (err) => {
          console.log(err);
          this.modalRef.close();
        },
      });
  }
}
