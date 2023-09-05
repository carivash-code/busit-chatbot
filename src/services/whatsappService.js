const fs = require("fs");
require('dotenv').config();
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const axios = require("axios");
async function SendMessageWhatsApp(data){
    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer "+process.env.FB_TOKEN
        }
    };

    getDataAxios(options, data)

}

async function getDataAxios(options, data){     
    try {
    const req = await axios.post(
        'https://graph.facebook.com/v17.0/103023949557485/messages',
        data,
        options
        )
    return req
    } catch(e) {
        myConsole.log(e.response.data.error.error_data.details)
        console.log('Error in data:', e.response.data.error.error_data.details)
        return e
    }
}

module.exports = {
    SendMessageWhatsApp
};