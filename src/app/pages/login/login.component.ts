import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  loginForm: FormGroup;
  errors: any = {
    userNotExist: false
  };

  get username() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }

  ngOnInit() {
    this.errors.userNotExist = false;
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  forgotPassword() {

  }

  async onSubmit() {
    this.submitted = true;
    const isValid = !this.loginForm.invalid;
    if (isValid) {
      const isValidUser = await this.authService.validateUserAsync(this.username.value, this.password.value);
      if (isValidUser) {
        this.router.navigate(['/stores']);
      } else {
        this.errors.userNotExist = true;
      }
    }
  }
}
