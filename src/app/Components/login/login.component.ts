import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;

  constructor(private http: HttpService, private _router: Router) { }

  signin(email: any, password: any) {

    this.http.login({email, password}).subscribe({
      next: (res) => {
        localStorage.setItem('token', JSON.stringify(res))
        this.token = JSON.parse(localStorage.getItem('token') as string).accessToken
        this._router.navigateByUrl('/home')
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    
  }
}
