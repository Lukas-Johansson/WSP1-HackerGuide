const express = require('express');
const validator = require('validator');
const router = express.Router();
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const { path } = require('../app');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
});
const promisePool = pool.promise();


module.exports = router;

router.get('/', async function (req, res, next) {
    const [rows] = await promisePool.query("SELECT lj04forum.*, lj04users.name FROM lj04forum JOIN lj04users ON lj04forum.authorId = lj04users.id ORDER BY createdAt DESC")
    res.render('index.njk', {
        rows: rows,
        title: 'Forum',
        user : req.session.username || 0
    });
});

router.get('/login', async function (req, res, next) {
    res.render('login.njk', {
        title: 'Login',
    });
});

router.post('/login', async function (req, res, next) {
    const { username, password } = req.body;
    if (username.length == 0) {
        return res.render('login.njk', { title: 'Login', error: 'Username is Required' });
    }
    if (password.length == 0) {
        return res.render('login.njk', { title: 'Login', error: 'Password is Required' });
    }

    const [user] = await promisePool.query('SELECT * FROM lj04users WHERE name = ?', [username]);

    if (!user) {
        return res.render('login.njk', { title: 'Login', error: 'Invalid username or password' });
    }

    bcrypt.compare(password, user[0].password, function (err, result) {
        if (result === true) {
            req.session.username = username;
            req.session.login = 1;
            req.session.userId = user[0].id;
            return res.redirect('/profile');
        } else {
            return res.render('login.njk', { title: 'Login', error: 'Invalid username or password' });
        }
    });
});

router.get('/profile', async function (req, res, next) {
    
    if (req.session.login == 1) {
        res.render('profile.njk', { 
            title: 'Profile', 
            user : req.session.username || 0,
            login : req.session.login || 0
        });
    }
    
    else {
        return res.status(401).send('Access denied')
    }
});

router.post('/profile', async function (req, res, next) {
    req.body = { logout };
});

router.get('/logout', async function (req, res, next) {
    if (req.session.login == 1) {
        req.session.login = 0;
        req.session.username = 0;
        res.redirect('/');
    }

    else {
        return res.status(401).send('Access denied')
    }
});


router.get('/crypt/:password', async function (req, res, next) {
    const password = req.params.password
    // const [password] = await promisePool.query('SELECT password FROM dbusers WHERE none = ?', [password]);
    bcrypt.hash(password, 10, function (err, hash) {
        return res.json({ hash });

    })
});

router.get('/signin', function (req, res, next) {
    res.render('signin.njk', { title: 'sign' });
});


router.get('/register', function (req, res, next) {
    res.render('register.njk', { title: 'register' });

});

router.post('/register', async function (req, res, next) {
    const { username, password, passwordConfirmation } = req.body;

    if (validator.isAlphanumeric(username, 'sv-SE')) {
        if (username === "") {
            return res.render('register.njk', { title: 'Register', error: 'Username is Required' });
        }
        else if (password.length === 0) {
            return res.render('register.njk', { title: 'Register', error: 'Password is Required' });
        }
        else if (password.length <= 8) {
            return res.render('register.njk', { title: 'Register', error: 'Password must be atleast 8 characters.' });
        }
        else if (passwordConfirmation.length === 0) {
            return res.render('register.njk', { title: 'Register', error: 'Password is Required' });
        }
        else if (password !== passwordConfirmation) {
            return res.render('register.njk', { title: 'Register', error: 'Passwords does not match' });
        }
    
        const [user] = await promisePool.query('SELECT name FROM lj04users WHERE name = ?', [username]);
        console.log({ user })
    
        if (user.length > 0) {
            return res.send('Username is already taken')
        } else {
            bcrypt.hash(password, 10, async function (err, hash) {
                const [creatUser] = await promisePool.query('INSERT INTO lj04users (name, password) VALUES (?, ?)', [username, hash]);
                res.redirect('/login')
            })
        }
    }
    else {
        return res.render('register.njk', { title: 'Register', error: 'Username must be alphanumeric' });
    }
});




module.exports = router;
