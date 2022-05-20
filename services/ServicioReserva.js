// Importamos el modelo de datos
import { modeloReserva } from "../models/reservaModelo.js"

export class ServicioReserva{
    constructor(){}

    async buscarTodos(){
        return(await modeloReserva.find())                
    }
    
    async buscarPorId(id){
        return(await modeloReserva.findById(id))
    }
    
    async registrar(datosPeticion){        
        return(await new modeloReserva(datosPeticion).save())
    }

    async editar(id,datosPeticion){
        return(await modeloReserva.findByIdAndUpdate(id,datosPeticion))
    }

    async eliminar(id){
        return(await modeloReserva.findByIdAndDelete(id))
    }
}