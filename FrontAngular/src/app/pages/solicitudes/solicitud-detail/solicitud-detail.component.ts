import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
import * as moment from 'moment';

@Component({
  selector: 'app-solicitud-detail',
  templateUrl: './solicitud-detail.component.html',
  styles: [
  ]
})
export class SolicitudDetailComponent implements OnInit {

  public solicitudDetailForm: FormGroup;
  public userList: UsuarioModel[] = [];
  public maxDate: string = '';

  constructor(public dialogRef: MatDialogRef<SolicitudDetailComponent>,
    private solicitudesService: SolicitudesService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.solicitudDetailForm = new FormGroup({});
    this.maxDate = moment().utc(true).format('YYYY-MM-DD');
  }

  ngOnInit(): void {
    this.getUsuarios();
    this.createForm();
  }

  private createForm() {
    if (!this.data.solicitud) {
      this.solicitudDetailForm = this.fb.group({
        usuario: ['', Validators.required],
        fecha: [moment().utc(true).format('YYYY-MM-DD'), Validators.required],
        descripcion: ['', Validators.required],
        estado: ['', Validators.required]
      });
    } else {
      this.solicitudDetailForm = this.fb.group({
        usuario: [this.data.solicitud.usuario.id, Validators.required],
        fecha: [this.data.solicitud.fecha, Validators.required],
        descripcion: [this.data.solicitud.descripcion, Validators.required],
        estado: [this.data.solicitud.estado, Validators.required]
      });
    }
  }

  getUsuarios() {
    this.spinner.show();
    this.usuarioService.getUsuarios().subscribe(result => {
      this.spinner.hide();
      this.userList = result;
    }, error => {
      this.spinner.hide();
      this.toastr.error('Error al obtener los usuarios');
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.data.solicitud) {
      this.createSolicutud();
    } else {
      this.updateSolicutud();
    }
  }

  createSolicutud() {
    this.spinner.show();
    this.solicitudesService.createSolicitud(this.solicitudDetailForm.value).subscribe(result => {
      this.spinner.hide();
      this.toastr.success('Solicitud creada correctamente');
      this.dialogRef.close();
    }, error => {
      this.spinner.hide();
      this.toastr.error('Error al crear la solicitud');
    });
  }

  updateSolicutud() {
    this.spinner.show();
    let solicitudRequest = {
      id: this.data.solicitud.id,
      usuario: this.solicitudDetailForm.value.usuario,
      fecha: this.solicitudDetailForm.value.fecha,
      descripcion: this.solicitudDetailForm.value.descripcion,
      estado: this.solicitudDetailForm.value.estado
    }

    this.solicitudesService.updateSolicitud(solicitudRequest).subscribe(result => {
      this.spinner.hide();
      this.toastr.success('Solicitud actualizada correctamente');
      this.dialogRef.close();
    }, error => {
      this.spinner.hide();
      this.toastr.error('Error al actualizar la solicitud');
    });
  }

}
