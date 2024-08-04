GET /referrals/:id

router.get('/referrals/:id', async (req, res) => {
  const referralId = req.params.id;
  const referral = await Referral.findById(referralId);
  res.send(referral);
});