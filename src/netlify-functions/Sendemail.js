// netlify-functions/sendEmail.js
const nodemailer = require('nodemailer');

exports.handler = async(event, context) => {
    try {
        // Parse the form data sent by the client
        const { name, email, subject, message } = JSON.parse(event.body);

        // Configure the transporter for your email service
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Replace with your email service provider
            auth: {
                user: 'isinyajunkmail@gmail.com', // Your email address
                pass: 'Frederick000$', // Your email password
            },
        });

        // Email data
        const mailOptions = {
            from: email,
            to: 'frederickanderson202002@gmail.com', // Recipient's email address
            subject: subject,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error sending email' }),
        };
    }
};