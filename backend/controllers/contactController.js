const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const { adminNotificationEmail, userConfirmationEmail } = require('../utils/emailTemplates');

exports.submitContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();

        const { name, email, phone, company, message } = req.body;

        // Nodemailer configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email 1: Notification to Admin
        const adminMailOptions = {
            from: `"Codemation CRM" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Inquiry — ${name} | Codemation`,
            html: adminNotificationEmail({ name, email, phone, company, message })
        };

        // Email 2: Confirmation to User
        const userMailOptions = {
            from: `"Codemation" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank You for Reaching Out — Codemation',
            html: userConfirmationEmail({ name, phone, company, message })
        };

        transporter.sendMail(adminMailOptions, function (error, info) {
            if (error) {
                console.log("Admin email error: ", error);
            } else {
                console.log('Admin email sent: ' + info.response);
            }
        });

        transporter.sendMail(userMailOptions, function (error, info) {
            if (error) {
                console.log("User email error: ", error);
            } else {
                console.log('User email sent: ' + info.response);
            }
        });

        res.status(201).json({ message: 'Contact submitted successfully', contact });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
