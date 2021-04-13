const sequelize = require('sequelize')


module.exports = class database {

    constructor(connection, schema){
        this._connection = connection
        this._schema = schema
    }

    static async connect() {
        const connection = new sequelize(
            'estudos',
            'luanbm',
            '123443210',
            {
                host: 'localhost',
                dialect: 'postgres',
                logging: false, 
            }
        )

        return connection
    }
    static async defineModel(connection, schema) {
        let model = connection.define(
            schema.name,
            schema.schema,
            schema.options
        )
        await model.sync()
        return model
    }
    async isConneted() {
        try {
            await this._connection.authenticate()
            return true
        } catch(error) {
            console.error('internal error', error);
        }
    }
    async create(item) {
        let {dataValues} = await this._schema.create(item)
        return dataValues
    }
    read(username = {}) {
        return this._schema.findAll({
            where: username,
            raw: true
        })
    }
    update(id, item) {
        return this._schema.update(
            item, 
            {where: id}
        )
    }
    delete(id) {
        return this._schema.destroy({where: id})
    }
}

