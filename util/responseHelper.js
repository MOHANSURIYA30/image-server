const constants = require('../config/constants')
const MESSAGES = constants.messages;

exports.deliverResponse = (res, httpStatus = 200, data, msg) => {
    if (httpStatus === 200) {
        const response = {
            error_code: MESSAGES.SUCCESS_RESPONSE.error_code,
            message: MESSAGES.SUCCESS_RESPONSE.error_message
        };
        if (data) response.data = data;
        if (msg) {
            response.error_code = msg.error_code;
            response.message = msg.error_message;
        }
        res.status(httpStatus).json(response)
    } else {
        const errorResponse = {
            result: {},
            error_code: MESSAGES.SERVER_ERROR.error_code,
            message: MESSAGES.SERVER_ERROR.error_message
        };
        errorResponse.data = data;
        if (msg) {
            errorResponse.error_code = msg.error_code;
            errorResponse.message = msg.error_message;
        }
        res.status(httpStatus).json(errorResponse)
    }
}
