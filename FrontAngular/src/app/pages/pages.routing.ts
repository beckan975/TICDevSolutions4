import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'users',
                component: UsuariosComponent
            },{
                path:'solicitudes',
                component: SolicitudesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }