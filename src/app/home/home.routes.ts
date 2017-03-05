import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const HomeRoutes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(HomeRoutes)]
})
export class HomeRoutingModule { }
