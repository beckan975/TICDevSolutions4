import { SolicitudType } from './../types/solicitud.type';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { SolicitudModel } from '../models/solicitud.model';
import { SolicitudInput } from '../inputs/solicitud.input';

@Resolver(of => SolicitudType)
export class SolicitudResolver {
    @Query(returns => [SolicitudType], { nullable: true })
    async getSolicitudes(): Promise<SolicitudType[] | any> {
        try {
            let solicitudes = await SolicitudModel.find().populate("usuario");
            return solicitudes as SolicitudType[];
        } catch (error) {
            return error = {
                message: "Error al obtener las solicitudes",
                status: 500,
                data: null,
                error: error
            }
        }

    }

    @Mutation(returns => SolicitudType)
    async createSolicitud(@Arg("solicitud") solicitudInput: SolicitudInput): Promise<SolicitudType | any> {
        try {
            let solitud = new SolicitudModel(solicitudInput);
            solitud.populate("usuario");
            await solitud.save();
            return solitud as SolicitudType;
        } catch (error) {
            return error = {
                message: "Error al crear la solicitud",
                status: 500,
                data: null,
                error: error
            }
        }
    }

    @Mutation(returns => SolicitudType)
    async updateSolicitud(@Arg("solicitud") solicitudInput: SolicitudInput): Promise<SolicitudType | any> {
        try {
            let solitud = await SolicitudModel.findByIdAndUpdate(solicitudInput.id, solicitudInput, { new: true });
            return solitud;
        } catch (error) {
            return error = {
                message: "Error al actualizar la solicitud",
                status: 500,
                data: null,
                error: error
            }
        }
    }

    @Mutation(returns => Boolean)
    async deleteSolicitud(@Arg("id") id: string): Promise<SolicitudType | any> {
        try {
            await SolicitudModel.findByIdAndDelete(id);
            return true;
        } catch (error) {
            return error = {
                message: "Error al eliminar la solicitud",
                status: 500,
                data: null,
                error: error
            }
        }
    }
}