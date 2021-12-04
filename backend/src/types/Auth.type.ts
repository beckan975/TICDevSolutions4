import { Field, ObjectType } from "type-graphql";


@ObjectType()
export class AuthType {
    @Field({ nullable: true })
    token: string;
    @Field({ nullable: true })
    ok: boolean;
    @Field({ nullable: true })
    msg: string;
}