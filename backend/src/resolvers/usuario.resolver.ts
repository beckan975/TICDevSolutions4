import { UsuarioInput } from './../inputs/usuario.input';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { UsuarioModel } from "../models/usuario.model";
import { UsuarioType } from "../types/usuario.type";

@Resolver(of => UsuarioType)
export class UsuarioResolver {
    @Query(returns => [UsuarioType], { nullable: true })
    async getUsuarios(): Promise<UsuarioType[]> {
        let usuarios = await UsuarioModel.find().populate("rol");
        return usuarios as UsuarioType[];
    }

    @Mutation(returns => UsuarioType)
    async createUsuario(@Arg("usuario") usuarioInput: UsuarioInput): Promise<UsuarioType | any> {
        console.log(usuarioInput);
        let rolId = usuarioInput.rol.id;
        try {
            let usuario = new UsuarioModel({
                nombre: usuarioInput.nombre,
                apellido: usuarioInput.apellido,
                email: usuarioInput.email,
                password: usuarioInput.password,
                rol: rolId,
                activo: usuarioInput.activo
            });
            await usuario.save();
            return usuario as UsuarioType;
        } catch (error) {
            return error = {
                message: "Error al crear el usuario",
                error
            }
        }
    }

    @Mutation(returns => UsuarioType)
    async updateUsuario(@Arg("usuario") usuarioInput: UsuarioInput): Promise<UsuarioType | any> {
        console.log(usuarioInput);
        let usuario = new UsuarioModel(usuarioInput);
        try {
            await usuario.save();
            console.log(usuario.toJSON());
        } catch (error) {
            console.log(error);
        }
        return usuario;
    }

    @Mutation(returns => Boolean)
    async deleteUsuario(@Arg("id") id: string): Promise<boolean> {
        try {
            await UsuarioModel.findByIdAndDelete(id);
            return true;
        } catch (error) {
            return false;
        }
    }
}