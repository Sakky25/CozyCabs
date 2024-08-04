// users collection
{
  "_id": ObjectId,
  "name": String,
  "email": String,
  "password": String,
  "referrals": [{ type: ObjectId, ref: "Referral" }]
}

// promocodes collection
{
  "_id": ObjectId,
  "code": String,
  "type": String (e.g. "percentage", "fixed"),
  "value": Number,
  "expirationDate": Date,
  "used": Boolean,
  "userId": { type: ObjectId, ref: "User" }
}

// referrals collection
{
  "_id": ObjectId,
  "userId": { type: ObjectId, ref: "User" },
  "referredUserId": { type: ObjectId, ref: "User" },
  "status": String (e.g. "pending", "completed"),
  "promocodeId": { type: ObjectId, ref: "Promocode" }
}