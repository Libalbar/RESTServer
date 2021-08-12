const {response, request} = require('express');

const usersGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        msg: 'get API - controller'
    })
}
const usersPost = (req, res = response) => {
    const {name, age} = req.body;
    res.json({
        msg: 'post API - controller',
        name,
        age
    })
}
const usersPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - controller',
        id
    })
}
const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}
const usersPatch = (req, res = response) => {
    res.json({
        msg: 'path API - controller'
    })
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}