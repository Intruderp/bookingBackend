const Booking = require('../model/booking')
exports.createBooking = async (req, res) => {
    console.log(req);
    try {
      const newBooking = await Booking.create(req.body);
      res.status(200).json({
        status: "success",
        newBooking,
      });
    } catch (error) {
      console.log(error);
    }
  };