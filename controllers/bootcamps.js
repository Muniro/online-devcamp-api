const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middleware/async");

// @desc   Get all bootcamps
// @route  GET /api/v1/Bootcamps
// @access Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootCamps = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, count: bootCamps.length, data: bootCamps });
});

// @desc   Get a single bootcamp
// @route  GET /api/v1/Bootcamps/:id
// @access Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootCamp = await Bootcamp.findById(req.params.id);

  if (!bootCamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: bootCamp });
});

// @desc   Creates a single bootcamp
// @route  POST /api/v1/Bootcamps
// @access Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ success: true, data: bootcamp });
});

// @desc   Update a single bootcamp
// @route  PUT /api/v1/Bootcamps/:id
// @access Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    res.status(400).json({ success: false });
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});

// @desc   Deletes a single bootcamp
// @route  DELETE /api/v1/Bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootCamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootCamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});
