const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const crypto = require('node:crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config/env.js');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isLowercase: true,
            is: /^[A-Za-z0-9_-]+$/
        }
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password_hash: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    password_salt: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
});

User.createPassword = function (plainText) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(plainText, salt, 10000, 512, "sha512")
        .toString("hex");
    return { salt: salt, hash: hash }
}

User.validatePassword = function (password, user_salt, user_hash) {
    const hash = crypto
        .pbkdf2Sync(password, user_salt, 10000, 512, "sha512")
        .toString("hex");
    return user_hash === hash;
}

User.generateJWT = function (user) {
    const today = new Date();
    const exp = new Date();
    exp.setDate(today.getDate() + 5);

    return jwt.sign({
        user: user.username,
        exp: parseInt(exp.getTime())
    }, secret);
}

module.exports = User;