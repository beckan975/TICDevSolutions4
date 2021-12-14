import { ProjectsService } from './../../services/projects.service';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
  ]
})
export class ProjectsComponent implements OnInit {

  public title = "Proyectos";
  public showTable: boolean = false;
  public projects: MatTableDataSource<any>;

  public displayedColumns = [
    'nombre',
    'estado',
    'lider',
    'presupuesto',
    'fase',
    'actions'
  ]

  constructor(public dialog: MatDialog,
    private projectsService: ProjectsService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    this.projects = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onCreate() {
    let dialog = this.dialog.open(ProjectDetailComponent, {
      data: {
        title: "Nuevo Proyecto"
      }
    });
  }

  getProjects() {
    this.spinner.show();
    this.projectsService.getProjects().subscribe(result => {
      this.projects.data = result;
      this.spinner.hide();
      this.showTable = true;
      this.toastr.success("Proyectos cargados correctamente");
    }, error => {
      this.spinner.hide();
      this.showTable = false;
      this.toastr.error(error.message, 'Error');
    });
  }


  public onDeleteProject(id: string) {
    this.spinner.show();
    this.projectsService.deleteProject(id).subscribe(result => {
      this.spinner.hide();
      this.toastr.success('Proyecto eliminado correctamente', 'Exito');
    }, error => {
      this.toastr.error('Error al eliminar el proyecto', 'Error');
      this.spinner.hide();
    });
  }

  public onEditProject(project: any) {
    let dialog = this.dialog.open(ProjectDetailComponent, {
      data: {
        title: "Editar Proyecto",
        project: project
      }
    });
  }

}
