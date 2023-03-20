import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css'],
})
export class UpdateListComponent {
  token: string = localStorage.getItem('token');
  id: string;

  constructor(
    private http: HttpService,
    public modalRef: MdbModalRef<UpdateListComponent>
  ) {}

  ngOnInit(): void {
    console.log('comp');
  }

  update(title: string) {
    console.log('id', this.id);
    
    this.http.updateListById(this.id, { title }, this.token).subscribe({
      next: (res) => {
        console.log("res", res);
        this.modalRef.close(res);
      },
      error: (err) => {
        console.log(err);
        this.modalRef.close();
      },
    });
  }
}
