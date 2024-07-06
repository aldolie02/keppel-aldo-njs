import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Team = db.define('team', {
  teamName:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[0-9a-zA-Z_]$/i,
      min: 4,
      max: 15,
    },
  },
    captain: DataTypes.STRING,
    captainName: DataTypes.STRING,
    captainGender: DataTypes.STRING,
    captainPhone: DataTypes.STRING,
    member: DataTypes.STRING,
    memberName: DataTypes.STRING,
    memberGender: DataTypes.STRING,
    memberPhone: DataTypes.STRING
}, {
    freezeTableName:true,
    timestamps: false
});

export default Team;

(async()=>{
    await db.sync();
})();
