const ObjectID = require('mongodb').ObjectID;
const User = require('../../models/user.model');

const createUserDAO = async (body) => {
    let newUser = new User({
        name: body.name,
        company: body.company,
        salary: body.salary,
        address: {
            city: body.city,
            numebr: body.number,
            neighborhood: body.neighborhood,
            street: body.street
        }
    });
    return await newUser.save();
}
const readUserDAO = async (id) => {
    return await User.findOne({"_id": new ObjectID(id)});
}
const updateUserDAO = async (id, body) => {
    return await User.findByIdAndUpdate(id, body)
}
const deleteUserDAO = async (id) => {
    return await User.deleteOne({"_id": new ObjectID(id)});
}
const listUsersDAO = async () => {
    return await User.find();
}

module.exports = {
    createUserDAO,
    readUserDAO,
    updateUserDAO,
    deleteUserDAO,
    listUsersDAO
}