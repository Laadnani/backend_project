
//-------------------------------CUSTOMERS TABLE QUERIES

// GET all customers query 
    const getAllCustomers = 'Select * from customers';






//-------------------------------ORDERS TABLE QUERIES

// Get all orders query

    const getAllOrders = 'SELECT * from orders';







//-------------------------------PRODUCTS TABLE QUERIES

// Get all orders query

const getAllProducts = 'SELECT * from products';






//----------------------------REGISTRATION QUERIES

// inserting the registration data into the customers table 

const getregistration = 'INSERT INTO customers VALUES ($1, $2, $3, $4, $5)'

    module.exports = {
        getAllCustomers,
        getAllOrders,
        getAllProducts,
        getregistration,

    }