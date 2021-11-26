import { type } from 'os';
import { Field, ObjectType } from 'type-graphql';
import { RolType } from './rol.type';
@ObjectType()
export class UsuarioType {
    @Field({ nullable: true })
    id: string;
    @Field()
    nombre: string;
    @Field()
    apellido: string;
    @Field()
    email: string;
    @Field()
    password: string;
    @Field(type => RolType)
    rol: RolType;
    @Field()
    activo: boolean;
}