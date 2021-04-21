const { response } = require('express');

const getUsuarios = (req, res = response) => {

    const { q, nombre, juego } = req.query;

    res.json({
        message: 'peticion api',
        q,
        nombre,
        juego
    });
}

const updateUser = (req, res) => {

    const id = req.params.id;

    res.json({
        message: 'put api',
        id
    });
}

const addUser = (req, res) => {

    const { nombre, edad } = req.body;
    res.json({
        message: 'post api',
        nombre,
        edad
    });
}

const deleteUser = (req, res) => {
    res.json({
        message: 'delete api'
    });
}

const patchUser = (req, res) => {
    res.json({
        message: 'patch api'
    });
}



module.exports = {
    getUsuarios,
    updateUser,
    addUser,
    deleteUser,
    patchUser
}