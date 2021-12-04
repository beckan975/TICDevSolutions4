import { Arg, Query, Resolver } from 'type-graphql';
import { generarJwt } from '../helpers/jwt';
import { AuthInput } from '../inputs/auth.Input';

import { UsuarioModel } from '../models/usuario.model';
import { UsuarioType } from '../types/usuario.type';
import { AuthType } from './../types/Auth.type';
@Resolver(of => AuthType)
export class AuthResolver {

    @Query(returns => AuthType, { nullable: true })
    async login(@Arg("auth") authInput: AuthInput) {
        try {
            let usuario = await UsuarioModel.findOne({ where: { email: authInput.email } }).populate("rol");
            if (!usuario) {
                throw new Error("Usuario no encontrado");
            } else if (this.validatePassword(authInput.password, usuario)) {
                const token = await generarJwt(usuario.id, usuario.rol.nombre) as string;
                const auth: AuthType = new AuthType();
                auth.token = token;
                auth.msg = "Login exitoso";
                auth.ok = true;
                return auth;
            } else {
                throw new Error("Contraseña incorrecta");
            }

        } catch (error) {
            return error;
        }
    }

    private validatePassword(password: string, user: UsuarioType) {
        //return bcrypt.compareSync(password, user.password);
        if (password === user.password) {
            return true;
        } else {
            return false;
        }
    }
}