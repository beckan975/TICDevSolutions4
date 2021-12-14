import { UsuarioModel } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private apolloClient: Apollo) { }

  getUsuarios() {
    return this.apolloClient.watchQuery({
      query: gql`
        query {
          getUsuarios {
            id
            nombre
            apellido
            email
            password,
            rol{
              id,
              nombre
            }
          }
        }
      `
    }).valueChanges.pipe(
      map((result: any) => result.data.getUsuarios as UsuarioModel[])
    )
  }
}
