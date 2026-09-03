import {Router} from 'express'
import { createAuthorCollection, createBooksCollection, createBooksIndex, createLogsCollection } from './collection.service.js'
import { successResponse } from '../../common/utils/success.response.js'
const router = Router()

// 1:URL: POST /collection/books
router.post('/books' , async(req , res , next)=>{
    const create = await createBooksCollection()
    return successResponse({res,message:"Create Done" ,status:201}) 
})

// 2:URL: POST /collection/authors
router.post('/authors' , async(req , res , next)=>{
    const create = await createAuthorCollection()
    return successResponse({res,message:"Create Done" ,status:201}) 
})

// 3:URL: POST /collection/logs/capped
router.post('/logs/capped' , async(req , res , next)=>{
    const create = await createLogsCollection()
    return successResponse({res,message:"Create Done" ,status:201}) 
})

// 4:URL: POST /collection/books/index
router.post('/books/index' , async(req , res , next)=>{
    const create = await createBooksIndex()
    return successResponse({res,message:"Create Done" ,status:201}) 
})

export default router
