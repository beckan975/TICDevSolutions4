import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        AuthRoutingModule,
        PagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }