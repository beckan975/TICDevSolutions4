import { RolInput } from './../inputs/rol.input';
import { RolModel } from './../models/rol.model';
import { RolType } from './../types/rol.type';
import { Arg, Mutation, Query, Resolver } from "type-graphql";


@Resolver(of => RolType)
export class RolResolver {
    @Query(returns => [RolType], { nullable: true })
    async getRoles(): Promise<RolType[]> {
        let roles = await RolModel.find();
        return roles as RolType[];
    }

    @Mutation(returns => RolType)
    async createRol(@Arg("rol") rolInput: RolInput):Promise<RolType|any> {
        console.log(rolInput);
        let rol = new RolModel(rolInput);
        try {
            await rol.save();
            console.log(rol.toJSON());
            return rol as RolType;
        } catch (error) {
            error = {
                message: error.message,
                status: 500
            }
            return error;
        }
    }

    @Mutation(returns => RolType)
    async updateRol(@Arg("rol") rolInput: RolInput) {
        let rol = await RolModel.findByIdAndUpdate(rolInput.id, rolInput, { new: true });
        return rol as RolType;
    }

    @Mutation(returns => Boolean)
    async deleteRol(@Arg("id") id: string): Promise<boolean> {
        try {
            await RolModel.findByIdAndDelete(id);
            return true;
        } catch (error) {
            return false;
        }
    }
}