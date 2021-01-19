import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

export class DefaultStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide: Boolean = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);
  passFormControl = new FormControl('', [Validators.required]);

  matcher = new DefaultStateMatcher();

  constructor(
    public router: Router,
    private authService: AuthService,
    private toastr: ToastrService) { }

  login(): void {
    if (this.emailFormControl.valid && this.passFormControl.valid) {
      this.authService.login(this.emailFormControl.value, this.passFormControl.value);
    } else {
      this.emailFormControl.markAsTouched();
      this.passFormControl.markAsTouched();
      this.toastr.warning('Incorrect data!', 'Error!');
    }
  }
}
