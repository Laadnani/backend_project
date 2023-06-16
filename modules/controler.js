const pool = require ('./databasepg');
const queries = require('./queries');


const getCustomers = (req, res) => {
    pool.query(queries.getAllCustomers, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}; 


const getOrders = (req, res) =>{
    pool.query(queries.getAllOrders, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};


const getProducts = (req, res) =>{
    pool.query(queries.getAllProducts, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};


module.exports = {
    getCustomers,
    getOrders,
    getProducts,
    
};