// Importamos el modelo de datos
import { modeloReserva } from "../models/reservaModelo.js"

class ServicioReserva{
    constructor(){}

    async buscarTodos(){
        try{            
            return(await modeloReserva.find())
        }catch(error){
            console.log("Ha fallado la busqueda "+error)
        }
    }
    
    async buscarPorId(id){
        try{            
            return(await modeloReserva.findById())
        }catch(error){
            console.log("Falló la busqueda por id "+error)
        }
    }
    
    async registrar(datosPeticion){
        try{            
            return(await new modeloReserva(datosPeticion).save())
        }catch(error){
            console.log("Error registrando "+error)
        }
    }

    async editar(id,datosPeticion){
        try{
            return(await modeloReserva.findByIdAndUpdate(id,datosPeticion))
        }catch(error){
            console.log("Fallo en la edicion "+error)
        }
    }

    async eliminar(id){
        try{
            return(await modeloReserva.findByIdAndDelete())
        }catch(error){
            console.log("Fallo el eliminar "+error)
        }
    }
}