import { Sequelize } from "sequelize";
import db from "../config/database.js";
import bcrypt from "bcrypt";

const {DataTypes} = Sequelize;

const Candidate = db.define('candidate', {
  username:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[0-9a-z]+$/i,
      len: [6,15]
    },
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[a-z A-Z]+$/i
    },
  },
  gender:{
    type: DataTypes.STRING
  },
  phone:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[0-9]+$/i,
        len: [7,14]
      },
  },
  password:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      len: [8,16]
      },
    },
}, {
    freezeTableName:true,
    timestamps: false
});

Candidate.beforeCreate((candidate, options) => {
    return bcrypt.hash(candidate.password, 10)
        .then(hash => {
            candidate.password = hash;
        })
        .catch(err => {
            throw new Error();
        });
});

export default Candidate;

(async()=>{
    await db.sync();
})();
