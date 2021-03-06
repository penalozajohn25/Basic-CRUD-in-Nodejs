const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'developer',
    password: '-',
    database: 'firstapi',
    port: '5432'
})

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
}

const getUserById = async (req, res) => {
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
    res.status(200).json(response.rows);
}

const createUsers = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2 )', [name, email]);
    res.status(200).json({
        message: "User Added Succesfully",
        body: {
            user: { name, email }
        }
    })
}

const updateUsers = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    res.status(200).json('User Updated Succesfully');
}

const deleteUsers = async (req, res) => {
    const response = await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
    res.status(200).json(`User ${req.params.id} Deleted Succesfully`);
}

module.exports = {
    getUsers,
    createUsers,
    getUserById,
    deleteUsers,
    updateUsers
}