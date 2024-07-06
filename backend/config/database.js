import { Sequelize } from "sequelize";

const db = new Sequelize('enigma21_aldo_keppel','root','10012002',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
