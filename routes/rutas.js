// Rutas nos ayuda a clasificar el tipo de petición que se hará
// Importando express
import express from 'express'

import {Controlador} from '../controller/Controlador.js'
// Una variable para almacenar
// La funcionalidad de express Router
// que es la que me permite personalizar y separar RUTAS

// Creamos el objeto para poder utilizar la clase Controlador, vamos a instanciar
let controlador = new Controlador()

export let rutas=express.Router()

// DEFINO MIS RUTAS
rutas.get('/API/v1/viernes', controlador.buscarTodos)
rutas.get('/API/v1/viernes/:id', controlador.buscarPorId)
rutas.post('/API/v1/viernes', controlador.insertar)
rutas.put('/API/v1/viernes/:id', controlador.editar)
rutas.delete('/API/v1/viernes/id', controlador.eliminar)