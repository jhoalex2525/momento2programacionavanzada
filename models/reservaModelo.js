// importando mongoose encargado de crear la conexión/puente
import mongoose from 'mongoose';

// Clase para definir el esquema de datos de mi MODELO
const Schema=mongoose.Schema

// Construyo mi ESQUEMA DE DATOS
const Reserva=new Schema({
    idCliente:{
        type:Number,
        required:true
    },
    fechaIn:{
        type:Date,
        required:true
    },
    fechaOut:{
        type:Date,
        required:true
    },
    costo:{
        type:Number,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})

// CREO EL MODELO DE DATOS
export const modeloReserva=mongoose.model('reservas',Reserva)