import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }

