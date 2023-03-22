import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  prepareDueDate(due: string):Date {
    // get due hour
    let hoursDue: number;
    if (due.slice(0, 2)[0] == '0') hoursDue = Number(due.slice(1, 2));
    else hoursDue = Number(due.slice(0, 2));

    // get due minute
    let minutesDue: number;
    if (due.slice(3, 5)[0] == '0') minutesDue = Number(due.slice(4, 5));
    else minutesDue = Number(due.slice(3, 5));

    const dateDue = new Date();
    dateDue.setHours(hoursDue);
    dateDue.setMinutes(minutesDue);

    return dateDue;
  }

  sendNotification(title: string, dueDate: Date) {
    const dateNow = new Date();
    
    // get time due in milliseconds
    const dueInMilliseconds = dueDate.getTime() - dateNow.getTime();
    const reminderTime = dueInMilliseconds - 30 * 60 * 1000;

    // notify user before 30 minutes of due time of a todo
    setTimeout(() => {
      alertify.notify(
        `your todo: (${title}) has 30 minutes to be finished`,
        'warning',
        15
      );
    }, reminderTime);
  }

}
