POST /promocodes
{
  "code": String,
  "type": String,
  "value": Number,
  "expirationDate": Date
}code

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Promocode = mongoose.model('Promocode');

router.post('/promocodes', async (req, res) => {
  const promocode = new Promocode(req.body);
  try {
    await promocode.save();
    res.status(201).send({ message: 'Promo code created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error creating promo code' });
  }
});