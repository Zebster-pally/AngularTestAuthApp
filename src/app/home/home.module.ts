import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './pages/list/list.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        HomeRoutingModule,
        SharedModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        DetailsComponent,
        ListComponent,
        HeaderComponent
    ]
})
export class HomeModule { }

