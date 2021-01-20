import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const emailConst = "admin@admin.com"
const passConst = "admin"

@Injectable({ providedIn: 'root' })
export class AuthService {


  constructor(private router: Router,
    private toastr: ToastrService) { }

  login(email: string, password: string) {
    if (emailConst === email && passConst === password) {
      localStorage.setItem("user", JSON.stringify({ email: email, pass: password }));
      this.router.navigate(['/']);
    } else {
      this.toastr.warning('Authentication wrong!', 'Error!');
    }
  }

  logout(): void {
      localStorage.clear();
      this.router.navigate(['auth']);
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem("user")) {
      return true
    } else {
      return false
    }
  }

  getEmail(): string {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      return user.email
    }
  }

}
