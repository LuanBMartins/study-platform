const sequelize = require('sequelize')

const schema = {
    name: 'users',
    schema: {
        username: {
            type: sequelize.CHAR(30),
            required:true,
            unique: true
        },
        pass: {
            type: sequelize.CHAR(30),
            required: true
        },
        email: {
            type: sequelize.TEXT,
            required: true,
            unique: true
        }    
    },
    options: {
        tableName: 'users',
        freezeTableName: false,
        timestamps: false
    }
}

module.exports = schema