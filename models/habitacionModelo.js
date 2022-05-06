// importando mongoose encargado de crear la conexión/puente
import mongoose from 'mongoose';

// Clase para definir el esquema de datos de mi MODELO
const Schema=mongoose.Schema

// Construyo mi ESQUEMA DE DATOS
const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    foto:{
        type:String,
        required:true
    }
})

// CREO EL MODELO DE DATOS
export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)