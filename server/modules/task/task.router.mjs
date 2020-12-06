import raw from "../../middleware/route.async.wrapper.mjs"
import express from "express"
import * as _ from "./task.controller.mjs"

const router = express.Router();
router.use(express.json());

router.post(   "/"           , raw( _.create_task)     )       
router.get(    "/"           , raw( _.get_all_tasks)   ) 
 
router.patch(  "/change/:id" , raw( _.update_task)     )
router.patch(  "/all"        , raw( _.update__all_task))

router.delete( "/clear/:id"  , raw( _.delete_task)     )   
router.delete( "/all"        , raw( _.delete_all_tasks))    

export default router;