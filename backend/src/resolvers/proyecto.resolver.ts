import { ProyectoInput } from './../inputs/proyecto.input';
import { Arg, Mutation } from 'type-graphql';
import { Query, Resolver } from 'type-graphql';
import { ProyectoModel } from '../models/proyecto.model';
import { ProyectoType } from '../types/proyecyo.type';

@Resolver(of => ProyectoType)
export class ProyectoResolver {
    @Query(returns => [ProyectoType], { nullable: true })
    async getProyectos(): Promise<ProyectoType[] | any> {
        try {
            let proyectos = await ProyectoModel.find().populate("lider", "estudiantes", "solicitudes");
            return proyectos as ProyectoType[];
        } catch (error) {
            return error = {
                message: "Error al obtener los proyectos",
                status: 500,
                data: null,
                error: error
            }
        }
    }

    @Mutation(returns => ProyectoType)
    async createProyecto(@Arg("proyecto") proyectoInput: ProyectoInput): Promise<ProyectoType | any> {
        try {
            let proyecto = new ProyectoModel(proyectoInput);
            await proyecto.save();
            return proyecto as ProyectoType;
        } catch (error) {
            return error = {
                message: "Error al crear el proyecto",
                status: 500,
                data: null,
                error: error
            }
        }
    }

    @Mutation(returns => ProyectoType)
    async updateProyecto(@Arg("proyecto") proyectoInput: ProyectoInput): Promise<ProyectoType | any> {
        try {
            let proyecto = await ProyectoModel.findByIdAndUpdate(proyectoInput.id, proyectoInput, { new: true });
            return proyecto;
        } catch (error) {
            return error = {
                message: "Error al actualizar el proyecto",
                status: 500,
                data: null,
                error: error
            }
        }
    }

    @Mutation(returns => Boolean)
    async deleteProyecto(@Arg("id") id: string): Promise<ProyectoType | any> {
        try {
            await ProyectoModel.findByIdAndDelete(id);
            return true;
        } catch (error) {
            return error = {
                message: "Error al eliminar el proyecto",
                status: 500,
                data: null,
                error: error
            }
        }
    }
}