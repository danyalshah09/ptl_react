// In bookingController.js
exports.createBooking = async (req, res) => {
  try {
    const bookings = Array.isArray(req.body) ? req.body : [req.body];
    const savedBookings = [];

    // Save all bookings to the database
    for (const bookingData of bookings) {
      const booking = new Booking(bookingData);
      const savedBooking = await booking.save();
      savedBookings.push(savedBooking);
    }
    
    // Respond immediately
    res.status(201).json({
      success: true,
      message: 'Bookings created successfully',
      data: savedBookings
    });
    
    // Email sending happens after response is sent
    // Don't wait for this to complete before sending response
    Promise.all(savedBookings.map(booking => {
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
      
      return transporter.sendMail(mailOptions);
    }))
    .then(results => console.log(`${results.length} emails sent successfully`))
    .catch(err => console.error('Error sending emails:', err));
    
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
};