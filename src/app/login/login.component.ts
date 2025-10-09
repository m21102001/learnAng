import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword: boolean = false
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[1-9]{3,5}[a-z]{3,5}$/),
      Validators.minLength(3),
      Validators.maxLength(20)
    ])
  })
  displayPassword() {
    this.showPassword = !this.showPassword
  }
  submitLoginGroup(form: FormGroup) {
    localStorage.setItem('auth', 'true')
    console.log(form.value);
    console.log(form.controls);

  }
}
