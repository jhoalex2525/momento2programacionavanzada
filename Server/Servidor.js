// Importaciones necesarias

// Importando Express
// const express = require('express') esta sería la forma de siempre
// Mejor usar la siguiente
import express from 'express'

// Importando las RUTAS
import { rutas } from '../routes/rutas.js'

// Importar la función de conexión
import { conectar } from '../database/conexion.js'

// Programo lo clase servidor, internamente tiene un constructor
// En el constructor se definen los atributos de la clase, solo en JS esto sucede
export class Servidor { //Se agrega export para ponerlo disponible a todo el proyecto
    // Cuando se despierte el servidor se ejecutara el constructor
    constructor() {
        // const app = express() Así sería antes, ahora:
        this.app = express() //app es un atributo
        this.conectarConBD() //Antes de llamar y enrutar se debe conectar con BD
        this.llamarAuxiliares()
        this.enrutarPeticiones()
    }

    // METODOS DEL SERVIDOR (¿QUÉ HACE?)
    despertarServidor() {
        // Agregaremos un mensaje para decir que iniciamos por tanto se agrega un callback
        // al listen
        this.app.listen(process.env.PORT, function () {
            console.log("Servidor encendido")
        })
    }

    // ENRUTAR PETICIONES (CLASIFICARLAS)
    enrutarPeticiones() {
        this.app.use('/', rutas)
    }

    llamarAuxiliares() {//middleware
        this.app.use(express.json())
    }

    conectarConBD(){
        conectar()
    }
}