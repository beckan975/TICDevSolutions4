import { Field, InputType } from "type-graphql";

@InputType()
export class RolInput {
    @Field({ nullable: true })
    id:string;
    @Field()
    nombre: string;
}