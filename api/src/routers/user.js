const {getAllUsersController} = require("../controllers/user");

const router = require("express").Router();

router.get("/users/", getAllUsersController);

router.get("/users/:id/", );


module.exports = router;
