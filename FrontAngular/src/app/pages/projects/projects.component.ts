import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {
  public title = "Proyectos";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.dialog.open(ProjectDetailComponent,{
      data:{
        title: "Nuevo Proyecto"
      }
    })
  }

}
