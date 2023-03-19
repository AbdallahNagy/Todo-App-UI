import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit{
  lists: any
  token: string = localStorage.getItem('token')

  @Output() getTasksEvent = new EventEmitter()

  constructor(private http: HttpService) { }
  ngOnInit(): void {
    this.getLists()
  }

  getLists() {
    this.http.getAllLists(this.token).subscribe({
      next: (res) => {
        console.log(res);
        this.lists = res
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  showTasks(id: any) {
    this.http.getTasksByListId(id, this.token).subscribe({
      next: (res) => {
        this.getTasksEvent.emit(res) // why when i try to put this line outside next and 
                                     // inside the same func doesn't work?
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
