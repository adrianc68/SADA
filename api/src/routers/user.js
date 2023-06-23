const {getAllUsersController, getBusinessOfUser} = require("../controllers/user");

const router = require("express").Router();

router.get("/users/", getAllUsersController);

router.get("/users/:id/business", getBusinessOfUser);


module.exports = router;
