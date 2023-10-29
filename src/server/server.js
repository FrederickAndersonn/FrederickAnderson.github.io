const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

// Configure Nodemailer to send emails using your email service provider
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'isinyajunkmail@gmail.com',
        pass: 'Frederick000$',
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'frederickanderson202002@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});