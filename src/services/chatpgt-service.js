require('dotenv').config();
const {Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({apiKey: process.env.APIKEYOPENAI});
const openai = new OpenAIApi(configuration);

async function GetMessageChatGPT(message) {
  try {
    const response = await openai.createCompletion({
      model: "davinci:ft-bus-it:clara-2023-08-11-04-38-25",
      prompt: message,
      max_tokens: 100,
      temperature: 1,
      stop: "END"
    });
  
    if(response.status == 200 && response.data.choices.length > 0)
      return response.data.choices[0].text;
  
    return "Lo siento ocurrio un problema inténtalo mas tarde.";
  } catch (error) {
    return "Lo siento ocurrio un problema inténtalo mas tarde.";
  }
}

module.exports = {
  GetMessageChatGPT
}