import {Sequelize} from 'sequelize'

const dataBase = new Sequelize('formulario', 'root','', {
    host:'localhost',
    dialect: 'mysql',
    port:3100
})

export default dataBase
