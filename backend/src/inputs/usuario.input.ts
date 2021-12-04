import { RolInput } from './rol.input';
import { Field, InputType } from "type-graphql";

@InputType()
export class UsuarioInput {
    @Field({ nullable: true })
    id: string;
    @Field()
    nombre!: string;
    @Field()
    apellido!: string;
    @Field()
    rol!: string;
    @Field()
    email!: string;
    @Field()
    password!: string;
    @Field()
    activo!: boolean;
}