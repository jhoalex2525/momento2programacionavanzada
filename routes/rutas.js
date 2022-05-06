// Rutas nos ayuda a clasificar el tipo de petición que se hará
// Importando express
import express from 'express'

import {ControladorHabitacion} from '../controller/ControladorHabitacion.js'
import {ControladorReserva} from '../controller/ControladorReserva'
// Una variable para almacenar
// La funcionalidad de express Router
// que es la que me permite personalizar y separar RUTAS

// Creamos el objeto para poder utilizar la clase Controlador, vamos a instanciar
let controladorHabitacion = new ControladorHabitacion()
let controladorReserva = new ControladorReserva()

export let rutas=express.Router()

// DEFINO MIS RUTAS HABITACIÓN
rutas.get('/API/v1/buscarTodosHabitacion', controladorHabitacion.buscarTodos)
rutas.get('/API/v1/buscarIdHabitacion/:id', controladorHabitacion.buscarPorId)
rutas.post('/API/v1/insertarHabitacion', controladorHabitacion.insertar)
rutas.put('/API/v1/editarHabitacion/:id', controladorHabitacion.editar)
rutas.delete('/API/v1/eliminarHabitacion/:id', controladorHabitacion.eliminar)

// DEFINO MIS RUTAS RESERVA
rutas.get('/API/v1/buscarTodosReserva', controladorHabitacion.buscarTodos)
rutas.get('/API/v1/buscarIdReserva/:id', controladorHabitacion.buscarPorId)
rutas.post('/API/v1/insertarReserva', controladorHabitacion.insertar)
rutas.put('/API/v1/editarReserva/:id', controladorHabitacion.editar)
rutas.delete('/API/v1/eliminarReserva/:id', controladorHabitacion.eliminar)