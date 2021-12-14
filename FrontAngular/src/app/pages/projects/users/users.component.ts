import { UsuarioModel } from './../../../models/usuario.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  public usuarios: UsuarioModel[] = [];
  public usuariosPorProyecto: any[] = [];
  @Output() public onSelectUser = new EventEmitter<any[]>();

  constructor(
    private userService: UsuariosService,
    public spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.addUserToProject();
    this.getUsers();
  }

  private getUsers() {
    this.spinner.show();
    this.userService.getUsuarios().subscribe(result => {
      this.usuarios = result;
      this.spinner.hide();
    }, error => {
      this.toastr.error('Error al obtener los usuarios', 'Error');
      this.spinner.hide();
    });
  }

  public addUserToProject() {
    this.usuariosPorProyecto.push({});
  }

  public deleteUserToProject(index: number) {
    this.usuariosPorProyecto.splice(index, 1);
    this.onSelectUser.emit(this.usuariosPorProyecto);
  }

  public onUserChange(index: number, event: any) {
    this.usuariosPorProyecto[index] = event.value;
    this.onSelectUser.emit(this.usuariosPorProyecto);
  }

}
