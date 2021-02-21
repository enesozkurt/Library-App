const express = require('express');

const User = require('../models/User')
const usersRoute = express.Router();

usersRoute.post('/register',  async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const user = await User.create({
            name, email, password
        });

        res.send(user)
    } catch (error) {
        console.log(error)
    }
});

usersRoute.post('/login', (req, res) => {
    res.send('Login route');
})

usersRoute.put('/update', (req, res) => {
    res.send('Update Route');
})

usersRoute.delete('/:id', (req, res) => {
    res.send('Delete route');
})

usersRoute.get('/', (req, res) => {
    res.send('Fetch Users')
})

module.exports = usersRoute;
