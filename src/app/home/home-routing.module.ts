import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { DetailsComponent } from "./pages/details/details.component";
import { ListComponent } from "./pages/list/list.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'details/:id', component: DetailsComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
