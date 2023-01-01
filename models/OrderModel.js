import mongoose from 'mongoose';
const OrdersSchema = new mongoose.Schema(
	{
		customer: {
			type: String,
			required: true,
			maxlength: 200
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		address: {
			type: String,
			required: true,
			maxlength: 200
		},
		total: {
			type: String,
			required: true
		},
		status: {
			type: Number,
			default: 0
		},
		method: {
			type: Number,
			required: true
		}
	},
	{ timestamps: true }
);
export default mongoose.models.Order || mongoose.model('Order', OrdersSchema);
