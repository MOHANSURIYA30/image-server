const db = require("../models/index")

exports.createImage = async (data) => {
    try {
        let res_data = new db.Images(data);
        await res_data.save()
        return res_data;
    } catch (error) {
        throw (error)
    }
}

exports.getImages = async (query, projection = { name:1,path:1 }) => {
    try {
        let data = await db.Images.find(query, projection)
        return data;
    } catch (error) {
        throw (error)
    }
}

exports.getImage = async (query, projection = {}) => {
    try {
        let data = await db.Images.findOne(query, projection)
        return data;
    } catch (error) {
        throw (error)
    }
}

exports.deleteImage = async (query) => {
    try {
        let response = await db.Images.findOneAndUpdate(query, { isDelete:true },{new: true}).exec()
        return response;
    } catch (error) {
        throw (error)
    }
}