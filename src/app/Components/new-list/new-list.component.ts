import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
})
export class NewListComponent implements OnInit{
  token: string = localStorage.getItem('token');
  addedList: object;

  constructor(
    private http: HttpService, 
    private _router: Router,
    public modalRef: MdbModalRef<NewListComponent>) {}
    
  ngOnInit(): void {
    console.log('comp');
    
  }

  add(title: string) {
    this.http.createNewList({ title }, this.token).subscribe({
      next: (res) => {
        console.log(res);
        this.addedList = res;
        this._router.navigateByUrl('/home');
        this.modalRef.close(res)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
