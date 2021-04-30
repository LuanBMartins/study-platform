const Database = require('./../db/postgres')
const userSchema = require('./../db/schemas/user')


let database = {}
// Connection in the Database Postgres
async function databaseConnect () {
    let connection = await Database.connect()
    let model = await Database.defineModel(connection, userSchema)
    database = new Database(connection, model)
}
databaseConnect()


// cadastra usuários no banco de dados
exports.createUser = async (req, resp, next) => {
    console.log('its create!')
}

// retorna usuários
exports.getUser = async (req, resp, next) => {
    try {
        let {username} = req.query
        let query = username ? {username: username} : {}
        let value = await database.read(query)
        console.log('value', value);
        console.log('query', query);
        resp.send(value) 
    } catch(error) {
        console.log('erro interno:', error);
    }
}

// atualiza usuários
exports.updateUser = async (req, resp, next) => {
    console.log('its update')
}

// deleta usuários
exports.deleteUser = async (req, resp, next) => {
    console.log('its delete')
}
