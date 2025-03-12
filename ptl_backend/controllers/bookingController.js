const Booking = require('../models/Booking');
const createTransporter = require('../config/email');
const createEmailContent = require('../utils/emailTemplate');

exports.createBooking = async (req, res) => {
  try {
    const bookings = Array.isArray(req.body) ? req.body : [req.body];
    const savedBookings = [];

    // First, save all bookings to the database
    for (const bookingData of bookings) {
      const booking = new Booking(bookingData);
      const savedBooking = await booking.save();
      savedBookings.push(savedBooking);
    }
    
    // Respond to the client immediately after saving bookings
    res.status(201).json({
      success: true,
      message: 'Bookings created successfully',
      data: savedBookings
    });
    
    // Then attempt to send emails asynchronously (after response is sent)
    // This won't block the function from returning
    for (const booking of savedBookings) {
      try {
        const transporter = createTransporter();
        
        const mailOptions = {
          from: {
            name: 'Passu Tourist Lodge',
            address: process.env.EMAIL_USER
          },
          to: booking.email,
          subject: 'Thank You for choosing Passu Tourist Lodge. Your Hotel Booking Confirmation',
          html: createEmailContent(booking)
        };

        transporter.sendMail(mailOptions)
          .then(() => console.log(`Email sent to ${booking.email}`))
          .catch(emailError => console.error('Error sending email:', emailError));
      } catch (emailError) {
        console.error('Error setting up email:', emailError);
      }
    }
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
};