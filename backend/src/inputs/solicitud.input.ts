import { Field, InputType } from "type-graphql";

@InputType()
export class SolicitudInput {
    @Field({ nullable: true })
    id: string;
    @Field()
    estado: string;
    @Field()
    fecha: Date;
    @Field()
    descripcion: string;
    @Field()
    usuario: string;
}