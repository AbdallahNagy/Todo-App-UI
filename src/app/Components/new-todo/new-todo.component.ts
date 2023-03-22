import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent {
  token: string = localStorage.getItem('token');

  constructor(
    private http: HttpService,
    public modalRef: MdbModalRef<NewTodoComponent>,
    private notify: NotificationService
  ) {}

  add(title: string, status: string, due: string) {
    const dateDue = this.notify.prepareDueDate(due);
    this.notify.sendNotification(title, dateDue);

    this.http
      .addTodoWithoutList({ title, status, dateDue }, this.token)
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
