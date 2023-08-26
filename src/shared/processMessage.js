const whatsappModel = require('../shared/whatsappmodels')
const whatsappService = require('../services/whatsappService')

async function Process(textUser, number) {
  textUser = textUser.toLowerCase()
  const minTimeToRespose = 1000

  if (
    textUser.includes('hola') ||
    textUser.includes('buenas') ||
    textUser.includes('ola')
  ) {
    const msgGreeting = whatsappModel.MessageText(
      'Saludos! *Soy el asistente de Bus iT*, tu asistente virtual, ¡me complace estar en contacto contigo! 🤖',
      number
    )
    const msgPrivacy = whatsappModel.MessageTextWithUrl(
      'En nuestra *Política de Privacidad*, podrás acceder a detalles acerca de cómo *Bus iT* maneja y utiliza tus datos personales. Queremos que estés informado sobre cómo se gestionan tus informaciones y cómo protegemos tu privacidad: https://www.busit.net/politica-y-privacidad',
      number
    )
    const msgMainMenu = whatsappModel.MessageMainMenu(number)

    await whatsappService.SendMessageWhatsApp(msgGreeting)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgPrivacy)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMainMenu)
  } else if (textUser.includes('¿qué es un chatbot?')) {
    const msgInfo = whatsappModel.MessageText(
      '¡Descubre la maravilla de los chatbots! Con tecnología de inteligencia artificial, nuestros chatbots son asistentes virtuales capaces de interactuar y brindar información en tiempo real, llevando la atención al cliente a un nuevo nivel.',
      number
    )
    const msgMNoreInfo = whatsappModel.MessageText(
      '¡Explora cómo nuestros chatbots pueden transformar tu negocio! Descubre más sobre sus capacidades y cómo pueden mejorar la interacción con tus clientes. ¡Contáctanos para conocer más!',
      number
    )

    const msgUrlContact = whatsappModel.MessageText(
      'https://www.busit.net/',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else if (textUser.includes('casos de uso')) {
    const msgInfo = whatsappModel.MessageText(
      'Sumérgete en el mundo de posibilidades. Desde brindar soporte instantáneo las 24 horas hasta captar clientes potenciales, los chatbots se adaptan a tu negocio como un aliado versátil y eficiente.',
      number
    )
    const msgMoreInfo = whatsappModel.MessageText(
      'Estos son solo algunos ejemplos de lo que nuestros chatbots pueden lograr. Si deseas explorar cómo se adaptan a tu industria y necesidades, ¡estamos aquí para ayudarte! Contáctanos y descubre las posibilidades.',
      number
    )
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)

  } else if (textUser.includes('beneficios')) {
    const msgInfo = whatsappModel.MessageText(
      '¿Imagina tener un equipo de atención al cliente que nunca duerme? Con nuestros chatbots, experimentarás beneficios impresionantes: respuestas rápidas, aumentos en la satisfacción del cliente y reducción de carga de trabajo.',
      number
    )
    const msgMNoreInfo = whatsappModel.MessageText(
      '¿Listo para transformar tu atención al cliente? Nuestros chatbots pueden ser la solución. ¡Aprovecha sus beneficios y brinda una experiencia excepcional a tus clientes! Contáctanos para saber cómo.',
      number
    )
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else if (textUser.includes('herramientas')) {
    const msgInfo = whatsappModel.MessageText(
      'Te proporcionamos las herramientas líderes en el mercado para construir tu chatbot personalizado. Sin necesidad de ser un experto en programación, podrás crear un asistente virtual que represente tu marca a la perfección.',
      number
    )
    const msgMNoreInfo = whatsappModel.MessageText(
      '¿Listo para crear tu propio chatbot? Nuestras herramientas te esperan. Comienza a construir un asistente virtual único que refleje tu marca. Contáctanos y empieza a crear tu chatbot hoy mismo.'
      , number)
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else if (textUser.includes('implementación')) {
    const msgInfo = whatsappModel.MessageText(
      'Nuestro equipo te guiará en cada paso. Desde la planificación hasta el lanzamiento, te asistiremos para que la implementación de tu chatbot sea exitosa, mejorando la interacción con tus clientes desde el primer día.',
      number)
    const msgMNoreInfo = whatsappModel.MessageText(
      '¡Hacer realidad tu chatbot es más fácil de lo que piensas! Permítenos guiarte a través del proceso de implementación exitosa. ¡Contacta con nosotros y comienza a mejorar tu atención al cliente!', 
      number)
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else if (textUser.includes('aprendizaje')) {
    const msgInfo = whatsappModel.MessageText(
      'Los chatbots no solo responden, ¡aprenden! Gracias al aprendizaje automático, se adaptan a las preferencias y necesidades cambiantes de tus usuarios, brindando respuestas cada vez más precisas.', 
      number)
    const msgMNoreInfo = whatsappModel.MessageText(
      'Tus clientes merecen respuestas precisas. Nuestros chatbots aprenden y mejoran constantemente. ¿Listo para ofrecer una atención personalizada? Contáctanos para aprender más.', 
      number)
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else if (textUser.includes('seguridad')) {
    const msgInfo = whatsappModel.MessageText(
      'La privacidad es primordial. Nuestros chatbots están diseñados con protocolos de seguridad avanzados para garantizar que los datos de tus clientes estén protegidos en todo momento.', 
      number)
    const msgMNoreInfo = whatsappModel.MessageText(
      'Proteger los datos de tus clientes es fundamental. Descubre cómo nuestros chatbots están diseñados para garantizar la privacidad. ¿Listo para la tranquilidad? Contáctanos para saber más.', 
      number)
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else if (textUser.includes('ejemplos reales')) {
    const msgInfo = whatsappModel.MessageText(
      'Descubre cómo empresas líderes han transformado sus operaciones con nuestros chatbots. Desde agilizar el proceso de compra hasta ofrecer diagnósticos médicos preliminares, los ejemplos reales hablan por sí mismos.', 
      number)
    const msgMNoreInfo = whatsappModel.MessageText(
      'Los casos de éxito hablan por sí mismos. ¿Listo para ser el siguiente? Contáctanos para explorar cómo nuestros chatbots pueden revolucionar tu negocio.', 
      number)
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else if (textUser.includes('demo interactiva')) {
    const msgInfo = whatsappModel.MessageText(
      ' ¿Te gustaría verlo en acción? Experimenta una demostración interactiva y sorpréndete con cómo un chatbot puede responder a tus preguntas y necesidades en tiempo real.', 
      number)
    const msgMNoreInfo = whatsappModel.MessageText(
      '¿Quieres experimentar un chatbot en acción? ¡Esperamos demostrarte su potencial! Contáctanos para programar una demo interactiva y descubrir todo lo que pueden hacer.', 
      number)
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else if (textUser.includes('precios')) {
    const msgInfo = whatsappModel.MessageText(
      'Ofrecemos planes flexibles para todos los presupuestos. Desde soluciones básicas hasta personalizadas, encontrarás el plan perfecto para llevar la eficiencia de tu negocio al siguiente nivel.', 
      number)
    const msgMNoreInfo = whatsappModel.MessageText(
      'Encuentra el plan perfecto para tu negocio. Contáctanos para obtener más detalles sobre nuestros planes y precios, y descubre cómo un chatbot puede ser una inversión inteligente.', 
      number)
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else if (textUser.includes('contacto')) {
    const msgInfo = whatsappModel.MessageText(
      '¿Dudas? ¡Estamos aquí para ayudarte! Contáctanos para un asesoramiento personalizado y descubre cómo nuestra tecnología puede elevar tu negocio hacia el éxito.', 
      number)
    const msgMNoreInfo = whatsappModel.MessageText(
      '¡Estamos aquí para ti! ¿Preguntas, dudas o deseas saber más? Contáctanos y te proporcionaremos la información que necesitas para llevar tu negocio al siguiente nivel con nuestros chatbots.', 
      number)
    const msgUrlContact = whatsappModel.MessageTextWithUrl(
      'https://www.busit.net/contacto',
      number
    )

    await whatsappService.SendMessageWhatsApp(msgInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMNoreInfo)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgUrlContact)
  } else {
    const msg = whatsappModel.MessageText(
      '¡Hola! Parece que tu pregunta no coincide exactamente con las opciones que ofrecemos en el menú. Para brindarte la información más relevante, te invito a revisar las opciones del menú que tenemos. Si ninguna de las opciones del menú aborda tu pregunta, no dudes en escribirnos de nuevo con más detalles y estaremos encantados de ayudarte. 😊' ,
      number
    )
    const msgMainMenu = whatsappModel.MessageMainMenu(number)

    await whatsappService.SendMessageWhatsApp(msg)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMainMenu)
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = {
  Process,
}
