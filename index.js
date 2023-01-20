import express from 'express'
import dataBase from './database/conexionDatabase.js';
import clienteRouter from './routes/clienteRouter.js';


import cors from 'cors';


const app= express();
const port=3100;

try {
    await dataBase.authenticate()
    console.log(`conexion exitosa a base de datos`)
}catch(error){
    console.log(`conxion no exitosa`)
}

app.use(cors())
app.use(express.json())
app.use('/cliente',clienteRouter)



app.listen(port,()=>{
    console.log(`servidor corriendo en el puerto ${port}`)
    console.log(`servidor corriendo en el servidor http://localhost:3100`)
})