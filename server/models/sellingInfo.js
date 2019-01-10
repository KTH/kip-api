'use strict'

/**
 * Kursinfo API model for selling course info which can be edited by admins.
 */

const mongoose = require('mongoose')

const sellingInfoSchema = mongoose.Schema({
  courseCode: {
    type: String,
    required: [true, 'Enter Course Code']
  },
  sellingText: {
    type: String,
    required: [false, 'If sellingText is added then short text will be hidden.'],
    trim: true,
    minlength: [1, 'Text must have at least one character.'],
    maxlength: [1000, 'Text must have at most 1000 characters.'],
    default: ''
  }/*,
  language: String */
})

const SellingInfo = mongoose.model('sellingInfoSchema', sellingInfoSchema)

module.exports = {
  SellingInfo: SellingInfo,
  sellingInfoSchema: sellingInfoSchema
}
