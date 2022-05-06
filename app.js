// require('dotenv').config()
// console.log(process.env.PORT) // remove this after you've confirmed it working

// Lineas 1 y 2 se reemplazan por lo siguiente
// Importando dotENV
// require('dotenv').config() esta sería la forma de siempre
// Mejor usar la siguiente
import 'dotenv/config'

// DESPERTAR EL SERVIDOR
// 1. Importar la clase Servidor
import { Servidor } from './Server/Servidor.js'
// 2. Uso la clase servidor, es decir, creo un objeto
let servidorViernes = new Servidor()
// 3. Llamado al método despertarServidor
servidorViernes.despertarServidor()