const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");
const chatGPTService =  require("../services/chatpgt-service")

async function Process(textUser, number){
    console.log('textUser', textUser)
    textUser = typeof textUser == 'string' ? textUser.toLowerCase() : textUser;
    let models = [];
    let isAIActivated = false;


    if(!isAIActivated){
        if(textUser.includes("out of service")){
            let model = whatsappModel.MessageText(
                "Lamentamos mucho el inconveniente 🙂\n"+
                "Nuestro horario de atención es todos los días de 9:00 hrs a 22:00 hrs.\n"+
                "Aplican excepciones en algunos días festivos."
            , number);
            models.push(model);
        }
        else if(typeof textUser === 'object' ) {
            const data = await textUser;
            const tiempo = await data.duration.text.replace('hour','hora');
            const rangeLimit = 60000;
    
            const limiteEntrega = await data.distance.value > rangeLimit ? 
            '*Estás fuera de nuestro rango de entrega* ☹, lo sentimos mucho pero no podemos tomar tu pedido' : 
            '*Estás dentro de nuestro rango de entrega* 😊';
    
            let model = whatsappModel.MessageText(
                "Distancia del negocio a tu dirección es de "+ await data.distance.text +"\n"+
                "Y tardaríamos en llegar "+ tiempo +" aproximadamente.\n"+
                limiteEntrega
                , number);
                models.push(model);
    
            if(await data.distance.value < rangeLimit){             
                const model = whatsappModel.MessageLocationConfirmation(number);
            
                models.push(model);
            }
    
        }
        else if(textUser.includes("hola") ||
        textUser.includes("buenas") ||
        textUser.includes("ola")
        ){
            const modelBuy = whatsappModel.MessageMainMenu(text, number);
    
            models.push(modelBuy);
        }
        else if(textUser.includes('servicios')) {
            const model = whatsappModel.MessageServiceMenu(number);
            models.push(model);
        }
        else if(textUser.includes('realizar pedido')) {
            let model = whatsappModel.MessageText("Empecemos con tu ubicación.\nPuedes mandar *manualmente tu dirección, empezando con Calle, Cerrada, Privada o Avenida* o *compartir tu ubicación.* 📍", number);
            models.push(model);
        }
        else if(textUser.includes('calle') ||
        textUser.includes('cerrada') ||
        textUser.includes('privada') ||
        textUser.includes('avenida')){
            const model = whatsappModel.MessageLocationConfirmation(number);
            models.push(model);
        }
        else if(textUser.includes('contacto directo')) {
           const model = whatsappModel.MessageContact(number);
           models.push(model);
        }
        else if(textUser.includes("chatbot") ||
        textUser.includes("chatbot con ia") ||
        textUser.includes("página web") ||
        textUser.includes("web app") || 
        textUser.includes("tótems") ||
        textUser.includes("vr") ||
        textUser.includes("videovigilancia") ||
        textUser.includes("redes")){
            const modelConfirmation = whatsappModel.MessageOptionsDelivery(number);
            models.push(modelConfirmation);
        }
        else if(textUser.includes('hablar con clara')) {
            isAIActivated = true;
        }
        else{
            const model = whatsappModel.MessageText("Lo siento no entendí tu mensaje respecto a *"+textUser+"*\n si gustas hablar con nuestra agente virtual escribe *hablar con Clara*", number);
            models.push(model);
        }
    } else {
        if(textUser.includes('regresar al menú')) {
            isAIActivated = false;
        }
        const resultChatGPT = await chatGPTService.GetMessageChatGPT(textUser);
    
        if(resultChatGPT != null) {
            let model = whatsappModel.MessageText(resultChatGPT, number);
            models.push(model);
        } else {
            let model = whatsappModel.MessageText("Lo siento algo salió mal, inténtalo más tarde", number);
            models.push(model);
        }
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    Process
};