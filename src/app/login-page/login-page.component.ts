import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm: any = FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginFormBuild();
  }

  loginFormBuild(): void {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        // Validators.pattern(this.paspat)
      ]),
    });
  }
  subData() {
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.Password);
    if (this.loginForm.valid) {
      this.router.navigate([`/Home`]);
    } else {
      console.log('no');
    }
  }
}
