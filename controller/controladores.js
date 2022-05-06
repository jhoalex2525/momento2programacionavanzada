// Los controladores reciben solicitudes y envían respuestas
export function buscarTodos(request,response){
    try{
        response.status(200).json({
            mensaje: "Exito en la busqueda",
            data: [{nombre:"Juan",edad:32},{nombre:"María",edad:50}],
            estado: true
        })
    }catch(error){
        response.status(400).json({
            mensaje: "Algo salió mal",
            data: [],
            estado: false
        })
    }
}

export function buscarPorId(request,response){
    try{
        response.status(200).json({
            mensaje: "Exito en la busqueda especificada",
            data: [{nombre:"Juan",edad:32}],
            estado: true
        })
    }catch(error){
        response.status(400).json({
            mensaje: "Algo salió mal",
            data: [],
            estado: false
        })
    }
}

export function insertar(request,response){
    try{
        response.status(200).json({
            mensaje: "Exito agregando nuevo registro",            
            estado: true
        })
    }catch(error){
        response.status(400).json({
            mensaje: "Algo salió mal",
            data: [],
            estado: false
        })
    }    
}

export function editar(request,response){
    try{
        response.status(200).json({
            mensaje: "Exito Editando el registro",            
            estado: true
        })
    }catch(error){
        response.status(400).json({
            mensaje: "Algo salió mal",
            data: [],
            estado: false
        })
    }
}

export function eliminar(request,response){
    try {
        response.status(200).json({
            mensaje: "Exito eliminando el registro",
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