import { UsuarioModel } from './../../models/usuario.model';
import { MatTableDataSource } from '@angular/material/table';
import { Component, Inject, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { UsersDetailsComponent } from './users-details/users-details.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {
  public title: string = "Usuarios";
  public usuariosData: MatTableDataSource<UsuarioModel>;
  public showTable: boolean = false;

  public displayedColumns = [
    'nombre',
    'apellido',
    'email',
    'rol',
    'activo',
    'actions'
  ];

  constructor(private usuariosService: UsuariosService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    public dialog: MatDialog) {
    this.usuariosData = new MatTableDataSource<UsuarioModel>();
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.spinner.show();
    this.usuariosService.getUsuarios().subscribe(result => {
      this.usuariosData.data = result;
      this.spinner.hide();
      this.showTable = true;
      this.toastr.success("Usuarios cargados correctamente");
    }, error => {
      this.spinner.hide();
      this.showTable = false;
      this.toastr.error(error.message, 'Error');
    })
  }

  onCreate() {
    this.dialog.open(UsersDetailsComponent, {
      data: {
        title: "Nuevo Usuario"
      }
    })
  }

  onEdit(usuario: UsuarioModel) {

  }

  onDelete(id: string) {

  }

}
