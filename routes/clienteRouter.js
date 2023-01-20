import express from 'express'
import {crearcliente,editarcliente,mostrarCliente,mostrarClientes,eliminarcliente,} from '../contollers/CrontrollerCliente.js'

const clienteRouter = express.Router();

clienteRouter.post('/',crearcliente)
clienteRouter.put('/:id',editarcliente)
clienteRouter.get('/:id',mostrarCliente)
clienteRouter.delete('/',eliminarcliente)
clienteRouter.get('/', mostrarClientes)


export default clienteRouter