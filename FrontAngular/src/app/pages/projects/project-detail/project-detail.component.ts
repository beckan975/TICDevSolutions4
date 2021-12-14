import { UsuarioModel } from './../../../models/usuario.model';
import { Component, Inject, OnInit } from '@angular/core';
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
export class ProjectDetailComponent implements OnInit {
  public projectDetailForm: FormGroup;
  public usersList: UsuarioModel[] = []
  public usersByProjects: UsuarioModel[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailComponent>,
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    public spinner: NgxSpinnerService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.projectDetailForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.getUsers();
    this.createForm();
  }

  private createForm() {
    this.projectDetailForm = this.fb.group({
      projectName: ['', Validators.required],
      lider: ['', Validators.required],
      estado: ['', Validators.required],
      presupuesto: ['', Validators.required],
      fase: ['', Validators.required]
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

  public onCreateProject() {
    console.log(this.projectDetailForm.value);
  }
}
