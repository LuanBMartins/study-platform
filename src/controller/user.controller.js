const Database = require('./../db/postgres')
const userSchema = require('./../db/schemas/user')


// Connection in the Database Postgres
async function databaseConnect () {
    let connection = await Database.connect()
    let model = await Database.defineModel(connection, userSchema)
    return new Database(connection, model)
}
const database = databaseConnect()

// Creating the user and save in the database
exports.createUser = async (req, resp, next) => {
    console.log('its create!')
}

// get user
exports.getUser = async (req, resp, next) => {
    console.log('its get')
}

// update user
exports.updateUser = async (req, resp, next) => {
    console.log('its update')
}

// delete user
exports.deleteUser = async (req, resp, next) => {
    console.log('its delete')
}
