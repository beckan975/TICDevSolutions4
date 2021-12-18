import { SolicitudType } from './solicitud.type';
import { UsuarioType } from './usuario.type';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class ProyectoType {
    @Field({ nullable: true })
    id: string;
    @Field()
    nombre: string;
    @Field(type => UsuarioType)
    lider: UsuarioType;
    @Field()
    estado: string;
    @Field(type => [String])
    objetivosEspecificos: string[];
    @Field()
    presupuesto: number;
    @Field(type => [UsuarioType])
    estudiantes: UsuarioType[];
    @Field(type => [SolicitudType])
    solicitudesEstudiantes: SolicitudType[];
    @Field(type => [String])
    avances: string[];
    @Field()
    fase: string;
}