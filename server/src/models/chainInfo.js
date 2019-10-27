import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const chainInfoSchema = new Schema({
  custom_id : { type : Number, required : true, index: true },
  blockNumber: String,
  moneySupply: String,
  price: String,
},
{
	collection : 'ChainInfo',
	autoCreate: true,
});

chainInfoSchema.pre('save', function (next) {
  const chainInfo = this;
});

export default mongoose.model('chainInfo', chainInfoSchema);
