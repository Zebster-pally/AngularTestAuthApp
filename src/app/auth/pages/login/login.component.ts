import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

const login = "test@test.com"
const pass = 12345

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  constructor(public router: Router) { }

  time = new Date();
  timer: any;

  hide : Boolean = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passFormControl = new FormControl('', [
    Validators.required
  ]);

  login() {
    if (this.emailFormControl.value == login && this.passFormControl.value == pass) {
      this.router.navigate(['home'])
    } else {
      alert("Wrong data!")
    }
  }

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }
}
