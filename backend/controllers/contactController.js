const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();

        // Nodemailer configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: 'Welcome to Codemation - We received your inquiry!',
            text: `Hi ${req.body.name},\n\nThank you for reaching out to Codemation. We have received your message and will get back to you shortly.\n\nBest regards,\nCodemation Team`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("Email error: ", error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json({ message: 'Contact submitted successfully', contact });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({}).sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
