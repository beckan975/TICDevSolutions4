import { UsuarioInput } from './../inputs/usuario.input';
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { UsuarioModel } from "../models/usuario.model";
import { UsuarioType } from "../types/usuario.type";

@Resolver(of => UsuarioType)
export class UsuarioResolver {
    
    @Authorized()
    @Query(returns => [UsuarioType], { nullable: true })
    async getUsuarios(): Promise<UsuarioType[] | any> {
        try {
            let usuarios = await UsuarioModel.find().populate("rol");
            return usuarios as UsuarioType[];
        } catch (error) {
            return error = {
                message: "Error al obtener los usuarios",
                error
            }
        }
    }

    @Mutation(returns => UsuarioType)
    async createUsuario(@Arg("usuario") usuarioInput: UsuarioInput): Promise<UsuarioType | any> {

        try {

            const existeUsuario = await UsuarioModel.exists({ where: { email: usuarioInput.email } });

            if (existeUsuario) {
                throw new Error("El usuario ya existe");
            }

            const usuario = new UsuarioModel(usuarioInput);
            usuario.populate("rol");
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
        try {
            const tempUser = await UsuarioModel.findById(usuarioInput.id);
            if (!tempUser) {
                throw new Error("El usuario no existe");
            } else {
                if (tempUser.email !== usuarioInput.email) {
                    const existeUsuario = await UsuarioModel.exists({ where: { email: usuarioInput.email } });
                    if (existeUsuario) {
                        throw new Error("Ya existe un usuario con ese email");
                    } else {
                        let usuario = await UsuarioModel.findByIdAndUpdate(usuarioInput.id, usuarioInput, { new: true }).populate("rol") as UsuarioType;
                        return usuario;
                    }
                }
            }
        } catch (error) {
            console.log(error);
            return error = {
                message: "Error al actualizar el usuario",
                error
            }
        }
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