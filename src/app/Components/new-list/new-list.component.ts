import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit{
  token: string = localStorage.getItem('token');

  constructor(
    private http: HttpService, 
    public modalRef: MdbModalRef<NewListComponent>) {}
    
  ngOnInit(): void {
  }

  add(title: string) {
    this.http.createNewList({ title }, this.token).subscribe({
      next: (res) => {
        console.log(res);
        this.modalRef.close(res)
      },
      error: (err) => {
        console.log(err);
        this.modalRef.close()
      },
    });
  }
}
