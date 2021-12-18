import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private getProjectQuery: DocumentNode = gql`
  query{
    getProyectos {
      id,
      nombre,
      lider{
        id,
        nombre,
        apellido
      },
      estado,
      estudiantes{
        id,
        nombre,
        apellido,
        rol{
          id,
          nombre
        }
      },
      presupuesto,
      fase
    }
  }
  `

  constructor(private apolloClient: Apollo) {


  }

  createProject(proyecto: any) {
    return this.apolloClient.mutate({
      mutation: gql`
        mutation createProyecto($proyecto: ProyectoInput!) {
          createProyecto(proyecto: $proyecto) {
            id
          }
        }
      `,
      variables: {
        proyecto
      },
      refetchQueries: [{
        query: this.getProjectQuery
      }]
    });
  }

  getProjects() {
    return this.apolloClient.watchQuery({
      query: this.getProjectQuery
    }).valueChanges.pipe(
      map((result: any) => result.data.getProyectos as any[])
    );
  }

  deleteProject(id: string) {
    return this.apolloClient.mutate({
      mutation: gql`
        mutation deleteProyecto($id: String!) {
          deleteProyecto(id: $id)
        }
      `,
      variables:{
        id
      },
      refetchQueries: [{
        query: this.getProjectQuery
      }]
    });
  }
}
