// En el controlador se importan los servicios
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class Controlador {

    constructor() { }

    async buscarTodos(request, response) {
        // Se instancia la clase SERVICIO
        let servicio=new ServicioHabitacion()
        try {
            response.status(200).json({
                mensaje: "Exito en la busqueda",
                data: await servicio.buscarTodos(),
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }

    async buscarPorId(request, response) {
        let id = request.params.id //capturo el id que llega por la URL
        console.log("El id solicitado es: " + id)
        // Se instancia la clase SERVICIO
        let servicio=new ServicioHabitacion()
        try {
            response.status(200).json({
                mensaje: "Exito en la busqueda especificada " + id,
                data: await servicio.buscarPorId(id),
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }

    async insertar(request, response) {
        let datosPeticion = request.body
        console.log(datosPeticion)
        // Se instancia la clase SERVICIO
        let servicio=new ServicioHabitacion()
        try {
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje: "Exito agregando nuevo registro",
                data: datosPeticion,
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }

    async editar(request, response) {
        let id = request.params.id //capturo el id que llega por la URL
        let datosPeticion = request.body
        console.log(datosPeticion)
        console.log("El id solicitado es: " + id)
        // Se instancia la clase SERVICIO
        let servicio=new ServicioHabitacion()
        try {
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje: "Exito Editando el registro",
                data: datosPeticion,
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }

    async eliminar(request, response) {
        let id = request.params.id //capturo el id que llega por la URL
        // Se instancia la clase SERVICIO
        let servicio=new ServicioHabitacion()
        try {
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje: "Exito eliminando el registro",
                data: null,
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Algo salió mal",
                data: [],
                estado: false
            })
        }
    }
}