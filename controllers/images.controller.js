const helper = require('../util/responseHelper')
const service = require('../services/image.service')
const messages = require('../config/constants/messages')


exports.createImage = async (req, res, next) => {
    try {
        console.log("create image executed");
        let body = {};
        console.log(req.files)
        if (req?.files.length != 0) {
                body = {
                    name:req?.files[0].originalname,
                    filename: req?.files[0].filename,
                    path: req?.files[0].path
                }
            }
        const response = await service.createImage(body);
        if (response) {
            helper.deliverResponse(res, 200, response, {
                "error_code": messages.IMAGE.CREATED.error_code,
                "error_message": messages.IMAGE.CREATED.error_message
            });
        }
    } catch (error) {
        console.log(error);
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
}


exports.getAllImages = async (req, res, next) => {
    try {
      const data = await service.getImages({isDelete:false});
      if (data) {
        helper.deliverResponse(res, 200, data, {
          "error_code": messages.SUCCESS_RESPONSE.error_code,
          "error_message": messages.SUCCESS_RESPONSE.error_message
        })
      }
    } catch (error) {
      helper.deliverResponse(res, 422, {}, {
        "error_code": messages.SERVER_ERROR.error_code,
        "error_message": messages.SERVER_ERROR.error_message
      })
    }
  }

  exports.SearchImages = async (req, res, next) => {
    try {

      const data = await service.getImages({"name": { "$regex": req.params.name, "$options": "i" } ,isDelete:false});
      if (data) {
        helper.deliverResponse(res, 200, data, {
          "error_code": messages.SUCCESS_RESPONSE.error_code,
          "error_message": messages.SUCCESS_RESPONSE.error_message
        })
      }
    } catch (error) {
      helper.deliverResponse(res, 422, {}, {
        "error_code": messages.SERVER_ERROR.error_code,
        "error_message": messages.SERVER_ERROR.error_message
      })
    }
  }

  exports.deleteImage = async (req, res, next) => {
    try {
        const response = await service.deleteImage({ _id: req.params.id })
        if (response) {
            helper.deliverResponse(res, 200, {}, {
                "error_code": messages.IMAGE.DELETED.error_code,
                "error_message": messages.IMAGE.DELETED.error_message
            })
        }
    } catch (error) {
        helper.deliverResponse(res, 422, {}, {
            "error_code": messages.SERVER_ERROR.error_code,
            "error_message": messages.SERVER_ERROR.error_message
        })
    }
  }
