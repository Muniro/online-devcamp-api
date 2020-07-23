const Bootcamp = require("../models/Bootcamp");

// @desc   Get all bootcamps
// @route  GET /api/v1/Bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc   Get a single bootcamp
// @route  GET /api/v1/Bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp with id ${req.params.id}`,
  });
};

// @desc   Creates a single bootcamp
// @route  POST /api/v1/Bootcamps
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc   Update a single bootcamp
// @route  PUT /api/v1/Bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp with id ${req.params.id}`,
  });
};

// @desc   Deletes a single bootcamp
// @route  DELETE /api/v1/Bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp with id ${req.params.id}`,
  });
};
