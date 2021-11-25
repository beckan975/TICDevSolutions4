import * as mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            
        });

        console.log("Db conectada correctamente");
    } catch (error) {
        console.log(error);
        throw new Error("Error al iniciar la base de datos, ver logs");
    }
}