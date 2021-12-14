import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './../angular-material.module';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from './projects/users/users.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    PagesComponent,
    HomeComponent,
    ProjectDetailComponent,
    UsersComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  exports: [
    ProjectsComponent,
    PagesComponent,
    HomeComponent,
    ProjectDetailComponent,
    UsuariosComponent
  ]
})
export class PagesModule { }
