POST /transactions
{
  "promocodeId": ObjectId,
  "transactionAmount": Number
}

const Transaction = mongoose.model('Transaction');

router.post('/transactions', async (req, res) => {
  const promocodeId = req.body.promocodeId;
  const transactionAmount = req.body.transactionAmount;
  const promocode = await Promocode.findById(promocodeId);
  if (!promocode || promocode.used) {
    res.status(400).send({ message: 'Invalid promo code' });
  } else {
    const discountAmount = calculateDiscount(promocode, transactionAmount);
    const transaction = new Transaction({ amount: transactionAmount - discountAmount });
    try {
      await transaction.save();
      promocode.used = true;
      await promocode.save();
      res.send({ message: 'Transaction completed successfully' });
    } catch (error) {
      res.status(400).send({ message: 'Error completing transaction' });
    }
  }
});

function calculateDiscount(promocode, transactionAmount) {
  if (promocode.type === 'percentage') {
    return transactionAmount * promocode.value / 100;
  } else {
    return promocode.value;
  }
}