// import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model 
class Product extends Model {}

// set up rules for Product model
Product.init({
    // define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
            isNumeric: true
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id',
            unique: false
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
});

module.exports = Product;

