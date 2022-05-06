// importando mongoose encargado de crear la conexión/puente
import mongoose from 'mongoose';

export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectando la BD")
    }catch(error){
        console.log("Fallo en conexión con BD "+error)
    }
}