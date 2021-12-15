import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from './../../../services/usuarios.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RolModel } from 'src/app/models/rol.model';
import { RolesService } from 'src/app/services/roles.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styles: [
  ]
})
export class UsersDetailsComponent implements OnInit {

  public userDetailForm: FormGroup;
  public rolesList: RolModel[] = [];

  constructor(public dialogRef: MatDialogRef<UsersDetailsComponent>,
    private usuarioService: UsuariosService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private rolesService: RolesService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.userDetailForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.getRoles();
    this.createForm();
  }

  private createForm() {
    if (!this.data.usuario) {
      this.userDetailForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        rol: ['', [Validators.required]],
        activo: [true, [Validators.required]],
        password: ['', [Validators.required]]
      });
    } else {
      this.userDetailForm = this.fb.group({
        nombre: [this.data.usuario.nombre, Validators.required],
        apellido: [this.data.usuario.apellido, [Validators.required]],
        email: [this.data.usuario.email, [Validators.required, Validators.email]],
        rol: [this.data.usuario.rol, [Validators.required]],
        activo: [this.data.usuario.activo, [Validators.required]],
        password: [this.data.usuario.password, [Validators.required]]
      });
    }
  }

  get enabledForm(): boolean {
    if (this.userDetailForm) {
      if (this.userDetailForm.valid) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.data.usuario) {
      this.updateUsuario();
    } else {
      this.createUsuario();
    }
  }

  private createUsuario() {
    this.spinner.show();
    this.usuarioService.createUsuario(this.userDetailForm.value).subscribe(result => {
      this.spinner.hide();
      this.toastr.success('Usuario creado correctamente', 'Exito');
      this.dialogRef.close();
    }, error => {
      this.spinner.hide();
      this.toastr.error(error.error.message, 'Error');
    })
  }

  private updateUsuario() {
    this.spinner.show();
    let userData:UsuarioModel={
      id:this.data.usuario.id,
      nombre:this.userDetailForm.value.nombre,
      apellido:this.userDetailForm.value.apellido,
      email:this.userDetailForm.value.email,
      rol:this.userDetailForm.value.rol,
      activo:this.userDetailForm.value.activo,
      password:this.userDetailForm.value.password      
    }
    this.usuarioService.updateUsuario(userData).subscribe(result => {
      this.spinner.hide();
      this.toastr.success('Usuario actualizado correctamente', 'Exito');
      this.dialogRef.close();
    }, error => {
      this.spinner.hide();
      this.toastr.error(error.message, 'Error');
    });
  }

  private getRoles() {
    this.spinner.show();
    this.rolesService.getRoles().subscribe(result => {
      this.rolesList = result;
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      this.toastr.error(error.error.message, 'Error');
    })
  }
}
