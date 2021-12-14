import { UsersComponent } from './../users/users.component';
import { ProjectsService } from './../../../services/projects.service';
import { UsuarioModel } from './../../../models/usuario.model';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styles: [
  ]
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
  public projectDetailForm: FormGroup;
  public usersList: UsuarioModel[] = []
  public usersByProjects: UsuarioModel[] = [];
  @ViewChild('usuarioComponent') userComponent?: UsersComponent;

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailComponent>,
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    public spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private projectService: ProjectsService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.projectDetailForm = this.fb.group({});

    if (this.data.project) {
      if (this.data.project.estudiantes) {
        this.usersByProjects = this.data.project.estudiantes as UsuarioModel[];
      }
    }
  }
  ngAfterViewInit(): void {
    if (this.data.project) {
      if (this.data.project.estudiantes) {
        this.userComponent?.setUsuariosPorProyecto(this.usersByProjects);
      }
    }
  }

  ngOnInit(): void {
    this.getUsers();
    this.createForm();
  }

  private createForm() {
    this.projectDetailForm = this.fb.group({
      projectName: ['' || this.data.project.nombre, Validators.required],
      lider: ['' || this.data.project.lider.id, Validators.required],
      estado: ['' || this.data.project.estado, Validators.required],
      presupuesto: ['' || this.data.project.presupuesto, Validators.required],
      fase: ['' || this.data.project.fase, Validators.required]
    });
  }

  private getUsers() {
    this.spinner.show();
    this.usuarioService.getUsuarios().subscribe(result => {
      this.usersList = result.filter(user => user.rol.nombre === 'Lider');
      this.spinner.hide();
    }, error => {
      this.toastr.error('Error al obtener los usuarios', 'Error');
      this.spinner.hide();
    });
  }

  public onCancel() {
    this.dialogRef.close();
  }

  getUsersByProject(event: UsuarioModel[]) {
    this.usersByProjects = event;
  }

  get enabledForm(): Boolean {
    if (this.projectDetailForm.valid && this.usersByProjects.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public onSubmit() {
    if (this.data.project) {
      this.onEditProject();
    } else {
      this.onCreateProject();
    }
  }

  public onCreateProject() {
    this.spinner.show();
    let project = {
      nombre: this.projectDetailForm.value.projectName,
      lider: this.projectDetailForm.value.lider,
      estado: this.projectDetailForm.value.estado,
      presupuesto: this.projectDetailForm.value.presupuesto,
      fase: this.projectDetailForm.value.fase,
      estudiantes: this.usersByProjects.map(user => user.id)
    }

    this.projectService.createProject(project).subscribe(result => {
      console.log(result);
      this.spinner.hide();
      this.toastr.success('Proyecto creado correctamente', 'Exito');
      this.dialogRef.close();
    }, error => {
      this.toastr.error('Error al crear el proyecto', 'Error');
      this.spinner.hide();
    });
  }

  public onEditProject() {

  }
}
