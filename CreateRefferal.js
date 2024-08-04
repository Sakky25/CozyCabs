POST /referrals
{
  "userId": ObjectId,
  "referredUserId": ObjectId
}

const Referral = mongoose.model('Referral');

router.post('/referrals', async (req, res) => {
  const referral = new Referral(req.body);
  try {
    await referral.save();
    res.status(201).send({ message: 'Referral created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error creating referral' });
  }
});