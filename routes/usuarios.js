

const { Router } = require('express');
const {
    getUsuarios,
    updateUser,
    addUser,
    deleteUser,
    patchUser
} = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);

router.put('/:id', updateUser);

router.post('/', addUser);

router.delete('/:id', deleteUser);

router.patch('/', patchUser);


module.exports = router;