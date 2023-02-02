import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthserviceService } from './authservice.service';
const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'Home',
    component: HomePageComponent,
    canActivate: [AuthserviceService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
