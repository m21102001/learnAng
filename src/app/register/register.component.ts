import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showPassword: boolean = false
  registerForm: FormGroup = new FormGroup({
    fullName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^[1-9]{3,5}[a-z]{4,8}$/)
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
    ]),
  },
    { validators: this.passwordMatchValidator }
  )
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true }; // ❌ الباسورد مش متطابق
    }
    return null; // ✅ تمام
  }
  togglePassword() {
    this.showPassword = !this.showPassword
  }
  submitRegisterGroup(form: FormGroup) {
    console.log(form.value);

  }
}
