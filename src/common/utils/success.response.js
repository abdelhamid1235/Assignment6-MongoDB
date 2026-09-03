export const successResponse = ({ res, message = true,status = 200 , data = undefined} = {}) => {
    return res.status(status).json({ message, status, data })
}