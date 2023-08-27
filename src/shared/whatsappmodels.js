const cart = [];

function MessageMainMenu(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "list",
            "body": {
                "text": '*¿En qué podría ayudarte?*'
            },
            "action": {
                "button": "Ver Opciones",
                "sections": [
                    {
                        "title": "Ver opciones",
                        "rows": [
                            {
                                "id": "opt-1",
                                "title": "¿Qué es un Chatbot?"
                            },
                            {
                                "id": "opt-2",
                                "title": "Casos de Uso"
                            },
                            {
                                "id": "opt-3",
                                "title": "Beneficios"
                            },
                            {
                                "id": "opt-4",
                                "title": "Herramientas"
                            },
                            {
                                "id": "opt-5",
                                "title": "Aprendizaje"
                            },
                            {
                                "id": "opt-6",
                                "title": "Seguridad "
                            },
                            {
                                "id": "opt-7",
                                "title": "Ejemplos Reales"
                            },
                            {
                                "id": "opt-8",
                                "title": "Demo Interactiva"
                            },
                            {
                                "id": "opt-9",
                                "title": "Precios"
                            },
                            {
                                "id": "opt-10",
                                "title": "Contacto"
                            },
                        ]
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageMainNewMenu(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "list",
            "body": {
                "text": '*¿Qué otro tema te gustaría ver?*'
            },
            "action": {
                "button": "Ver Opciones",
                "sections": [
                    {
                        "title": "Ver opciones",
                        "rows": [
                            {
                                "id": "opt-1",
                                "title": "¿Qué es un Chatbot?"
                            },
                            {
                                "id": "opt-2",
                                "title": "Casos de Uso"
                            },
                            {
                                "id": "opt-3",
                                "title": "Beneficios"
                            },
                            {
                                "id": "opt-4",
                                "title": "Herramientas"
                            },
                            {
                                "id": "opt-5",
                                "title": "Aprendizaje"
                            },
                            {
                                "id": "opt-6",
                                "title": "Seguridad "
                            },
                            {
                                "id": "opt-7",
                                "title": "Ejemplos Reales"
                            },
                            {
                                "id": "opt-8",
                                "title": "Demo Interactiva"
                            },
                            {
                                "id": "opt-9",
                                "title": "Precios"
                            },
                            {
                                "id": "opt-10",
                                "title": "Contacto"
                            },
                        ]
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageImage(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",  
        "image": {
            "link": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6bh8DF6sxElhPGhgi_dYq1vG2ixzXawQWrXerBjivmsY2CGi9dVcDQWIW-WjGA9pngawr9dDYGjfMTSL6R6Cl4BZ01Nc9OHfXUwtdWaavTUSF6m2cyzynRi_2DklY9qutQTLFTAYIS2OQawVYwNmZQ6EnxzhDS2XeFyfKxI3rHmfzUmDpyqVTJuJYnCU3/s1600/WhatsApp%20Image%202023-08-02%20at%2014.52.03.jpeg",
        }
    });
    return data;
}

function MessageContact(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "contacts",
        "contacts": [
            {
                "addresses": [
                    {
                        "street": "",
                        "city": "",
                        "state": "",
                        "zip": "",
                        "country": "México",
                        "country_code": "+52",
                        "type": "WORK"
                    }
                ],
                "birthday": "",
                "emails": [
                    {
                        "email": "",
                        "type": "WORK"
                    }
                ],
                "name": {
                    "formatted_name": "Bus iT",
                    "first_name": "Consultora",
                    "last_name": "Bus-iT",
                    "middle_name": "",
                    "suffix": "",
                    "prefix": ""
                },
                "org": {
                    "company": "",
                    "department": "",
                    "title": ""
                },
                "phones": [
                    {
                        "phone": "555555555",
                        "wa_id": "5255555555",
                        "type": "WORK"
                    }
                ],
                "urls": [
                    {
                        "url": "",
                        "type": "WORK"
                    }
                ]
            }
        ]
    });
    return data;
}

function MessageText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}

function MessageTextWithUrl(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": false,
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}

function GetMessageLocation(address, number){
    cart.push({direccion: address});
    console.log('ADDRESS----', direccion);
}

function MessageValidation(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Te gustaría conocer más?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-yes",
                            "title": "Si"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-cancel",
                            "title": "Deseo saber más..."
                        }
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageServiceMenu(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "header": {
                "type":"text",
                "text": "Servicios"
            },
            "body": {
                "text": "Escoje los servicios que deseés informes"
            },
            "action": {
                "sections": [
                    {
                        "title": "Software",
                        "rows": [
                            {
                                "id": "opt-1",
                                "title": "Chatbot"
                            },
                            {
                                "id": "opt-2",
                                "title": "Chatbot con IA"
                            },
                            {
                                "id": "opt-3",
                                "title": "Página web"
                            },
                            {
                                "id": "opt-4",
                                "title": "Web App"
                            },
                            {
                                "id": "opt-5",
                                "title": "Tótems"
                            },
                            {
                                "id": "opt-6",
                                "title": "VR"
                            },
                        ]
                    },
                    {
                        "title": "Hardware",
                        "rows": [
                            {
                                "id": "opt-1",
                                "title": "Videovigilancia"
                            },
                            {
                                "id": "opt-2",
                                "title": "Redes"
                            },
                        ]
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageLocationConfirmation(number){      
    const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type": "interactive",  
            "interactive": {
                "type": "button",
                "body": {
                    "text": "¡Buena noticia, tenemos cobertura!"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "option-start",
                                "title": "Comencemos"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "option-cancel",
                                "title": "Cancelar Pedido"
                            }
                        }
                    ]
                }
            }     
    });
     return data;
}

function MessagePizzaSizeOneIngredient(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "¿De qué tamaño quieres tu pizza 🍕?"
            },
            "footer": {
                "text": "Escoje el tamaño ideal para tu hambre de pizza! 🤩"
            },
            "action": {
                "button": "Ver tamaños",
                "sections": [
                    {
                        "title": "Tamaños",
                        "rows": [
                            {
                                "id": "pz-small",
                                "title": "Chica sencilla",
                                "description": "$130"
                            },
                            {
                                "id": "pz-medium",
                                "title": "Mediana sencilla",
                                "description": "$180"
                            },
                            {
                                "id": "pz-big",
                                "title": "Grande sencilla",
                                "description": "$240"
                            },
                            {
                                "id": "pz-family",
                                "title": "Familiar sencilla",
                                "description": "$280"
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaSizeSpecialIngredients(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "*2* ¿De qué tamaño quieres tu pizza 🍕?"
            },
            "footer": {
                "text": "Escoje el tamaño ideal para tu hambre de pizza! 🤩"
            },
            "action": {
                "button": "Ver tamaños",
                "sections": [
                    {
                        "title": "Tamaños",
                        "rows": [
                            {
                                "id": "pz-small",
                                "title": "Chica especial",
                                "description": "$165"
                            },
                            {
                                "id": "pz-medium",
                                "title": "Mediana especial",
                                "description": "$210"
                            },
                            {
                                "id": "pz-big",
                                "title": "Grande especial",
                                "description": "$280"
                            },
                            {
                                "id": "pz-family",
                                "title": "Familiar especial",
                                "description": "$345"
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaIngredients(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "*1* ¿De cuántos ingredientes quieres tu pizza 🍕?"
            },
            "footer": {
                "text": "Escoje la cantidad de ingredientes para tu pizza! 🍍🥩🥓"
            },
            "action": {
                "button": "Ingredientes",
                "sections": [
                    {
                        "title": "Ingredientes",
                        "rows": [
                            {
                                "id": "one-ingr",
                                "title": "1 ingrediente",
                            },
                            {
                                "id": "special-ingr",
                                "title": "Más de 2 ingredientes",
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaOneIngredient(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "Escoje tu ingrediente"
            },
            "footer": {
                "text": "Lista de ingredientes"
            },
            "action": {
                "button": "Ingredientes",
                "sections": [
                    {
                        "title": "Sabor de la Pizza",
                        "rows": [
                            {
                                "id": "in-chicken",
                                "title": "Pollo",
                            },
                            {
                                "id": "in-sausage",
                                "title": "Salchicha",
                            },
                            {
                                "id": "in-mashroom",
                                "title": "Champiñón",
                            },
                            {
                                "id": "in-tuna",
                                "title": "Atún",
                            },
                            {
                                "id": "in-ham",
                                "title": "Jamón",
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}
function MessagePizzaOneIngredient2(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "product_list",
            "header": {
                "type": "text",
                "text":"Pizzas"
            },  
            "body": {
                "text": "Escoje tu ingrediente"
            },
            "action": {
                "catalog_id":"6133132260146282",
                "sections": [
                    {
                        "title": "Primer Pizza",
                        "product_items": [
                            {
                                "product_retailer_id": "3",
                            }
                        ]
                    },
                    {
                        "title": "Segunda Pizza",
                        "product_items": [
                            {
                                "product_retailer_id": "3",
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaOneIngredientSecond(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "header": {
                "type":"text",
                "text": "Segunda pizza"
            },
            "body": {
                "text": "Escoje tu ingrediente"
            },
            "footer": {
                "text": "Lista de ingredientes"
            },
            "action": {
                "button": "Ingredientes",
                "sections": [
                    {
                        "title": "Ingredientes",
                        "rows": [
                            {
                                "id": "in-chicken",
                                "title": "Pollo",
                            },
                            {
                                "id": "in-sausage",
                                "title": "Salchicha",
                            },
                            {
                                "id": "in-mashroom",
                                "title": "Champiñón",
                            },
                            {
                                "id": "in-tuna",
                                "title": "Atún",
                            },
                            {
                                "id": "in-ham",
                                "title": "Jamón",
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessagePizzaSpecialIngredients(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "*3* Escoje tu ingrediente especial"
            },
            "footer": {
                "text": "Ingredientes"
            },
            "action": {
                "button": "Ingredientes",
                "sections": [
                    {
                        "title": "Ingredientes",
                        "rows": [
                            {
                                "id": "in-haw-k",
                                "title": "Hawaiana kids",
                                "description":"jamón, piña, cereza"
                            },
                            {
                                "id": "in-haw",
                                "title": "Hawaiana",
                                "description":"jamón, piña, tocino"
                            },
                            {
                                "id": "in-vege",
                                "title": "Vegetariana",
                                "description":"champiñones, cebolla, pimiento verde y aceitunas"
                            },
                            {
                                "id": "in-pastor",
                                "title": "Pastor",
                                "description":"carne al pastor, piña, chipotle, o jalapeño"
                            },
                            {
                                "id": "in-clas",
                                "title": "Clásica",
                                "description":"peperoni, champiñones y pimiento verde"
                            },
                            {
                                "id": "in-pira",
                                "title": "Pirata",
                                "description":"atún, cebolla, chipotle y aceitunas"
                            },
                            {
                                "id": "in-cub",
                                "title": "Cubana",
                                "description":"pierna, atún, tocino, jalapeños, jitomate y aguacate"
                            },
                            {
                                "id": "in-plan-esp",
                                "title": "Planeta especial",
                                "description":"pierna, pollo, aguacate y elote"
                            },
                            {
                                "id": "in-camp",
                                "title": "Campestre",
                                "description":"champiñon, pollo, salami, elote y chipotle"
                            },
                            {
                                "id": "in-mafi",
                                "title": "Mafiosa",
                                "description":"champiñones, jalapeños, salami y tocino"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessageOptionsDelivery(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "button",
            "header": {
                "type": "text",
                "text": "¡Excelente decisión!"
            },
            "body": {
                "text": "Antes de continuar confirma tu pedido"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-yes",
                            "title": "✅ Confirmar pedido"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-cancel",
                            "title": "⛔ Cancelar pedido"
                        }
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageLocation(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
        "latitude": "-12.067158831865067",
        "longitude": "-77.03377940839486",
        "name": "Estadio Nacional del Perú",
        "address": "C. José Díaz s/n, Cercado de Lima 15046"
    }
        
    });
    return data;
}

module.exports = {
MessageText,
MessageMainMenu,
MessageLocation,
MessagePizzaSizeOneIngredient,
MessagePizzaSizeSpecialIngredients,
MessageContact,
MessagePizzaIngredients,
MessagePizzaOneIngredient,
MessagePizzaSpecialIngredients,
MessageOptionsDelivery,
MessageImage,
GetMessageLocation,
MessageValidation,
MessageServiceMenu,
MessageLocationConfirmation,
MessagePizzaOneIngredientSecond,
MessagePizzaOneIngredient2,
MessageTextWithUrl,
MessageMainNewMenu,
cart
};