import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  template: '<div fxLayoutAlign="end center"><mat-icon>lock</mat-icon><a class="cursor-pointer" (click)="logout()">Salir</a></div><a>'
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
