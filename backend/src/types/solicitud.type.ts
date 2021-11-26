import { UsuarioType } from './usuario.type';
import { Field, ObjectType } from 'type-graphql';
@ObjectType()
export class SolicitudType {
    @Field({ nullable: true })
    id: string;
    @Field()
    descripcion: string;
    @Field()
    fecha: Date;
    @Field()
    estado: string;
    @Field(type=>UsuarioType)
    usuario: UsuarioType;
}