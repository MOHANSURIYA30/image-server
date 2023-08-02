const express = require('express')
const router = express.Router();
const logger = require("morgan");
router.use(logger("dev"));

const imageRoutes = require("./images");

module.exports = () => {
    router.use((req, res, next) => {
        res._json = res.json;
        res.json = function json(obj) {
            res._json(obj);
        };
        next();
    });
  
    router.use('', imageRoutes());
    router.get("*", (req, res) => {
        res.status = 404;
        res.json({
            success: false,
            message: "Unknown command, that means you have done something wrong.",
            errorCode: 404,
            result: {},
        });
    });

    return router
}