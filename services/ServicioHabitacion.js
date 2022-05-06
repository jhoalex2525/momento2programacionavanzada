// Importamos el modelo de datos
import { modeloHabitacion } from "../models/habitacionModelo.js";

export class ServicioHabitacion{
    constructor(){}

    async buscarTodos(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones        
    }
    
    async buscarPorId(id){
        let habitacion=await modeloHabitacion.findById()
        return habitacion
    }
    
    async registrar(datosPeticion){
        let habitacionARegistrar=new modeloHabitacion(datosPeticion)
        return(await habitacionARegistrar.save())
    }

    async editar(id,datosPeticion){
        return(await modeloHabitacion.findByIdAndUpdate(id,datosPeticion))
    }

    async eliminar(id){
        return(await modeloHabitacion.findByIdAndDelete())
    }
}