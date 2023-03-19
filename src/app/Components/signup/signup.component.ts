import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  token: string = "";

  constructor(private http: HttpService, private _router: Router) { }

  regForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    // Minimum eight characters, at least one letter, one number and one special character:
    /*Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]*/
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.regForm)
    if (this.regForm.valid) {

      this.http.createUser(this.regForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('token', res["accessToken"])
          this.token = localStorage.getItem('token');
          console.log(res)
          this._router.navigate(['/home'])
        },
        error: (err) => {
          console.log("error", err)
        }
      })
    } else {
      console.log('data is not valid')
    }

  }

  get usernameValid() {
    return this.regForm.controls["username"].valid
  }
  get emailValid() {
    return this.regForm.controls["email"].valid
  }
  get passwordValid() {
    return this.regForm.controls["password"].valid
  }
  get passwordMatch() {
    return this.regForm.controls['password'].value === this.regForm.controls['repeatPassword'].value
  }

}
