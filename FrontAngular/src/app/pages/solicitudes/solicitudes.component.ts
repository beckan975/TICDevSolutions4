import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/services/solicitudes.service';
import { SolicitudDetailComponent } from './solicitud-detail/solicitud-detail.component';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styles: [
  ]
})
export class SolicitudesComponent implements OnInit {
  public title: string = 'Solicitudes';
  public showTable: boolean = false;
  public solicitudes: MatTableDataSource<any>;

  public displayedColumns = [
    'id',
    'fecha',
    'estado',
    'userName',
    'userApellido',
    'actions'
  ];

  constructor(public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private solicitudesService: SolicitudesService) {
    this.solicitudes = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getSolicitudes();
  }

  onCreate() {
    this.dialog.open(SolicitudDetailComponent, {
      data: {
        title: "Nueva Solicitud"
      }
    });
  }

  onEdit(solicitud: any) {
    this.dialog.open(SolicitudDetailComponent, {
      data: {
        title: "Editar Solicitud",
        solicitud: solicitud
      }
    })
  }

  onDelete(id: string) {
    this.spinner.show();
    this.solicitudesService.deleteSolicitud(id).subscribe(result => {
      this.spinner.hide();
      this.toastr.success('Solicitud eliminada');
    }, error => {
      this.spinner.hide();
      this.toastr.error('Error al eliminar solicitud');
    });
  }

  getSolicitudes() {
    this.spinner.show();
    this.solicitudesService.getSolicitudes().subscribe(result => {
      this.solicitudes.data = result;
      this.spinner.hide();
      this.showTable = true;
      this.toastr.success("Solicitudes cargados correctamente");
    }, error => {
      this.spinner.hide();
      this.showTable = false;
      this.toastr.error(error.message, 'Error');
    });
  }

}
