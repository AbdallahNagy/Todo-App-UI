import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';
declare let alertify: any;

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

  add(title: string, status: string, due: string) {
    console.log(due);

    // get due hour
    let hoursDue: number;
    if (due.slice(0, 2)[0] == '0') hoursDue = Number(due.slice(1, 2));
    else hoursDue = Number(due.slice(0, 2));

    // get due minute
    let minutesDue: number;
    if (due.slice(3, 5)[0] == '0') minutesDue = Number(due.slice(4, 5));
    else minutesDue = Number(due.slice(3, 5));

    const dateNow = new Date();

    const dateDue = new Date();
    dateDue.setHours(hoursDue);
    dateDue.setMinutes(minutesDue);

    // get time due in milliseconds
    const dueInMilliseconds = dateDue.getTime() - dateNow.getTime();
    const reminderTime = dueInMilliseconds - 30 * 60 * 1000;

    // notify user before 30 minutes of due time of a todo
    setTimeout(() => {
      alertify.notify(
        `your todo: (${title}) has 30 minutes to be finished`,
        'warning',
        15
      );
    }, reminderTime);

    this.http
      .addTodoWithoutList({ title, status, dateDue }, this.token)
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
