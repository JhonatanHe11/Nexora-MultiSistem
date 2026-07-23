const axios = require('axios');
const sendWhatsAppMessage = async (mensaje) => {

    const url =
    `https://graph.facebook.com/v20.0/${process.env.PHONE_NUMBER_ID}/messages`;

    const data = {
        messaging_product: "whatsapp",
        to: process.env.DESTINATION_NUMBER,
        type: "text",
        text: {
            body: mensaje
        }
    };

    const response = await axios.post(
        url,
        data,
        {
            headers:{
                Authorization:
                `Bearer ${process.env.WHATSAPP_TOKEN}`,
                "Content-Type":"application/json"
            }
        }
    );
    return response.data;
};


module.exports = {
    sendWhatsAppMessage
};