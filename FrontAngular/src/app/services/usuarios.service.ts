import { DocumentNode } from 'graphql';
import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public queryGetUsuarios: DocumentNode = gql`
    query {
      getUsuarios{
        id,
        nombre,
        apellido,
        email,
        rol{
          id,
          nombre
        },
        activo,
        password
      }
    }
    `;

  constructor(private apolloClient: Apollo) { }

  getUsuarios() {
    return this.apolloClient.watchQuery({
      query: this.queryGetUsuarios
    }).valueChanges.pipe(
      map((result: any) => result.data.getUsuarios as UsuarioModel[])
    )
  }

  createUsuario(usuario: UsuarioModel) {
    return this.apolloClient.mutate({
      mutation: gql`
        mutation createUsuario($usuario: UsuarioInput!) {
          createUsuario(usuario: $usuario) {
            id
          }
        }
          `,
      variables: {
        usuario
      },
      refetchQueries: [{
        query: this.queryGetUsuarios
      }]
    });
  }

  deleteUsuario(id: string) {
    return this.apolloClient.mutate({
      mutation: gql`
        mutation deleteUsuario($id: String!) {
          deleteUsuario(id: $id)
        }
          `,
      variables: {
        id
      },
      refetchQueries: [{
        query: this.queryGetUsuarios
      }]
    });
  }

  updateUsuario(usuario: UsuarioModel) {
    return this.apolloClient.mutate({
      mutation: gql`
        mutation updateUsuario($usuario: UsuarioInput!) {
          updateUsuario(usuario: $usuario){
            id
          }
        }
          `,
      variables: {
        usuario
      },
      refetchQueries: [{
        query: this.queryGetUsuarios
      }]
    });
  }
}
