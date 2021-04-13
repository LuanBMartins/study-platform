const assert = require('assert')
const Database = require('./../db/postgres')
const userSchema = require('./../db/schemas/user')

let USER_DEFAULT = {
    username: 'user',
    pass: 'useradmin',
    email: 'useradmin@domain.com'
}

let USER_ATT = {
    username: 'anyone',
    pass: 'easypass',
    email: 'anyone@domain.com'
}

let database = {}
let aux = ''

describe('it`s tests in the Postgres', function(){
    this.beforeAll(async function (){
        let connection = await Database.connect()
        let model = await Database.defineModel(connection, userSchema)
        database = new Database(connection, model)

        await database.create(USER_ATT)
    })
    it('is connection', async function() {
        let result = await database.isConneted()
        assert.ok(result)
    })
    it('create', async function() {
        let result = await database.create(USER_DEFAULT)
        delete result.id
        assert.deepStrictEqual(result, USER_DEFAULT)
    })
    it('read', async function() {
        let [result] = await database.read({username: USER_DEFAULT.username})
        delete result.id
        assert.deepStrictEqual(result, USER_DEFAULT)
    })
    it('update', async function() {
        let [user] = await database.read({username: USER_ATT.username})
        let user_att = {
            ...USER_ATT,
            pass: 'SuperSecret'
        }
        aux = user.id
        let result = await database.update({id: user.id}, user_att)
        assert.ok(result[0] === 1)
    })
    it('delete', async function() {
        let [user] = await database.read({username: USER_DEFAULT.username})
        let result = await database.delete({id: user.id})
        assert.ok(result === 1)
    })
    this.afterAll(async function() {
        await database.delete({id: aux})
    })
})