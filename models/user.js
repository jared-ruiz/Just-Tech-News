const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

//create user model
class User extends Model {}

//define table columns and configuaration 
User.init(
    {
        //define an id column
        id: {
            //use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            //this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            //instruct that this is the Primary Key
            primaryKey: true,
            //turn on auto increment
            autoIncrement: true
        },
        //define a username cloumn
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //there cannot be any duplicate email values in this table
            unique: true, 
            //if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        //define password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means the password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        //TABLE CONFIG OPTIONS GO HERE


        //pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        
        //dont automatically create createdAt/updatedAt timestap fields
        timestamps: false,
        
        //dont pluralize name of database tables
        freezeTables: false,
        
        //use underscores instead of camel-casing (i.e. `comment_text` and not `commentText)
        underscored: true,
        
        //make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;
