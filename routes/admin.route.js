import express from "express";

const adminRoute = express.Router();

adminRoute.get('/',
    (request, response) => response.send('Hello admin')
)

export default adminRoute;