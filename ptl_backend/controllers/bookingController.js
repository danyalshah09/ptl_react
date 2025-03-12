const Booking = require('../models/Booking');
const createTransporter = require('../config/email');
const createEmailContent = require('../utils/emailTemplate');

exports.createBooking = async (req, res) => {
  try {
    const bookings = Array.isArray(req.body) ? req.body : [req.body];
    const savedBookings = [];

    for (const bookingData of bookings) {
      const booking = new Booking(bookingData);
      const savedBooking = await booking.save();
      savedBookings.push(savedBooking);

      try {
        // Create a new transporter for each email
        const transporter = createTransporter();
        
        // Send confirmation email
        const mailOptions = {
          from: {
            name: 'Passu Tourist Lodge',
            address: process.env.EMAIL_USER
          },
          to: booking.email,
          subject: 'Thank You for choosing Passu Tourist Lodge. Your Hotel Booking Confirmation',
          html: createEmailContent(booking)
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${booking.email}`);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue with the booking process even if email fails
      }
    }
    
    res.status(201).json({
      success: true,
      message: 'Bookings created successfully',
      data: savedBookings
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
};