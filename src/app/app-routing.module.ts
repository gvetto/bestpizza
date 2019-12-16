import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [{
  path: '', redirectTo: '/store', pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'store',
  component: StoreComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
