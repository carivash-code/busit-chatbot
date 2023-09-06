const cart = [];
const dataReservation = [];
const userData = [];

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
                        "title": "Acciones",
                        "rows": [
                            {
                                "id": "opt-1",
                                "title": "Hacer reservación"
                            },
                            {
                                "id": "opt-2",
                                "title": "Consulta reservación"
                            },
                            {
                                "id": "opt-3",
                                "title": "Llamar a recepción"
                            },
                            {
                                "id": "opt-4",
                                "title": "Servicio a la habitación"
                            },
                        ]
                    },
                    {
                        "title": "Ayuda",
                        "rows": [
                            {
                                "id": "opt-1-1",
                                "title": "Ayuda sobre:",
                                "description": "¿Cómo hacer una reserva?"
                            },
                            {
                                "id": "opt-1-2",
                                "title": "Ayuda sobre:",
                                "description": "¿Cómo consultar una reserva?"
                            },
                            {
                                "id": "opt-1-3",
                                "title": "Ayuda sobre:",
                                "description": "¿Qué es check-in?"
                            },
                            {
                                "id": "opt-1-4",
                                "title": "Ayuda sobre:",
                                "description": "¿Qué es check-out?"
                            },
                            {
                                "id": "opt-1-5",
                                "title": "Ayuda sobre:",
                                "description": "¿Cómo hacer check-in?"
                            },
                            {
                                "id": "opt-1-6",
                                "title": "Ayuda sobre:",
                                "description": "¿Cómo hacer check-out?"
                            },
                            // {
                            //     "id": "opt-1-7",
                            //     "title": "Información",
                            //     "description": "Costos y métodos de pagos"
                            // },
                            // {
                            //     "id": "opt-1-8",
                            //     "title": "Información",
                            //     "description": "Horarios"
                            // },
                            // {
                            //     "id": "opt-1-9",
                            //     "title": "Información",
                            //     "description": "Información de habitación"
                            // },
                        ]
                    },
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
                "text": '*¿En qué más podría ayudarte?*'
            },
            "action": {
                "button": "Ver Opciones",
                "sections": [
                    {
                        "title": "Acciones",
                        "rows": [
                            {
                                "id": "opt-1",
                                "title": "Hacer reservación"
                            },
                            {
                                "id": "opt-2",
                                "title": "Consulta reservación"
                            },
                            {
                                "id": "opt-3",
                                "title": "Llamar a recepción"
                            },
                            {
                                "id": "opt-4",
                                "title": "Servicio a la habitación"
                            },
                        ]
                    },
                    {
                        "title": "Ayuda",
                        "rows": [
                            {
                                "id": "opt-1-1",
                                "title": "Ayuda sobre:",
                                "description": "¿Cómo hacer una reserva?"
                            },
                            {
                                "id": "opt-1-2",
                                "title": "Ayuda sobre:",
                                "description": "¿Cómo consultar una reserva?"
                            },
                            {
                                "id": "opt-1-3",
                                "title": "Ayuda sobre:",
                                "description": "¿Qué es check-in?"
                            },
                            {
                                "id": "opt-1-4",
                                "title": "Ayuda sobre:",
                                "description": "¿Qué es check-out?"
                            },
                            {
                                "id": "opt-1-5",
                                "title": "Ayuda sobre:",
                                "description": "¿Cómo hacer check-in?"
                            },
                            {
                                "id": "opt-1-6",
                                "title": "Ayuda sobre:",
                                "description": "¿Cómo hacer check-out?"
                            },
                            // {
                            //     "id": "opt-1-7",
                            //     "title": "Información",
                            //     "description": "Costos y métodos de pagos"
                            // },
                            // {
                            //     "id": "opt-1-8",
                            //     "title": "Información",
                            //     "description": "Horarios"
                            // },
                            // {
                            //     "id": "opt-1-9",
                            //     "title": "Información",
                            //     "description": "Información de habitación"
                            // },
                        ]
                    },
                ]
            }
        }     
    });
    return data;
}

function MessageReservationDaysCheckIn(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "list",
            "body": {
                "text": '*Check-in*'
            },
            "action": {
                "button": "Check-in",
                "sections": [
                    {
                        "title": "Reservación",
                        "rows": [
                            {
                                "id": "opt-2",
                                "title": "Consulta de reservación"
                            },
                            {
                                "id": "opt-100",
                                "title": "Otra fecha"
                            }
                        ]
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageReservatioAdultsGuests(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "list",
            "body": {
                "text": '*Huéspedes*'
            },
            "action": {
                "button": "Huéspedes",
                "sections": [
                    {
                        "title": "Adultos",
                        "rows": [
                            {
                                "id": "opt-1",
                                "title": "1"
                            },
                            {
                                "id": "opt-2",
                                "title": "2"
                            },
                            {
                                "id": "opt-3",
                                "title": "3"
                            },
                            {
                                "id": "opt-4",
                                "title": "4"
                            },
                            {
                                "id": "opt-5",
                                "title": "Más de 4"
                            },
                        ]
                    }
                ]
            }
        }     
    });
    return data;
}

function MessageReservatioChildGuests(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",  
        "interactive": {
            "type": "list",
            "body": {
                "text": '*Huéspedes*'
            },
            "action": {
                "button": "Huéspedes",
                "sections": [
                    {
                        "title": "Menores",
                        "rows": [
                            {
                                "id": "opt-1",
                                "title": "1"
                            },
                            {
                                "id": "opt-2",
                                "title": "2"
                            },
                            {
                                "id": "opt-3",
                                "title": "3"
                            },
                            {
                                "id": "opt-4",
                                "title": "4"
                            },
                            {
                                "id": "opt-5",
                                "title": "Más de 4"
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

function MessageReservationText(textResponse){
    dataReservation.push(textResponse)
}

function MessageTemplate(number, checkIn, checkOut, name, email, roomGuests) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "template",
        "template": {
            "name": "reservation",
            "language": {
                "code": "es_MX"
            },
            "components": [
                {
                    "type":"body",
                    "parameters": [
                        {
                            "type": "text",
                            "text": checkIn
                        },
                        {
                            "type": "text",
                            "text": checkOut
                        },
                        {
                            "type": "text",
                            "text": name
                        },
                        {
                            "type": "text",
                            "text": email
                        },
                        {
                            "type": "text",
                            "text": roomGuests
                        },
                    ]
                }
            ]
        },
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
MessageReservationText,
MessageTemplate,
MessageReservatioAdultsGuests,
MessageReservatioChildGuests,
cart,
dataReservation,
userData
};