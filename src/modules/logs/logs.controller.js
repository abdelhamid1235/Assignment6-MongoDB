import { Router } from "express";
import { successResponse } from "../../common/utils/index.js";
import { insertOneINLogsCollection } from "./logs.service.js";
const router = Router()

// 7:URL: POST /logs
router.post("/",async (req, res, next) => {
    const create = await insertOneINLogsCollection(req.body);
    return successResponse({res, status: 201 , data:create })
})



export default router