require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {
    sendWhatsAppMessage
} = require('./whatsapp');

const app = express();
const VERIFY_TOKEN = "NexoraWebhook123";
app.use(cors());
app.use(express.json());

app.post('/api/solicitud', async (req, res) => {

    try {
        const {
            nombre,
            telefono,
            descripcion
        } = req.body;

        const mensaje =
            `
*Nueva solicitud de servicio*

👤 Nombre:
${nombre}

📱 WhatsApp cliente:
${telefono}

📝 Servicio:
${descripcion}
`;

        const resultado =
            await sendWhatsAppMessage(mensaje);
        res.json({
            ok: true,
            mensaje: "Mensaje enviado",
            resultado
        });
    } catch (error) {
        console.error(
            error.response?.data || error.message
        );
        res.status(500).json({
            ok: false,
            error: "No se pudo enviar WhatsApp"
        });

    }

});

app.get('/webhook', (req, res) => {

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        return res.status(200).send(challenge);
    }

    return res.sendStatus(403);

});

app.post('/webhook', (req, res) => {
    console.log("Webhook recibido");
    console.log(req.body);
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});