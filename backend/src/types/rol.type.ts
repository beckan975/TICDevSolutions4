import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class RolType {
    @Field({ nullable: true })
    id: string;
    @Field()
    nombre: string;
}