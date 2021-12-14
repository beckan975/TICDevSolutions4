import { Field, InputType } from "type-graphql";

@InputType()
export class ProyectoInput {
    @Field({ nullable: true })
    id: string;
    @Field()
    nombre: string;
    @Field()
    lider: string;
    @Field()
    estado: string;
    @Field(type => [String], { nullable: true })
    objetivosEsperados: string[];
    @Field()
    presupuesto: number;
    @Field(type => [String])
    estudiantes: string[];
    @Field(type => [String], { nullable: true })
    solicitudesEstudiantes: string[];
    @Field(type => [String], { nullable: true })
    avances: string[];
    @Field()
    fase: string;
}