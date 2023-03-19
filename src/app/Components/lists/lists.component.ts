import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';
import { NewListComponent } from '../new-list/new-list.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit{
  lists: any
  token: string = localStorage.getItem('token')
  modalRef: MdbModalRef<NewListComponent> | null = null;

  @Output() getTasksEvent = new EventEmitter()

  constructor(private http: HttpService, private modalService: MdbModalService) { }
  ngOnInit(): void {
    this.getLists()
  }

  openModal() {
    this.modalRef = this.modalService.open(NewListComponent);
    this.modalRef.onClose.subscribe((addedList: any) => {
      console.log(addedList);
      this.lists.push(addedList)
    });
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
