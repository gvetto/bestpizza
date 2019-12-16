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

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  loginForm: FormGroup;

  get username() { return this.loginForm.get('userName'); }

  get password() { return this.loginForm.get('password'); }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  forgotPassword() {

  }

  onSubmit() {
    this.submitted = true;
    const isValid = !this.loginForm.invalid;
    if (isValid) {
      this.authService.validateUser(this.username.value)
      this.router.navigate(['/store'])
    }
  }

}
