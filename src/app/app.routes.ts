import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
    { path: '', loadChildren: './home/module#HomeModule' },
    { path: 'memory/:gameId', loadChildren: './memory/module#MemoryModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
