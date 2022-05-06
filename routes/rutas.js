// Rutas nos ayuda a clasificar el tipo de petición que se hará
// Importando express
import express from 'express'

import {ControladorHabitacion} from '../controller/ControladorHabitacion.js'
// Una variable para almacenar
// La funcionalidad de express Router
// que es la que me permite personalizar y separar RUTAS

// Creamos el objeto para poder utilizar la clase Controlador, vamos a instanciar
let controladorHabitacion = new ControladorHabitacion()

export let rutas=express.Router()

// DEFINO MIS RUTAS
rutas.get('/API/v1/viernes', controladorHabitacion.buscarTodos)
rutas.get('/API/v1/viernes/:id', controladorHabitacion.buscarPorId)
rutas.post('/API/v1/viernes', controladorHabitacion.insertar)
rutas.put('/API/v1/viernes/:id', controladorHabitacion.editar)
rutas.delete('/API/v1/viernes/:id', controladorHabitacion.eliminar)