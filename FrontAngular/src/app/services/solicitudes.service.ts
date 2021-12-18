import { DocumentNode } from 'graphql';
import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  private getSolicitudesQuery: DocumentNode = gql`
  query{
    getSolicitudes {
      id,
      fecha,
      estado,
      descripcion,
      usuario{
        id,
        nombre,
        apellido,
        rol{
          id,
          nombre
        }
      }
    }
  }
  `;
  constructor(private apolloClient: Apollo) { }

  getSolicitudes() {
    return this.apolloClient.watchQuery({
      query: this.getSolicitudesQuery
    }).valueChanges.pipe(
      map((result: any) => result.data.getSolicitudes as any[])
    );
  }

  createSolicitud(solicitud: any) {
    return this.apolloClient.mutate({
      mutation: gql`
        mutation createSolicitud($solicitud: SolicitudInput!) {
          createSolicitud(solicitud: $solicitud) {
            id
          }
        }
      `,
      variables: {
        solicitud
      },
      refetchQueries: [{
        query: this.getSolicitudesQuery
      }]
    });
  }

  updateSolicitud(solicitud: any) {
    return this.apolloClient.mutate({
      mutation: gql`
        mutation updateSolicitud($solicitud: SolicitudInput!) {
          updateSolicitud(solicitud: $solicitud) {
            id
          }
        }
      `,
      variables: {
        solicitud
      },
      refetchQueries: [{
        query: this.getSolicitudesQuery
      }]
    });
  }

  deleteSolicitud(id: string) {
    return this.apolloClient.mutate({
      mutation: gql`
        mutation deleteSolicitud($id: String!) {
          deleteSolicitud(id: $id)
        }
      `,
      variables: {
        id
      },
      refetchQueries: [{
        query: this.getSolicitudesQuery
      }]
    });
  }
}
