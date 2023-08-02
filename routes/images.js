const express = require('express');
const router = express.Router();
const controller = require('../controllers/images.controller')
const upload = require("../util/upload")

module.exports = () => {
    router.post('/create-image', upload.array('file',1), controller.createImage);
    router.get('/get-images',controller.getAllImages);
    router.get('/search-image/:name',controller.SearchImages);
    router.delete('/delete-image/:id',controller.deleteImage);

    return router;
}
