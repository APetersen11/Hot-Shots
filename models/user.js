//make user model using sequelize for the user
const { Model,DataTypes } = require("sequelize")
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true, 
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                //password must be atleast 4 characters
                len: [4]
            }
        }
    },
    {
          sequelize,
          // don't automatically create createdAt/updatedAt timestamp fields
          timestamps: false,
          // don't pluralize name of database table
          freezeTableName: true,
          // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
          underscored: true,
          // make it so our model name stays lowercase in the database
          modelName: 'user'
    }
)

module.exports = User;

