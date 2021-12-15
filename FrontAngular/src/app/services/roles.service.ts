import { RolModel } from './../models/rol.model';
import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private aplloClient: Apollo) { }

  public queryGetRoles = gql`
    query {
      getRoles{
        id,
        nombre
      }
    }
    `;

  public getRoles() {
    return this.aplloClient.watchQuery({
      query: this.queryGetRoles
    }).valueChanges.pipe(
      map((result: any) => result.data.getRoles as RolModel[])
    )
  }
}
