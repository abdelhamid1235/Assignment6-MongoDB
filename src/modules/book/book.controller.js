import { Router } from "express";
import { successResponse } from "../../common/utils/index.js";
import {deleteBook, findBookByGenre, findBookByTitle, findBookByYear, getBooksNotIncludeGengreHorrorOr, getBooksWithYearInteger, GetWithAggregate1, GetWithAggregate2, GetWithAggregate3, GetWithAggregate4, insertManyINBookCollection, insertOneINBookCollection, skipLimit, updateBooks } from "./book.service.js";
const router = Router()

// 5:URL: POST /books
router.post("/",async (req, res, next) => {
    const create = await insertOneINBookCollection(req.body);
    return successResponse({res,message:"insert Done", status: 201 , data:create })
})

// 6:URL: POST /books/batch
router.post("/batch",async (req, res, next) => {
    const create = await insertManyINBookCollection(req.body);
    return successResponse({res,message:"insert Done", status: 201 , data:create })
})

// 8:URL: PATCH/books/Future
router.patch("/:title",async (req, res, next) => {
    const book = await updateBooks(req.params);
    return successResponse({res,message:"sucessfully Update", status: 201 , data:book })
})

// 9:URL: GET /books/title => /books/title?title=
router.get("/title",async (req, res, next) => {
    const book = await findBookByTitle(req.query);
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})

// 10:URL: GET /books/year => /books/year?from=1990&to=2010
router.get("/year",async (req, res, next) => {
    const book = await findBookByYear(req.query);
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})

// 11:URL: /books/genre?genre=Science Fiction
router.get("/genre",async (req, res, next) => {
    const book = await findBookByGenre(req.query);
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})

// 12: GET /books/skip-limit
router.get("/skip-limit",async (req, res, next) => {
    const book = await skipLimit(req.query);
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})

//13:GET /books/year-integer
router.get("/year-integer",async (req, res, next) => {
    const book = await getBooksWithYearInteger();
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})

// 14:URL: GET /books/exclude-genres
router.get("/exclude-genres",async (req, res, next) => {
    const book = await getBooksNotIncludeGengreHorrorOr();
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})

// 15:DELETE: GET /books/before-year?year=2000
router.delete("/before-year",async (req, res, next) => {
    const book = await deleteBook(req.query);
    return successResponse({res,message:"sucessfully delete", status: 200 , data:book })
})

// 16:URL: GET /books/aggregate1
router.get("/aggregate1",async (req, res, next) => {
    const book = await GetWithAggregate1();
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})

// 17:URL: GET /books/aggregate2
router.get("/aggregate2",async (req, res, next) => {
    const book = await GetWithAggregate2();
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})

//18: URL: GET /books/aggregate3
router.get("/aggregate3",async (req, res, next) => {
    const book = await GetWithAggregate3();
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})

//19:URL: GET /books/aggregate4
router.get("/aggregate4",async (req, res, next) => {
    const book = await GetWithAggregate4();
    return successResponse({res,message:"sucessfully Find", status: 200 , data:book })
})
export default router