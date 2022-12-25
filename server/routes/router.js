const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const partycontroller=require('../controller/partycontroller')

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)
route.get('/organizeparty',services.organizeparty)
route.get('/organizedparties',services.organizedparties)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)


// API
route.post('/api/users', controller.create);
//route.post('/api/party',partycontroller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route