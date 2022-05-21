// Importamos el modelo de datos
import { modeloHabitacion } from "../models/habitacionModelo.js";

export class ServicioHabitacion {
    constructor() { }

    async buscarTodos() {
        return (await modeloHabitacion.find())
    }

    async buscarPorId(id) {
        return (await modeloHabitacion.findById(id))
    }

    async registrar(datosPeticion) {
        return (await new modeloHabitacion(datosPeticion).save())
    }

    async editar(id, datosPeticion) {
        return (await modeloHabitacion.findByIdAndUpdate(id, datosPeticion))
    }

    async eliminar(id) {
        return (await modeloHabitacion.findByIdAndDelete(id))
    }
}