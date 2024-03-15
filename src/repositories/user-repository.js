const CrudRepository = require("./crud-repository")
const { User } = require('../models')

class UserRepository extends CrudRepository {
    constructor() {
        this.model(User);
    }
}

export default UserRepository;