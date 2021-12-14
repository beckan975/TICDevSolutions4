import { RolModel } from './rol.model';
export interface UsuarioModel {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: RolModel,
    activo: boolean;
}