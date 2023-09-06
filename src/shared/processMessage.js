const whatsappModel = require('../shared/whatsappmodels')
const whatsappService = require('../services/whatsappService')

async function Process(textUser, number) {
  textUser = textUser.toLowerCase()
  const minTimeToRespose = 1500

  if (
    textUser.includes('hola') ||
    textUser.includes('buenas') ||
    textUser.includes('ola')
  ) {
    const msgGreeting = whatsappModel.MessageText(
      'Saludos! *Soy el asistente virtual de Hotel Bahía 🏨*, ¡me complace estar en contacto contigo! 🤖',
      number
    )
    const msgPrivacy = whatsappModel.MessageTextWithUrl(
      'En nuestra *Política de Privacidad*, podrás acceder a detalles acerca de cómo *Hotel Bahía* maneja y utiliza tus datos personales. Queremos que estés informado sobre cómo se gestionan tus informaciones y cómo protegemos tu privacidad: https://www.busit.net/politica-y-privacidad',
      number
    )
    const msgMainMenu = whatsappModel.MessageMainMenu(number)

    await whatsappService.SendMessageWhatsApp(msgGreeting)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgPrivacy)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgMainMenu)
  } else if (textUser.includes('hacer una reservación')) {
    const msg = whatsappModel.MessageText(
      '!Genial!, empecemos a hacer tu reservación, te solicitaré algunos datos para poder registrar tu estandía... ',
      number
    )

    const msgCheckIn = whatsappModel.MessageText(
      'Ingresa la fecha de tu check-in, ejemplo *04 Sep 2023*:',
      number
    )

    whatsappModel.MessageReservationText({
      isCheckIn: true,
      checkIn: true,
      checkOut: true,
      name: false,
      email: false,
      guestsA: false,
      summaryReservation: false,
    })

    await whatsappService.SendMessageWhatsApp(msg)
    await wait(minTimeToRespose)
    await whatsappService.SendMessageWhatsApp(msgCheckIn)
  } else {
    if (
      whatsappModel.dataReservation[whatsappModel.dataReservation.length - 1]
        .isCheckIn
    ) {
      const { checkOut, name, email, summaryReservation, guestsA, guestsCh } =
        whatsappModel.dataReservation[whatsappModel.dataReservation.length - 1]
      if (checkOut) {
        const msgCheckOut = whatsappModel.MessageText(
          'Ingresa la fecha de tu check-out, ejemplo *10 Sep 2023*:',
          number
        )
        whatsappModel.userData.push({ checkIn: textUser })

        whatsappModel.MessageReservationText({
          isCheckIn: true,
          checkIn: false,
          checkOut: false,
          name: true,
          email: false,
          guestsA: false,
          guestsCh: false,
          summaryReservation: false,
        })

        await whatsappService.SendMessageWhatsApp(msgCheckOut)
      } else if (name) {
        const msgCheckName = whatsappModel.MessageText(
          'Ingresa tu nombre con el que reservarás el cuarto:',
          number
        )
        whatsappModel.userData.push({ checkOut: textUser })

        whatsappModel.MessageReservationText({
          isCheckIn: true,
          checkIn: false,
          checkOut: false,
          name: false,
          email: true,
          guestsA: false,
          guestsCh: false,
          summaryReservation: false,
        })

        await whatsappService.SendMessageWhatsApp(msgCheckName)
      } else if (email) {
        const msgCheckEmail = whatsappModel.MessageText(
          'Ingresa tu correo con el que reservarás el cuarto:',
          number
        )

        whatsappModel.userData.push({ name: textUser })

        whatsappModel.MessageReservationText({
          isCheckIn: true,
          checkIn: false,
          checkOut: false,
          name: false,
          email: false,
          guestsA: true,
          guestsCh: false,
          summaryReservation: true,
        })

        await whatsappService.SendMessageWhatsApp(msgCheckEmail)
      }  else if (guestsA) {
        const msgCheckguestsA = whatsappModel.MessageText(
          'Ingresa cuantos adultos serán para la habitación, ejemplo *2*:',
          number
        )

        whatsappModel.userData.push({ email: textUser })

        whatsappModel.MessageReservationText({
          isCheckIn: true,
          checkIn: false,
          checkOut: false,
          name: false,
          email: false,
          guestsA: false,
          guestsCh: true,
          summaryReservation: true,
        })

        await whatsappService.SendMessageWhatsApp(msgCheckguestsA)
      }  else if (guestsCh) {
        const msgCheckguestsCh = whatsappModel.MessageText(
          'Ingresa cuantos menores de edad serán para la habitación, ejemplo *0*:',
          number
        )

        whatsappModel.userData.push({ guestsA: textUser })

        whatsappModel.MessageReservationText({
          isCheckIn: true,
          checkIn: false,
          checkOut: false,
          name: false,
          email: false,
          guestsA: false,
          guestsCh: false,
          summaryReservation: true,
        })

        await whatsappService.SendMessageWhatsApp(msgCheckguestsCh)
      } 
      else if (summaryReservation) {
        whatsappModel.userData.push({ guestsCh: textUser })

        const roomIn = whatsappModel.userData[0].checkIn
        const roomOut = whatsappModel.userData[1].checkOut
        const roomName = whatsappModel.userData[2].name.toUpperCase()
        const roomEmail = whatsappModel.userData[3].email
        const roomGuests = Number(whatsappModel.userData[4].guestsA) + Number(whatsappModel.userData[5].guestsCh)

        const msgCheckSummary = whatsappModel.MessageText(
          'Estamos generando tu reservación en breve te llegará el mensaje de confirmación.',
          number
        )

        const msgCheckInS = whatsappModel.MessageTemplate(
          number,
          roomName,
          roomIn,
          roomOut,
          roomEmail,
          roomGuests
        )

        whatsappModel.MessageReservationText({
          isCheckIn: false,
          checkIn: false,
          checkOut: false,
          name: false,
          email: false,
          guestsA: false,
          guestsCh: false,
          summaryReservation: false,
        })

        await whatsappService.SendMessageWhatsApp(msgCheckSummary)
        await wait(minTimeToRespose)
        await whatsappService.SendMessageWhatsApp(msgCheckInS)
      }
    } else {
      const msg = whatsappModel.MessageText(
        '¡Hola! Parece que tu pregunta no coincide exactamente con las opciones que ofrecemos en el menú. Para brindarte la información más relevante, te invito a revisar las opciones del menú que tenemos. Si ninguna de las opciones del menú aborda tu pregunta, no dudes en escribirnos de nuevo con más detalles y estaremos encantados de ayudarte. 😊',
        number
      )
      const msgMainMenu = whatsappModel.MessageMainNewMenu(number)

      await whatsappService.SendMessageWhatsApp(msg)
      await wait(minTimeToRespose)
      await whatsappService.SendMessageWhatsApp(msgMainMenu)
    }
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = {
  Process,
}
