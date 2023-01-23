//URLS.py or 

const express =require ('express');
const ProfileController = require('../controllers/ProfileController');
const AuthverifyMiddleware = require('../middleware/AuthverifyMiddleware')
const ToDoListController = require('../controllers/ToDoListController')

const router=express.Router();

//Middleware chara
router.post("/CreateProfile",ProfileController.CreateProfile)
router.post("/UserLogin",ProfileController.UserLogin)


//Middleware shuddha
router.get("/SelectProfile",AuthverifyMiddleware,ProfileController.SelectProfile )
router.post("/UpdateProfile",AuthverifyMiddleware,ProfileController.UpdateProfile )


//ToDoListApI

router.post("/CreateToDo",AuthverifyMiddleware,ToDoListController.CreateToDo)
router.get("/SelectToDo",AuthverifyMiddleware,ToDoListController.SelectToDo)
router.post("/UpdateToDo",AuthverifyMiddleware,ToDoListController.UpdateToDo)
router.post("/UpdateStatusToDo",AuthverifyMiddleware,ToDoListController.UpdateStatusToDo)
router.post("/RemoveToDo",AuthverifyMiddleware,ToDoListController.RemoveToDo)
router.get("/SelectToDoByStatus",AuthverifyMiddleware,ToDoListController.SelectToDoByStatus)





module.exports=router;