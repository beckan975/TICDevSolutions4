import { Field, InputType } from "type-graphql";

@InputType()
export class ProyectoInput {
    @Field({ nullable: true })
    id: string;
    @Field()
    lider: string;
    @Field()
    estado: string;
    @Field(type => [String])
    objetivosEsperados: string[];
    @Field()
    presupuesto: number;
    @Field(type => [String])
    estudiantes: string[];
    @Field(type => [String])
    solicitudesEstudiantes: string[];
    @Field(type => [String])
    avances: string[];
    @Field()
    fase: string;
}