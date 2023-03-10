import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthserviceService } from './authservice.service';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [AuthserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
