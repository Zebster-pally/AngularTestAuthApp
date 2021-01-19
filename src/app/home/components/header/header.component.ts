import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  email: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.email = this.authService.getEmail()
  }

  logout() {
    this.authService.logout()
  }

}
