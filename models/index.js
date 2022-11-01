// import all models
const User = require('./user');
const Sauce = require('./sauce');

module.exports = { User, Sauce };


// create associations
User.hasMany(Sauce, {
    foreignKey: 'user_id'
});

Sauce.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

