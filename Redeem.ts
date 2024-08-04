POST /referrals/:id/redeem

router.post('/referrals/:id/redeem', async (req, res) => {
  const referralId = req.params.id;
  const referral = await Referral.findById(referralId);
  if (referral.status === 'pending') {
    referral.status = 'completed';
    await referral.save();
    const promocode = await Promocode.findById(referral.promocodeId);
    promocode.used = true;
   