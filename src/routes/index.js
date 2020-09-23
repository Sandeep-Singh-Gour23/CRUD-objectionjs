const express = require("express");
const router  = express.Router();

// import user controller.
const userController = require("../controllers/index").userController;

// API Routes for Post
router.post("/createuser",userController.CreateUser);
router.get("/getuser/:name",userController.GetUser);
router.get("/getusers",userController.GetUsers);
router.put("/user/:id",userController.UpdateUser);
router.delete("/user/:id",userController.RemoveUser);



// export router;
module.exports = router;
